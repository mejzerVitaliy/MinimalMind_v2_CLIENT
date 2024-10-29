import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const userID = req.cookies.get('UserID')?.value
    console.log("UserID from cookies:", userID);
    console.log("Requested path:", req.nextUrl.pathname);

    if (userID && req.nextUrl.pathname === '/signIn') {
        console.log("Redirecting to home page...");
        return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/signIn', '/logIn'], 
}