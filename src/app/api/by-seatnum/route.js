// src/app/api/by-seatnum/route.js
import { databases, Query } from "@/lib/appwrite";
import { NextResponse } from "next/server";

// In-memory cache for seat lookups (saves reads when searching the same seat)
const seatCache = new Map();
const CACHE_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let seatnum = searchParams.get("seatnum");

    if (!seatnum) {
      return NextResponse.json({ error: "seatnum is required" }, { status: 400 });
    }

    // Convert to number if it's numeric (most common for seat numbers)
    const seatnumNumber = Number(seatnum);
    const isNumeric = !isNaN(seatnumNumber) && seatnum.trim() !== "";
    const queryValue = isNumeric ? seatnumNumber : seatnum;

    // Check cache first (0 Appwrite reads if found!)
    const cacheKey = String(queryValue);
    const cachedEntry = seatCache.get(cacheKey);
    const now = Date.now();

    if (cachedEntry && (now - cachedEntry.timestamp < CACHE_DURATION)) {
      console.log(`Serving seat ${seatnum} from cache...`);
      return NextResponse.json({
        success: true,
        data: cachedEntry.data,
      });
    }

    // Fetch from Appwrite if not cached
    const response = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_POSTS_COLLECTION_ID,
      [
        Query.equal("seatnum", queryValue),
        Query.limit(1)
      ]
    );

    if (response.documents.length === 0) {
      return NextResponse.json({
        error: `No record found for seat number: ${seatnum}`
      }, { status: 404 });
    }

    const studentData = response.documents[0];

    // Store result in cache
    seatCache.set(cacheKey, {
      data: studentData,
      timestamp: now
    });

    return NextResponse.json({
      success: true,
      data: studentData,
    });
  } catch (error) {
    console.error("Appwrite Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch document" },
      { status: 500 }
    );
  }
}