import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PUT(request) {
  // Removed { params } since you're not using it
  try {
    // Your stored ID variable
    const storedId = null;

    const cookieStore = cookies();
    const studentDataCookie = cookieStore.get("studentData");

    if (studentDataCookie) {
      const parsedData = JSON.parse(studentDataCookie.value);
      storedId = parsedData.$id;
      console.log("Stored ID from cookie:", storedId);
    }

    const body = await request.json();
    const { title, description } = body;

    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      storedId, // Use your stored ID
      {
        title,
        description,
        updatedAt: new Date().toISOString(),
      },
    );

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }

}
