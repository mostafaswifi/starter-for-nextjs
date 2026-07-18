// src/app/api/addallstudents/route.js
import { databases, ID } from '@/lib/appwriteStudentsData';
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