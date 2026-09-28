// app/api/info/[id]/route.js
import { databases, DATABASE_ID, COLLECTION_ID } from '@/lib/appwrite';
import { NextResponse } from 'next/server';
import { Query } from 'node-appwrite'; // or 'appwrite' depending on your setup

// In-memory cache for seat lookups
const seatCache = new Map();
const CACHE_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

export async function GET(request, { params }) {
    const resolvedParams = await params;
    const seatnum = resolvedParams.id; // Note: [id] folder captures this as the route parameter

    try {
        const cacheKey = String(seatnum);
        const cachedEntry = seatCache.get(cacheKey);
        const now = Date.now();

        // Return from cache if valid (0 Appwrite reads!)
        if (cachedEntry && (now - cachedEntry.timestamp < CACHE_DURATION)) {
            console.log(`Serving seat ${seatnum} from cache...`);
            return NextResponse.json(cachedEntry.data);
        }

        // Fetch from Appwrite with clean query array and safe limit
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.equal('seatnum', Number(seatnum) || seatnum),
                Query.limit(1)
            ]
        );
        
        if (response.documents.length === 0) {
            return NextResponse.json(
                { error: 'Not found' }, 
                { status: 404 }
            );
        }
        
        const studentData = response.documents[0];

        // Save into cache
        seatCache.set(cacheKey, {
            data: studentData,
            timestamp: now
        });

        return NextResponse.json(studentData);
    } catch (error) {
        console.error("Appwrite Error:", error);
        return NextResponse.json(
            { error: error.message }, 
            { status: 500 }
        );
    }
}