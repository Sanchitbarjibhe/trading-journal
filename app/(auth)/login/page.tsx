// app/login/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import AuthLeftSplit from '@/app/auth-components/AuthLeftSplit';

export default function LoginPage() {
    // Universal Premium AllurUI Input Classes
    const inputClasses = "w-full bg-[#161C2A] text-gray-100 placeholder-gray-500 border border-[#242F48] rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400";

    return (
        <div className="min-h-screen w-full flex bg-[#0B0F19]">

            {/* Left Split - 60% */}
            <AuthLeftSplit
                quote="Emotions build losses. Rules build compounding. Master your execution with Tradox."
                author="Tradox Psychology Engine"
            />

            {/* Right Split - Interactive Form Area (40% Desktop, 100% Mobile) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 bg-[#0E1424]">
                <div className="w-full max-w-md mx-auto space-y-8">

                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-white">Welcome back to Tradox</h1>
                        <p className="text-sm text-gray-400">Enter your credentials to access your secure trade journal.</p>
                    </div>

                    {/* OAuth Integration */}
                    <button className="w-full flex items-center justify-center gap-3 bg-[#161C2A] text-gray-200 border border-[#242F48] rounded-lg py-3 text-sm font-medium transition-all duration-200 hover:bg-[#1E263F] active:scale-[0.99]">
                        {/* Minimal Google SVG Icon */}
                        <div className="relative flex items-center py-2">
                            <div className="grow border-t border-[#242F48]"></div>
                            <span className="shrink mx-4 text-xs tracking-wider uppercase text-gray-500 font-mono">or continue with email</span>
                            <div className="grow border-t border-[#242F48]"></div>
                        </div>
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center py-2">
                        <div className="grow border-t border-[#242F48]"></div>
                        <span className="shrink mx-4 text-xs tracking-wider uppercase text-gray-500 font-mono">or continue with email</span>
                        <div className="grow border-t border-[#242F48]"></div>
                    </div>

                    {/* Form Fields */}
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-gray-400 tracking-wide">Email Address</label>
                            <input type="email" placeholder="name@domain.com" className={inputClasses} required />
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-medium text-gray-400 tracking-wide">Password</label>
                                <Link href="/forgot-password" className="text-xs text-gray-400 hover:text-white transition-colors duration-150">
                                    Forgot Password?
                                </Link>
                            </div>
                            <input type="password" placeholder="••••••••" className={inputClasses} required />
                        </div>

                        {/* Action Button */}
                        <button type="submit" className="w-full bg-white text-[#0B0F19] font-medium py-3 rounded-lg text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.99] mt-2 shadow-lg shadow-white/5">
                            Sign In to Dashboard
                        </button>
                    </form>

                    {/* Footer Link */}
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-gray-300 hover:text-white font-medium transition-colors duration-150">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
}