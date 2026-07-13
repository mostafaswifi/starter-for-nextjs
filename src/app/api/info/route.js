import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID,Query } from '@/lib/appwriteAdmin';
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

export async function PUT( request){
  try {
    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
    await  request.nextUrl.searchParams.get("id"),
     await request.json()
    );
    return NextResponse.json(
      { success: true, data: response },
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