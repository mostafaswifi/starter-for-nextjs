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
    try {
        // Fetch all documents with pagination
        const allDocuments = [];
        let offset = 0;
        const LIMIT = 100;
        
        console.log('Fetching all documents...');
        while (true) {
            const response = await databases.listDocuments(
                process.env.APPWRITE_DATABASE_ID,
                process.env.APPWRITE_POSTS_COLLECTION_ID,
                [
                    Query.limit(LIMIT),
                    Query.offset(offset)
                ]
            );
            
            allDocuments.push(...response.documents);
            
            if (response.documents.length < LIMIT) {
                break;
            }
            
            offset += LIMIT;
            console.log(`Fetched ${allDocuments.length} documents so far...`);
        }
        
        console.log(`Total documents to delete: ${allDocuments.length}`);
        
        if (allDocuments.length === 0) {
            return NextResponse.json({ 
                success: true, 
                message: 'No documents to delete',
                count: 0 
            });
        }
        
        // Delete in small batches but sequential within each batch
        const BATCH_SIZE = 5; // Very small batch size
        const DELAY_BETWEEN_DELETIONS = 200;
        const DELAY_BETWEEN_BATCHES = 1000;
        const MAX_RETRIES = 3;
        let deletedCount = 0;
        const errors = [];
        
        for (let i = 0; i < allDocuments.length; i += BATCH_SIZE) {
            const batch = allDocuments.slice(i, i + BATCH_SIZE);
            const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
            
            console.log(`Processing batch ${batchNumber} (${batch.length} documents)...`);
            
            // Process each document in the batch sequentially
            for (let j = 0; j < batch.length; j++) {
                const doc = batch[j];
                const globalIndex = i + j + 1;
                let retries = 0;
                let success = false;
                
                while (!success && retries <= MAX_RETRIES) {
                    try {
                        await databases.deleteDocument(
                            process.env.APPWRITE_DATABASE_ID,
                            process.env.APPWRITE_POSTS_COLLECTION_ID,
                            doc.$id
                        );
                        
                        deletedCount++;
                        success = true;
                        
                        if (globalIndex % 10 === 0) {
                            console.log(`Deleted ${globalIndex}/${allDocuments.length} documents`);
                        }
                        
                    } catch (error) {
                        if (error.code === 429 || error.type === 'general_rate_limit_exceeded') {
                            retries++;
                            if (retries <= MAX_RETRIES) {
                                const waitTime = Math.pow(2, retries) * 1000;
                                console.log(`Rate limit hit. Retrying document ${doc.$id} in ${waitTime/1000}s...`);
                                await new Promise(resolve => setTimeout(resolve, waitTime));
                            } else {
                                errors.push({
                                    docId: doc.$id,
                                    error: 'Rate limit exceeded after multiple retries'
                                });
                                break;
                            }
                        } else {
                            errors.push({
                                docId: doc.$id,
                                error: error.message
                            });
                            break;
                        }
                    }
                }
                
                // Delay between deletions
                if (globalIndex < allDocuments.length) {
                    await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_DELETIONS + (Math.random() * 100)));
                }
            }
            
            // Longer delay between batches
            if (i + BATCH_SIZE < allDocuments.length) {
                console.log(`Batch ${batchNumber} complete. Waiting before next batch...`);
                await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
            }
        }
        
        return NextResponse.json({ 
            success: true,
            totalDocuments: allDocuments.length,
            deletedCount: deletedCount,
            failedCount: allDocuments.length - deletedCount,
            errors: errors.length > 0 ? errors : undefined,
            hasErrors: errors.length > 0,
            message: errors.length > 0 
                ? `Deleted ${deletedCount} of ${allDocuments.length} documents. ${errors.length} failed.`
                : `Successfully deleted all ${deletedCount} documents`
        });
        
    } catch (error) {
        console.error('Error deleting documents:', error);
        return NextResponse.json(
            { 
                error: error.message,
                details: 'Failed to delete documents'
            },
            { status: 500 }
        );
    }
}