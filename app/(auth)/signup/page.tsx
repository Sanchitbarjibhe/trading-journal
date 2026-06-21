// app/signup/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement authentication logic for Tradox
        console.log("Tradox Signup Data Submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-app-bg text-app-text flex font-sans selection:bg-app-card/50">
            {/* --- 🌗 LEFT SPLIT: BRANDING & TRADER'S PSYCHOLOGY --- */}
            <div className="hidden lg:flex lg:w-[55%] xl:w-[60%] bg-[#0f111a] relative flex-col justify-between p-16 overflow-hidden border-r border-app-border/10">

                {/* Tradox Branding Logo - Fixed visibility by adding explicit white text */}
                <div className="flex items-center gap-3 z-10 select-none">
                    <div className="w-9 h-9 bg-white text-[#0f111a] flex items-center justify-center rounded-lg font-black text-xl tracking-tighter shadow-md">
                        T
                    </div>
                    <span className="text-xl font-bold tracking-widest text-white uppercase">
                        Tradox
                    </span>
                </div>

                {/* Typography Section - Enhanced size and line spacing */}
                <div className="my-auto max-w-xl z-10 space-y-6 pt-12">
                    <h1 className="text-4xl xl:text-5xl font-bold tracking-tight text-white leading-[1.3]">
                        Emotions build losses. <br />
                        <span className="text-app-muted/80 font-medium">Rules build compounding.</span> <br />
                        <span className="bg-linear-to-r from-white via-slate-200 to-app-muted bg-clip-text text-transparent">
                            Master your execution with Tradox.
                        </span>
                    </h1>
                </div>

                {/* Trade Journal Dashboard Preview - Refactored positioning to prevent rough clipping */}
                <div className="relative w-full h-70 bg-app-card/20 rounded-xl border border-app-border/10 p-6 shadow-2xl backdrop-blur-md opacity-30 select-none pointer-events-none transition-all duration-300">
                    <div className="flex items-center justify-between border-b border-app-border/5 pb-4 mb-4">
                        <div className="h-3 w-24 bg-app-muted/30 rounded" />
                        <div className="h-6 w-16 bg-app-muted/20 rounded-full" />
                    </div>
                    <div className="space-y-4">
                        <div className="h-25 bg-linear-to-t from-app-bg/5 to-app-muted/5 rounded-lg border border-app-border/5 flex items-end p-4">
                            <div className="w-full h-12 border-b border-app-muted/10 flex items-end gap-1.5">
                                {[40, 60, 45, 75, 90, 65, 85, 100, 110, 70, 95].map((h, i) => (
                                    <div key={i} className="flex-1 bg-app-muted/20 rounded-t-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="h-12 bg-app-muted/10 rounded-lg border border-app-border/5" />
                            <div className="h-12 bg-app-muted/10 rounded-lg border border-app-border/5" />
                            <div className="h-12 bg-app-muted/10 rounded-lg border border-app-border/5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 🌓 RIGHT SPLIT: INTERACTIVE FORM AREA (Max Width Centered) --- */}
            <div className="w-full lg:w-[45%] xl:w-[40%] flex items-center justify-center p-6 sm:p-12 md:p-20 bg-app-bg">
                <div className="w-full max-w-md bg-app-card border border-app-border/40 rounded-2xl p-8 shadow-xl shadow-black/10">

                    {/* Header Section */}
                    <div className="space-y-2 mb-8 text-center lg:text-left">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Create your Tradox Account
                        </h2>
                        <p className="text-sm text-app-muted">
                            Start journaling your edges and optimize execution metrics today.
                        </p>
                    </div>

                    {/* Social Sign-In (OAuth Google Integration) */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-app-border hover:bg-app-bg rounded-xl text-sm font-medium transition duration-200 active:scale-[0.99]"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Continue with Google
                    </button>

                    {/* Form Divider */}
                    <div className="relative flex py-5 items-center">
                        <div className="grow border-t border-app-border/30"></div>
                        <span className="shrink mx-4 text-xs uppercase text-app-muted tracking-wider">
                            or register with email
                        </span>
                        <div className="grow border-t border-t-app-border/30"></div>
                    </div>

                    {/* Interactive Native Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-app-muted mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Full Name"
                                className="w-full px-4 py-3 bg-app-bg border border-app-border/60 rounded-xl text-sm focus:outline-none focus:border-app-text/40 transition"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-app-muted mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className="w-full px-4 py-3 bg-app-bg border border-app-border/60 rounded-xl text-sm focus:outline-none focus:border-app-text/40 transition"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-app-muted mb-2">
                                Secure Password
                            </label>
                            <input
                                type="password"
                                required
                                placeholder="Secure Password"
                                className="w-full px-4 py-3 bg-app-bg border border-app-border/60 rounded-xl text-sm focus:outline-none focus:border-app-text/40 transition"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        {/* Action Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-2 bg-app-text text-app-bg font-semibold py-3 px-4 rounded-xl hover:opacity-90 active:scale-[0.99] transition duration-200"
                        >
                            Create Free Account
                        </button>
                    </form>

                    {/* Footer Interactive Navigation Link */}
                    <div className="mt-6 text-center text-sm text-app-muted">
                        Already have an account?{" "}
                        <Link href="/login" className="text-app-text font-medium hover:underline underline-offset-4">
                            Sign in
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
}