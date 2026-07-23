import { NextResponse } from 'next/server';
import { databases, DATABASE_ID, COLLECTION_ID, ID, Query } from '@/lib/appwriteDates';

// POST - Create a new available date
export async function POST(request) {
  try {
    const body = await request.json();
    const { avaliabledates, completed, maxnumforeachdte, numberofaddedstudents } = body;

    // Validate required fields
    if (!avaliabledates || !completed || !maxnumforeachdte || !numberofaddedstudents) {
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
        completed,
        maxnumforeachdte,
        numberofaddedstudents,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        
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