// app/(marketing)/page.tsx
"use client";

import MarketingPageUI from "@/components/MarketingPageUI";

export default function MarketingHomePage() {
    return (
        <main className="w-full min-h-screen bg-[#07090e]">
            <MarketingPageUI />
        </main>
    );
}