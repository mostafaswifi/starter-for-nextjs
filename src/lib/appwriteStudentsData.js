// lib/appwrite.ts
import { Client, TablesDB, Databases, ID, Query } from 'appwrite';

// Client-side client (for browser)
export const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

// Server-side client (for API routes)
export const serverClient = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY); // API key for server operations

// Database service instances
export const tablesDB = new TablesDB(serverClient);
export const databases = new Databases(serverClient);

// Export helpers
export { ID, Query };