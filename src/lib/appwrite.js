import { Client, Account, Databases,Storage, ID,Query } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// Collection ID and Database ID from your Appwrite console
export const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
export const COLLECTION_ID = process.env.APPWRITE_POSTS_COLLECTION_ID;
export const ID_EXAMPLE = ID;
export { Query };

export { client, account, databases, storage };
