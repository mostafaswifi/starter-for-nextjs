// src/app/api/addallstudents/route.js
import { databases, ID,Query } from '@/lib/appwriteStudentsData';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const students = await request.json();
        
        if (!Array.isArray(students) || students.length === 0) {
            return NextResponse.json(
                { error: 'Invalid data: expected an array of students' },
                { status: 400 }
            );
        }
        
        const results = [];
        const errors = [];
        const DELAY_BETWEEN_REQUESTS = 200; // 200ms between each student
        const MAX_RETRIES = 3;
        
        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            let retries = 0;
            let success = false;
            
            while (!success && retries <= MAX_RETRIES) {
                try {
                    const result = await databases.createDocument(
                        process.env.APPWRITE_DATABASE_ID,
                        process.env.APPWRITE_POSTS_COLLECTION_ID,
                        ID.unique(),
                        student
                    );
                    results.push(result);
                    success = true;
                    
                    if (i % 10 === 0) {
                        console.log(`Processed ${i + 1}/${students.length} students`);
                    }
                    
                } catch (error) {
                    if (error.code === 429 || error.type === 'general_rate_limit_exceeded') {
                        retries++;
                        if (retries <= MAX_RETRIES) {
                            const waitTime = Math.pow(2, retries) * 1000;
                            console.log(`Rate limit hit for student ${i+1}. Retrying in ${waitTime/1000}s...`);
                            await new Promise(resolve => setTimeout(resolve, waitTime));
                        } else {
                            errors.push({ index: i, student, error: error.message });
                            break;
                        }
                    } else {
                        errors.push({ index: i, student, error: error.message });
                        break;
                    }
                }
            }
            
            // Delay between requests with jitter
            if (i < students.length - 1) {
                const delay = DELAY_BETWEEN_REQUESTS + (Math.random() * 100);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        
        return NextResponse.json({
            success: true,
            totalStudents: students.length,
            successfullyUploaded: results.length,
            failedCount: errors.length,
            errors: errors.length > 0 ? errors : undefined,
            hasErrors: errors.length > 0
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