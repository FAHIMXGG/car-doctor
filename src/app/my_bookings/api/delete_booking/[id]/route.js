import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const { id } = await params;
    const bookingsCollection = db.collection("bookings");
    try {
      const resp = await bookingsCollection.deleteOne({
        _id: new ObjectId(id),
      });
      return NextResponse.json({ message: "deleted the booking", response: resp });
    } catch (error) {
      return NextResponse.json({ message: "Something Went Wrong" });
    }
  };