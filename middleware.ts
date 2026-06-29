// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Retrieve authentication token from cookies
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;

    // Redirect to dashboard if authenticated user tries to access marketing or auth pages
    if (token && (pathname === '/' || pathname.startsWith('/auth'))) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Redirect to login if unauthenticated user tries to access dashboard routes
    if (!token && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

// Configure routes where this middleware should execute
export const config = {
    matcher: ['/', '/dashboard/:path*', '/auth/:path*'],
};