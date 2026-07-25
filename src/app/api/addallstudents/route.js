// src/app/api/addallstudents/route.js
import { databases, ID,Query } from '@/lib/appwriteStudentsData';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const students = await request.json();
        
        // Validate that students is an array
        if (!Array.isArray(students) || students.length === 0) {
            return NextResponse.json(
                { error: 'Invalid data: expected an array of students' },
                { status: 400 }
            );
        }
        
        // Add all students
        const results = await Promise.all(
            students.map(student => 
                databases.createDocument(
                    process.env.APPWRITE_DATABASE_ID,
                    process.env.APPWRITE_POSTS_COLLECTION_ID,
                    ID.unique(),
                    student
                )
            )
        );
        
        return NextResponse.json({ 
            success: true, 
            count: results.length 
        });
    } catch (error) {
        console.error('Error uploading students:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE() {
    // Delete all rows in datatable
    try {
        // First, list all documents to get their IDs
        const documents = await databases.listDocuments(
            process.env.APPWRITE_DATABASE_ID,
            process.env.APPWRITE_POSTS_COLLECTION_ID,
            [
                Query.limit(5000) // Adjust limit if you have more than 100 documents
            ]
        );
        
        // Delete each document
        const deletePromises = documents.documents.map(doc => 
            databases.deleteDocument(
                process.env.APPWRITE_DATABASE_ID,
                process.env.APPWRITE_POSTS_COLLECTION_ID,
                doc.$id
            )
        );
        
        await Promise.all(deletePromises);
        
        return NextResponse.json({ 
            success: true, 
            count: documents.documents.length 
        });
    } catch (error) {
        console.error('Error deleting documents:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}