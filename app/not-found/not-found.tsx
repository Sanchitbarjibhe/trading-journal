// app/not-found.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#090b11] text-white flex flex-col items-center justify-center p-6 select-none relative overflow-hidden font-sans">

            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-w-125500px] h-125 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Embedded Premium IconScout Style Business Analysis SVG Illustration */}
            <div className="w-full max-w-sm mb-6 flex justify-center z-10">
                <svg
                    className="w-56 h-56 text-indigo-500/80 drop-shadow-[0_10px_30px_rgba(99,102,241,0.15)]"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Abstract Grid Platform */}
                    <path d="M20 150H180" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="opacity-30" />
                    <path d="M40 130H160" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-20" />

                    {/* Candlestick / Data Bars representing failed execution path */}
                    <rect x="50" y="90" width="12" height="40" rx="2" fill="currentColor" className="opacity-20" />
                    <rect x="75" y="70" width="12" height="60" rx="2" fill="currentColor" className="opacity-40" />
                    <rect x="100" y="105" width="12" height="25" rx="2" fill="#ef4444" className="opacity-60 animate-pulse" /> {/* Red failed node */}
                    <rect x="125" y="50" width="12" height="80" rx="2" fill="currentColor" className="opacity-30" />

                    {/* Broken Analytics Trend Line */}
                    <path d="M56 100L81 80L106 115L131 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M131 60L156 95" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />

                    {/* Decorative 404 Floating Badges */}
                    <circle cx="106" cy="115" r="5" fill="#ef4444" />
                    <circle cx="131" cy="60" r="4" fill="currentColor" />
                </svg>
            </div>

            {/* Semantic Error Headers */}
            <div className="space-y-3 text-center max-w-md z-10 mb-8">
                <h2 className="text-2xl font-bold tracking-tight bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Execution Path Invalid
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                    The chart pattern or page you are searching for does not exist in the Tradox ecosystem. Your routing might have encountered a sudden slippage.
                </p>
            </div>

            {/* Action Button to Recover Layout */}
            <Link
                href="/dashboard"
                className="px-6 py-3 bg-white text-[#090b11] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition duration-200 z-10"
            >
                Return to Secure Dashboard
            </Link>
        </div>
    );
}