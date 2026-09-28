import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID, ID, Query } from '@/lib/appwriteDates';

// In-memory cache variables for dates
let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

// POST - Create a new available date
export async function POST(request) {
  try {
    const body = await request.json();
    const { avaliabledates, groupnumber, maxnumforeachdte } = body;

    // Validate required fields
    if (!avaliabledates) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const document = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        avaliabledates,
        groupnumber,
        $createdAt: new Date().toLocaleString(),$updatedAt: new Date().toLocaleString(),
        maxnumforeachdte
      }
    );

    // Invalidate cache so fresh data is loaded next time
    cachedData = null;

    return NextResponse.json({
      success: true,
      data: document,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating available date:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create available date' },
      { status: 500 }
    );
  }
}

// GET - Fetch available dates with 3-hour cache
export async function GET() {
  const now = Date.now();

  // Return cached dates instantly (0 Appwrite reads!)
  if (cachedData && (now - lastFetchTime < CACHE_DURATION)) {
    console.log("Serving available dates from cache...");
    return NextResponse.json({ success: true, data: cachedData }, { status: 200 });
  }

  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.limit(100) // Safe batch limit
      ]
    );

    // Save to cache
    cachedData = response.documents;
    lastFetchTime = now;

    return NextResponse.json(
      { success: true, data: response.documents },
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

// DELETE - Delete all available dates
export async function DELETE(request) {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID, 
      COLLECTION_ID, 
      [
        Query.limit(5000)
      ]
    );
    
    const deletePromises = response.documents.map(doc => 
      databases.deleteDocument(
        DATABASE_ID, 
        COLLECTION_ID, 
        doc.$id
      )
    );
    
    await Promise.all(deletePromises);

    // Invalidate cache
    cachedData = null;
    
    return NextResponse.json(
      { success: true, message: `Deleted ${response.documents.length} documents` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting items:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update an existing date
export async function PUT(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID parameter is required" },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      id,
      body
    );

    // Invalidate cache
    cachedData = null;
    
    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating document:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}