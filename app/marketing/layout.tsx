// app/(marketing)/layout.tsx
import React from "react";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen bg-[#07090e] text-slate-100">
            {children}
        </div>
    );
}