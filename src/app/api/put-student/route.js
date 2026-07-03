import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { databases } from "@/lib/appwrite";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_POSTS_COLLECTION_ID;

export async function PUT(request) {
  try {
    // Get the document ID from cookies
    const cookieStore = await cookies();
    const studentDataCookie = cookieStore.get("studentData");

    if (!studentDataCookie) {
      return NextResponse.json(
        { success: false, error: "Student data not found in cookies" },
        { status: 401 }
      );
    }

    const parsedData = JSON.parse(studentDataCookie.value);
    const storedId = parsedData.$id;
    
    if (!storedId) {
      return NextResponse.json(
        { success: false, error: "Student ID not found" },
        { status: 400 }
      );
    }

    console.log("Stored ID from cookie:", storedId);

    // Parse the request body
    const body = await request.json();
    const { items } = body;

    // Check if items exist and have data to update
    if (!items || Object.keys(items).length === 0) {
      return NextResponse.json(
        { success: false, error: "No data provided for update" },
        { status: 400 }
      );
    }

    // Update the document
    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      storedId,
      items // Pass items directly - no need to spread in an object
    );

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}