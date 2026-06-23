import React from 'react';

interface AuthLeftSplitProps {
    quote: string;
    author?: string;
}

export default function AuthLeftSplit({ quote, author = "TRADOX DESK" }: AuthLeftSplitProps) {
    return (
        <div className="hidden lg:flex flex-col justify-between w-[60%] bg-[#0B0F19] p-12 relative overflow-hidden border-r border-[#1E2640]">
            {/* Subtle Background Glow for Premium AllurUI Feel */}
            <div className="absolute top-[-20%] left-[-20%] w-150 h-150 bg-[#1E293B]/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Top: Tradox Logo */}
            <div className="flex items-center gap-2 z-10">
                <div className="h-6 w-6 rounded bg-white flex items-center justify-center font-bold text-[#0B0F19] text-sm">
                    T
                </div>
                <span className="text-xl font-semibold tracking-tight text-white">Tradox</span>
            </div>

            {/* Center: Branding & Trader's Psychology */}
            <div className="max-w-xl z-10 my-auto space-y-4">
                <p className="text-3xl font-medium tracking-wide text-gray-100 leading-relaxed font-sans">
                    “{quote}”
                </p>
                <p className="text-xs text-gray-500 tracking-wider uppercase">— {author}</p>
            </div>

            {/* Bottom: Trade Journal Dashboard Preview (Curiosity Trigger) */}
            <div className="z-10 bg-[#111827]/40 backdrop-blur-md p-5 rounded-xl border border-gray-800/60 shadow-2xl opacity-60">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-mono text-gray-400">Trade Journal Dashboard Preview</span>
                    </div>
                    <div className="h-1.5 w-12 bg-gray-800 rounded" />
                </div>
                {/* Simplified Mock Chart Grid */}
                <div className="h-20 w-full flex items-end gap-1.5 pt-4">
                    <div className="h-[30%] w-full bg-[#1E2640]/50 rounded-sm" />
                    <div className="h-[50%] w-full bg-[#1E2640]/50 rounded-sm" />
                    <div className="h-[45%] w-full bg-[#1E2640]/50 rounded-sm" />
                    <div className="h-[75%] w-full bg-emerald-500/20 border-t border-emerald-500 rounded-sm" />
                    <div className="h-[90%] w-full bg-emerald-500/30 border-t border-emerald-500 rounded-sm" />
                </div>
            </div>
        </div>
    );
}