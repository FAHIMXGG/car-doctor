import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const servicesCollections = db.collection('services')
    try {
        const { id } = await params;
        const service = await servicesCollections.findOne({_id : id})
        return NextResponse.json({service})
    } catch (error) {
        console.log(error)
    }
}