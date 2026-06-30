import React, { useState } from "react";
import Navbar from "./Navbar";

export default function MarketingPageUI() {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName || !country! || !email) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/marketing-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    country: country
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSubmitted(true);
            } else {
                alert(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between selection:bg-indigo-500/30 font-sans overflow-x-hidden relative">

            {/* BACKGROUND GLOW EFFECTS */}
            <div className="absolute top-0 left-1/4 w-125 h-125 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-100 h-100 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* ─── 1. PREMIUM HEADER ─── */}
            <Navbar />

            {/* ─── 2. HERO CHAMBER (THE HOOK) ─── */}
            <main className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center pt-20 pb-16 relative z-10 my-auto">

                {/* SMALL BADGE */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-550/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-8 animate-pulse">
                    <span>🧠 Neuro-Trading Architecture for Next-Gen Traders</span>
                </div>

                {/* MAIN HEADLINE */}
                <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.1] text-white max-w-4xl">
                    Stop Overtrading. <br />
                    Track Your{" "}
                    <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Psychological Footprint.
                    </span>
                </h1>

                {/* SUBTITLE */}
                <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed font-normal">
                    SweepX isn't just an execution log. It maps your emotional matrix—tracing <span className="text-amber-400 font-medium">FOMO</span>, <span className="text-rose-400 font-medium">Greed</span>, and discipline data alongside flawless technical analytics.
                </p>

                {/* HIGH-CONVERTING WAITLIST FORM */}
                <div className="mt-10 w-full max-w-lg bg-slate-900/30 p-4 rounded-xl border border-slate-800/80 backdrop-blur-md shadow-2xl relative">
                    {!submitted ? (
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3 text-left">

                            {/* Row 1: First Name & Country */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[11px] font-mono text-slate-550 uppercase tracking-wider px-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="Jonh Doe"
                                        className="w-full bg-[#0b0d14] border border-slate-800/80 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors text-slate-200"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[11px] font-mono text-slate-550 uppercase tracking-wider px-1">Country</label>
                                    <input
                                        type="text"
                                        required
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        placeholder="America"
                                        className="w-full bg-[#0b0d14] border border-slate-800/80 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors text-slate-200"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-mono text-slate-550 uppercase tracking-wider px-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="jonhdoe@SweepX.com"
                                    className="w-full bg-[#0b0d14] border border-slate-800/80 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors text-slate-200"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-2 w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-medium py-3 rounded-lg text-sm transition-all duration-200 active:scale-[0.99] shadow-lg shadow-indigo-600/20 text-center"
                            >
                                {loading ? "Securing Slot..." : "Get Exclusive Access"}
                            </button>

                        </form>
                    ) : (
                        <div className="py-6 px-4 text-xs text-emerald-400 font-mono font-black flex flex-col items-center justify-center gap-3 tracking-widest border border-emerald-500/10 rounded-lg bg-emerald-500/2">
                            <svg className="w-5 h-5 text-emerald-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>ACCESS GRANTED // POSITION RESERVED</span>
                            <span className="text-[10px] text-slate-500 font-normal normal-case">Welcome to the circle, {firstName}! We've queued your launch ticket.</span>
                        </div>
                    )}
                </div>

                {/* SOCIAL PROOF MOCK DATA */}
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Join 480+ institutional & retail traders currently in queue</span>
                </div>

                {/* ─── DETAILED FEATURE MATRIX (CLEAN & SIMPLE) ─── */}
                <div className="mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative">

                    {/* Card 1: Metrics */}
                    <div className="p-6 rounded-xl border border-slate-900 bg-linear-to-b from-slate-900/40 to-slate-950/20 hover:border-slate-800/80 transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
                        <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 w-fit text-indigo-400 mb-4">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                            </svg>
                        </div>
                        <h3 className="text-base font-bold text-slate-200 tracking-wide">Track Every Edge</h3>
                        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                            Automatically log your trades, calculate clear Risk-to-Reward ratios, and find out exactly where you are making or losing money.
                        </p>
                    </div>

                    {/* Card 2: Psychology */}
                    <div className="p-6 rounded-xl border border-slate-900 bg-linear-to-b from-slate-900/40 to-slate-950/20 hover:border-slate-800/80 transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />
                        <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 w-fit text-purple-400 mb-4">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-base font-bold text-slate-200 tracking-wide">Master Your Emotions</h3>
                        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                            Tag your emotional states instantly. Identify when FOMO, revenge trading, or greed are affecting your discipline and draining your account.
                        </p>
                    </div>

                    {/* Card 3: Multi-Timeframe */}
                    <div className="p-6 rounded-xl border border-slate-900 bg-linear-to-b from-slate-900/40 to-slate-950/20 hover:border-slate-800/80 transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />
                        <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 w-fit text-cyan-400 mb-4">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
                            </svg>
                        </div>
                        <h3 className="text-base font-bold text-slate-200 tracking-wide">See the Big Picture</h3>
                        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                            Review multiple timeframes side-by-side. See if your executions align with your higher timeframe logic during weekend deep-dives.
                        </p>
                    </div>

                </div>

            </main>

            {/* ─── 4. FOOTER CRADLE ─── */}
            <footer className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs font-mono text-slate-600">
                <div>© 2026 SweepX Tech Architecture. All rights reserved.</div>
                <div className="flex gap-6">
                    <span className="hover:text-slate-400 cursor-pointer transition-colors">Built for disciplined execution.</span>
                </div>
            </footer>

        </div>
    );
}