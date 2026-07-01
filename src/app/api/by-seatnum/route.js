// src/app/api/by-seatnum/route.js
import { databases, Query } from "@/lib/appwrite";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let seatnum = searchParams.get("seatnum");

    if (!seatnum) {
      return NextResponse.json({ error: "seatnum is required" }, { status: 400 });
    }

    // Convert to number if it's numeric (most common for seat numbers)
    const seatnumNumber = Number(seatnum);
    const isNumeric = !isNaN(seatnumNumber) && seatnum.trim() !== "";

    const queryValue = isNumeric ? seatnumNumber : seatnum;

  

    const response = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_POSTS_COLLECTION_ID,
      [
        Query.equal("seatnum", queryValue),
        Query.limit(1)
      ]
    );

    if (response.documents.length === 0) {
      return NextResponse.json({
        error: `No record found for seat number: ${seatnum}`
      }, { status: 404 });
    }
    // const studentData = response.documents[0];

    return NextResponse.json({
      success: true,
      data: response.documents[0],
    });
  } catch (error) {
    console.error("Appwrite Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch document" },
      { status: 500 }
    );
  }
}

// export async function PUT(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     let seatnum = searchParams.get("seatnum");

//     if (!seatnum) {
//       return NextResponse.json({ error: "seatnum is required" }, { status: 400 });
//     }

//     // Convert to number if it's numeric (most common for seat numbers)
//     const seatnumNumber = Number(seatnum);
//     const isNumeric = !isNaN(seatnumNumber) && seatnum.trim() !== "";

//     const queryValue = isNumeric ? seatnumNumber : seatnum; 

//     const response = await databases.listDocuments(
//         process.env.APPWRITE_DATABASE_ID,
//         process.env.APPWRITE_POSTS_COLLECTION_ID,
//         [
//             Query.equal("seatnum", queryValue),
//             Query.limit(1)
//         ]
//     );

//     if (response.documents.length === 0) {
//         return NextResponse.json({
//             error: `No record found for seat number: ${seatnum}`
//         }, { status: 404 });
//     }

//     const documentId = response.documents[0].$id;
//     const data = await request.json();
//     await databases.updateDocument(
//         process.env.APPWRITE_DATABASE_ID,
//         process.env.APPWRITE_POSTS_COLLECTION_ID,
//         documentId,
//         data
//     );

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Appwrite Error:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to update document" },
//       { status: 500 }
//     );
//   }
// }

