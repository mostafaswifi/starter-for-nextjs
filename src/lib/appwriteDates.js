import { Client, Databases, ID, Storage, Account, Query } from 'appwrite';

const client = new Client();



client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);

// Validate environment variables
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_POSTS_COLLECTION_ID_AVALIABLE_DATES;

if (!DATABASE_ID || !COLLECTION_ID) {
  console.error('Missing required environment variables:', {
    DATABASE_ID: !!DATABASE_ID,
    COLLECTION_ID: !!COLLECTION_ID,
  });
}

export { DATABASE_ID, COLLECTION_ID, ID, Query };
export default client;