import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const bookingsCollections = db.collection('bookings')
    try {
        const { email } = await params;
        //console.log(email)
        const myBookings = await bookingsCollections.find({email : email}).toArray()
        return NextResponse.json({myBookings})
    } catch (error) {
        console.log(error)
    }
}