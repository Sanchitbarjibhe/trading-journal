// app/login/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setAuthLoading } from "@/store/authSlice";
import { RootState } from "@/store";

export default function LoginPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { loading } = useSelector((state: RootState) => state.auth);

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setAuthLoading(true));

        // Simulating API Authentication latency for MVP
        setTimeout(() => {
            dispatch(
                loginSuccess({
                    name: "Sanchit Barjibhe",
                    email: credentials.email,
                })
            );
            // Redirecting user seamlessly to the trading dashboard
            router.push("/dashboard");
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-app-bg text-app-text flex font-sans selection:bg-app-card/50">

            {/* --- 🌗 LEFT SPLIT: PREMIUM BRANDING & TRADER'S PSYCHOLOGY --- */}
            <div className="hidden lg:flex lg:w-[55%] xl:w-[60%] bg-[#090b11] relative flex-col justify-between p-16 overflow-hidden border-r border-app-border/10">

                {/* Ambient Background Glow Effect for high-end aesthetic feel */}
                <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-emerald-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

                {/* Tradox Branding Logo */}
                <div className="flex items-center gap-3 z-10 select-none">
                    <div className="w-9 h-9 bg-white text-[#090b11] flex items-center justify-center rounded-lg font-black text-xl tracking-tighter shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
                        T
                    </div>
                    <span className="text-xl font-bold tracking-widest text-transparent uppercase bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text">
                        Tradox
                    </span>
                </div>

                {/* Main Psychological Typography Typography */}
                <div className="my-auto max-w-xl z-10 space-y-8 pt-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-medium tracking-wide text-slate-300">Proprietary Psychology Logging Engine</span>
                    </div>

                    <h1 className="text-4xl xl:text-5xl font-black tracking-tight text-white leading-[1.35]">
                        Emotions build losses. <br />
                        <span className="text-slate-500 font-medium">Rules build compounding.</span> <br />
                        <span className="bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Master your execution with Tradox.
                        </span>
                    </h1>

                    <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                        Eliminate cognitive bias, audit execution inconsistencies, and systematically protect your capital with our premium trading analytics infrastructure.
                    </p>
                </div>

                {/* Premium Miniature Terminal & Metric Dashboard Preview */}
                <div className="relative w-full bg-slate-950/40 rounded-xl border border-white/5 p-6 shadow-2xl backdrop-blur-md select-none pointer-events-none group transition-all duration-300 hover:border-white/10">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                            </div>
                            <div className="h-3 w-32 bg-white/10 rounded font-mono text-[10px] text-slate-500 flex items-center pl-2">
                                execution_metrics.sh
                            </div>
                        </div>
                        <div className="h-5 px-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold rounded flex items-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            +24.8% Edge Optimized
                        </div>
                    </div>

                    {/* Metric Grid Mockup */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {[
                            { label: "Win Rate", val: "68.4%", color: "text-emerald-400" },
                            { label: "Profit Factor", val: "2.41", color: "text-indigo-400" },
                            { label: "Avg R:R Ratio", val: "1:3.2", color: "text-white" }
                        ].map((m, idx) => (
                            <div key={idx} className="bg-white/2 border border-white/5 rounded-lg p-3">
                                <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">{m.label}</span>
                                <span className={`text-base font-bold font-mono ${m.color}`}>{m.val}</span>
                            </div>
                        ))}
                    </div>

                    {/* Micro Chart Waves */}
                    <div className="h-17.5 bg-white/1 rounded-lg border border-white/5 flex items-end p-2 relative overflow-hidden">
                        <div className="w-full h-8 border-b border-white/5 flex items-end gap-1.5 z-10">
                            {[25, 45, 35, 65, 55, 80, 70, 95, 110, 85, 120, 105, 130].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-linear-to-t from-indigo-500/20 to-indigo-400/40 rounded-t-sm transition-all duration-500 group-hover:from-indigo-500/30"
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 🌓 RIGHT SPLIT: INTERACTIVE FORM AREA --- */}
            <div className="w-full lg:w-[45%] xl:w-[40%] flex items-center justify-center p-6 sm:p-12 md:p-20 bg-app-bg">
                <div className="w-full max-w-md bg-app-card border border-app-border/40 rounded-2xl p-8 shadow-xl shadow-black/10">

                    <div className="space-y-2 mb-8 text-center lg:text-left">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Welcome back to Tradox
                        </h2>
                        <p className="text-sm text-app-muted">
                            Enter your credentials to access your secure trading journal.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-app-muted mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 bg-app-bg border border-app-border/60 rounded-xl text-sm focus:outline-none focus:border-app-text/40 transition"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-semibold uppercase tracking-wider text-app-muted">
                                    Password
                                </label>
                                <Link href="#" className="text-xs text-app-muted hover:text-app-text transition">
                                    Forgot password?
                                </Link>
                            </div>
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-app-bg border border-app-border/60 rounded-xl text-sm focus:outline-none focus:border-app-text/40 transition"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 bg-app-text text-app-bg font-semibold py-3 px-4 rounded-xl hover:opacity-90 active:scale-[0.99] transition duration-200 flex items-center justify-center disabled:opacity-50"
                        >
                            {loading ? "Verifying Credentials..." : "Sign In to Dashboard"}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-app-muted">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-app-text font-medium hover:underline underline-offset-4">
                            Sign up
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
}