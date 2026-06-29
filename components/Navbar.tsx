// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="max-w-7xl w-full mx-auto px-6 py-6 flex justify-between items-center relative z-10">
            <div className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-between gap-4">

                {/* LEFT SECTION: LOGO */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    {/* Geometric SVG Logo */}
                    <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                    </svg>
                    <span className="text-base font-bold tracking-wider font-mono text-white">
                        SweepX
                    </span>
                </Link>

                {/* RIGHT SECTION: LINKS + AUTH BUTTONS (RESPONSIVE) */}
                <div className="flex items-center gap-4 sm:gap-6 ml-auto">
                    {/* Blogs Link */}
                    <Link
                        href="/marketing/blog"
                        className="text-xs font-mono tracking-wide text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                    >
                        BLOGS
                    </Link>

                    {/* Login Link */}
                    <Link
                        href="/auth/login"
                        className="text-xs font-mono tracking-wide text-slate-400 hover:text-white transition-colors duration-200"
                    >
                        LOGIN
                    </Link>

                    {/* Sign Up Button */}
                    <Link
                        href="/auth/signup"
                        className="relative group overflow-hidden bg-indigo-600 hover:bg-indigo-550 text-white text-[11px] sm:text-xs font-mono tracking-wider px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg transition-all duration-200 active:scale-[0.98] shadow-md shadow-indigo-600/10 border border-indigo-500/20 shrink-0"
                    >
                        SIGN UP
                    </Link>

                    {/* Version Tag (Hidden on smaller mobile screens for clean look) */}
                    <div className="hidden md:block text-[11px] text-slate-600 font-mono border-l border-slate-800 pl-4 shrink-0">
                        v1.0.0-beta
                    </div>
                </div>

            </div>
        </nav>
    );
}