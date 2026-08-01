import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID, ID, Query } from '@/lib/appwriteDates';

// POST - Create a new available date
export async function POST(request) {
  try {
    const body = await request.json();
    const { avaliabledates , groupnumber, maxnumforeachdte} = body;

    // Validate required fields
    if (!avaliabledates ) {
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
        $createdAt: new Date().toLocaleString(),
        $updatedAt: new Date().toLocaleString(),
        maxnumforeachdte
      }
    );

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

export async function GET() {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.limit(5000) // Fetch up to 5,000 items in a single call
      ]
    );

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


// Delete All available dates
export async function DELETE(request) {
  try {
    // Use the imported constants instead of process.env directly
    const response = await databases.listDocuments(
      DATABASE_ID,  // Use imported constant
      COLLECTION_ID, // Use imported constant
      [
        Query.limit(5000)
      ]
    );
    
    // FIX: Use 'response' instead of 'documents'
    const deletePromises = response.documents.map(doc => 
      databases.deleteDocument(
        DATABASE_ID,  // Use imported constant
        COLLECTION_ID, // Use imported constant
        doc.$id
      )
    );
    
    await Promise.all(deletePromises);
    
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

export async function PUT(request) {
    try {
        // Get ID from URL parameters
        const url = new URL(request.url);
        const id = url.searchParams.get("id");
        
        if (!id) {
            return NextResponse.json(
                { success: false, error: "ID parameter is required" },
                { status: 400 }
            );
        }

        // Get the request body
        const body = await request.json();
        
        // Update the document
        const response = await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id,  // Document ID
            body // Data to update
        );
        
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