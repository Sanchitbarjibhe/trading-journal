// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        // 1. Validation check for missing fields
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "All fields (name, email, password) are required." },
                { status: 400 }
            );
        }

        // 2. Check if the user already exists in the database
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "This email address is already registered." },
                { status: 400 }
            );
        }

        // 3. Create the new user in the database
        // Note: For MVP we are storing plain text. For production, encrypt using bcrypt/argon2.
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        // 4. Return success response with user payload
        return NextResponse.json(
            {
                message: "User registered successfully!",
                user: { id: newUser.id, name: newUser.name, email: newUser.email }
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Signup API Error:", error);
        return NextResponse.json(
            { error: "Internal server error. Something went wrong on our end." },
            { status: 500 }
        );
    }
}