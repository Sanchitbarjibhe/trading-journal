// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // १. सर्व API रूट्स (बॅकएंड डेटा सबमिशन) पूर्णपणे चालू ठेवा, जेणेकरून फॉर्म एरर देणार नाही
    if (pathname.startsWith('/api/')) {
        return NextResponse.next();
    }

    // २. लँडिंग पेज, नेक्स्टच्या इंटरनल फाईल्स आणि सर्व इमेजेस/आयॉन्सना परवानगी द्या
    if (
        pathname === '/' ||
        pathname.startsWith('/_next') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // ३. वरील गोष्टी सोडल्यास बाकी सर्व पेजेस (dashboard, journal, auth) थेट ब्लॉक करून लँडिंगवर पाठवा
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};