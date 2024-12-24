import { connectDB } from "@/lib/connectDB"

export const POST = async (request) => {
    const booking = await request.json();
    const db =await connectDB()
    const bookingsCollections = db.collection('bookings')
    try {
        const newBooking = await bookingsCollections.insertOne(booking)
        return Response.json({service})
    } catch (error) {
        console.log(error)
    }
}