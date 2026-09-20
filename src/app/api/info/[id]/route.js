// app/api/info/[id]/route.js
import { databases, DATABASE_ID, COLLECTION_ID } from '@/lib/appwrite';
import { NextResponse } from 'next/server';

const { Query } = require('appwrite');

export async function GET(request, { params }) {
    const { seatnum } = await params; 
    
    try {
      
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Query.equal('seatnum', Number(seatnum))],
  [
    Query.limit(15000) 
  ] 
  ,
            86400
        );
        
        if (response.documents.length === 0) {
            return NextResponse.json(
                { error: 'Not found' }, 
                { status: 404 }
            );
        }
        
        return NextResponse.json(response.documents[0]);
    } catch (error) {
        return NextResponse.json(
            { error: error.message }, 
            { status: 500 }
        );
    }
}