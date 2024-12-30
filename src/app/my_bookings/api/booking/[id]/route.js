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

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const { id } = await params;
  const bookingsCollection = db.collection("bookings");
  const {date, phone, address} = await request.json()
  try {
    const resp = await bookingsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          date,
          phone,
          address,
        }
      },
      {
        upsert : true,
      }
    );
    return NextResponse.json({ message: "updated the booking", response: resp });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const { id } = await params;
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({ message: "Get the booking", response: resp });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};