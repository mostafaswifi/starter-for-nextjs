// lib/appwriteStudentsData.js
import { Client, Databases, ID, Query } from 'appwrite';

// Client-side client (for browser)
export const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

// Server-side client (for API routes)
export const serverClient = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

// For server-side operations, use the API key directly in the Databases constructor
export const databases = new Databases(serverClient);

// Export helpers
export { ID, Query };