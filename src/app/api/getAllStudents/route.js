
import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID, Query } from '@/lib/appwrite';

export async function GET() {
  try {
    let allStudents = [];
    let offset = 0;
    const limit = 5000;
    let hasMore = true;


    while (hasMore) {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.limit(limit),
          Query.offset(offset)
        ],
        86400
      );

      allStudents = [...allStudents, ...response.documents];

  
      if (response.documents.length < limit) {
        hasMore = false;
      } else {
        offset += limit;
      }
    }

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