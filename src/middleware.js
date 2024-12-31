import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async (request) => {
    const token = (await cookies(request)).get('next-auth.session-token')
    const pathname = request.nextUrl.pathname 
    if (pathname.includes('api')) {
        return NextResponse.next()
    }
    if(!token) {
        return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher : [
        "/my_bookings/:path*", "/services/:path*",
    ]
}