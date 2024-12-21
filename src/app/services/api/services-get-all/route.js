import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db =await connectDB()
    const servicesCollections = db.collection('services')
    try {
        const services = await servicesCollections.find().toArray()
        return Response.json({services})
    } catch (error) {
        console.log(error)
    }
}