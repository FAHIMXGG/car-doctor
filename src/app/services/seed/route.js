import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/service";

export const GET = async () => {
    const db =await connectDB()
    const servicesCollections = db.collection('services')
    try {
        await servicesCollections.deleteMany();
        const res = await servicesCollections.insertMany(services)
        return Response.json({message : "Seeded services"})
    } catch (error) {
        return Response.json({message : "No services"})
    }
}