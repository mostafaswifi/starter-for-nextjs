import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID, Query } from '@/lib/appwrite';

// In-memory cache variables (keeps data saved in server memory)
let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

export async function GET() {
  const now = Date.now();

  // 1. If cache is still valid, return it immediately (0 Appwrite reads!)
  if (cachedData && (now - lastFetchTime < CACHE_DURATION)) {
    console.log("Serving all students from cache...");
    return NextResponse.json({ success: true, data: cachedData }, { status: 200 });
  }

  try {
    let allStudents = [];
    let offset = 0;
    const limit = 100; // Safe limit per request (Appwrite Cloud max is usually 100)
    let hasMore = true;

    // 2. Loop to automatically fetch all records in batches
    while (hasMore) {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.limit(limit),
          Query.offset(offset)
        ]
      );

      allStudents = [...allStudents, ...response.documents];

      if (response.documents.length < limit) {
        hasMore = false;
      } else {
        offset += limit;
      }
    }

    // 3. Save the full fetched list into cache
    cachedData = allStudents;
    lastFetchTime = now;

    return NextResponse.json(
      { success: true, data: allStudents },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}