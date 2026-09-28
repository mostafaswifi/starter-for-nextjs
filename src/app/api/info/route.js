import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID, Query } from '@/lib/appwriteAdmin';

let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 3 * 60 * 60 * 1000; // 3 hours

export async function GET() {
  const now = Date.now();

  if (cachedData && (now - lastFetchTime < CACHE_DURATION)) {
    console.log("Serving items from cache...");
    return NextResponse.json({ success: true, data: cachedData }, { status: 200 });
  }

  try {
    let allDocuments = [];
    let offset = 0;
    const limit = 100; // Safe batch size per request
    let hasMore = true;

    // Automatically loop until all records are fetched
    while (hasMore) {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.limit(limit),
          Query.offset(offset)
        ]
      );

      allDocuments.push(...response.documents);

      // If we received fewer documents than the limit, we've reached the end
      if (response.documents.length < limit) {
        hasMore = false;
      } else {
        offset += limit;
      }
    }

    // Save all fetched documents to cache
    cachedData = allDocuments;
    lastFetchTime = now;

    return NextResponse.json(
      { success: true, data: allDocuments },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching all items:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const body = await request.json();

    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      id,
      body
    );

    // Invalidate cache so fresh data is fetched next time
    cachedData = null;

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}