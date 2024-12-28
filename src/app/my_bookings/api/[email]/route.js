import { connectDB } from "@/lib/connectDB"

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const bookingsCollections = db.collection('bookings')
    try {
        const { email } = await params;
        //console.log(email)
        const myBookings = await bookingsCollections.find({email : email}).toArray()
        return Response.json({myBookings})
    } catch (error) {
        console.log(error)
    }
}