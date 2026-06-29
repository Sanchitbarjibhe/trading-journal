// components/AboutSection.tsx
"use client";

import React from "react";

export default function AboutSection() {
    const pillars = [
        {
            title: "Emotional Matrix Tracking",
            desc: "Go beyond numbers. Log variables like FOMO, Revenge Trading, and Greed alongside your technical charts to map exact psychological pitfalls.",
            tag: "Neuro-Data"
        },
        {
            title: "Institutional Alignment",
            desc: "Audit whether you are trading inside retail traps or executing alongside actual institutional accumulation and liquidity sweeps.",
            tag: "Execution Edge"
        },
        {
            title: "Rule-Based Compounding",
            desc: "Our engine dissects your operational patterns to mathematically prove which discipline rules generate your highest compounding edge.",
            tag: "Analytics"
        }
    ];

    return (
        <section className="w-full bg-[#090b11] text-white py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glow matching landing page */}
            <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="max-w-2xl space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">Inside the Architecture</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                        Built to neutralize human bias. <br />
                        <span className="text-slate-500">Engineered for absolute execution.</span>
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Tradox isn't a passive diary. It's a high-performance auditing infrastructure built for proprietary and independent traders who treat risk as mathematics and execution as a science.
                    </p>
                </div>

                {/* 3-Column Features / About Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-8 bg-slate-950/40 border border-white/5 rounded-2xl relative group hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/25">
                                    {item.tag}
                                </span>
                                <span className="text-xs font-mono text-slate-600">0{idx + 1}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}