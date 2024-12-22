import { connectDB } from "@/lib/connectDB"

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const servicesCollections = db.collection('services')
    try {
        const service = await servicesCollections.findOne({_id : params.id})
        return Response.json({service})
    } catch (error) {
        console.log(error)
    }
}