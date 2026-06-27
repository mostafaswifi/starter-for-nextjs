import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID } from '@/lib/appwrite';




// GET - Fetch items with authentication
export async function GET() {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID
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