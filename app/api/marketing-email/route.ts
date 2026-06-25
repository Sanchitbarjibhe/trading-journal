import { NextResponse } from "next/server";

interface WaitlistRequestBody {
    email: string;
    firstName: string;
    country: string;
}

export async function POST(request: Request) {
    try {
        const body: WaitlistRequestBody = await request.json();
        const { firstName, email, country } = body;

        if (!email || !firstName || !country) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.LOOPS_API_KEY || ""}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: firstName,
                email: email,
                userId: email,
                userGroup: "Landing Page Waitlist",
                properties: {
                    country: country,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                { success: false, error: errorData.message || "Loops registration failed" },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });

    } catch (err: any) {
        console.error("API_ERROR:", err);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}