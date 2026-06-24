// components/TradeCard.tsx
"use client";

import React from "react";

export interface Trade {
    id: string;
    asset: string;
    type: string;        // "LONG" | "SHORT"
    entryPrice: number;
    exitPrice: number;
    pnl: number;
    status: string;      // "WIN" | "LOSS"
    timestamp: string;
    description?: string;
    riskReward?: string;
    emotion?: string;    // "FOMO" | "GREED" | "CALM"
}

interface TradeCardProps {
    trade: Trade;
    onDelete?: (id: string) => void;
}

export function TradeCard({ trade, onDelete }: TradeCardProps) {
    if (!trade) return null;

    const isWin = trade.status === "WIN";

    const getEmotionColors = (emotion?: string) => {
        switch (emotion) {
            case "FOMO":
            case "GREED":
                return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
            case "FEAR":
                return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
            case "CALM":
            case "DISCIPLINED":
                return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
            default:
                return "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700";
        }
    };

    return (
        /* 🧠 बदल: इथेbg-white dark:bg-slate-900 आणि border-slate-200 dark:border-slate-800 वापरून दोन्ही थीम्स सेट केल्या आहेत */
        <div className="group w-full max-w-[320px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-md dark:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 dark:hover:border-slate-700 flex flex-col h-[380px] select-none text-slate-800 dark:text-slate-100">

            {/* ─── BLOCK 1: UPPER TRADINGVIEW CHART PREVIEW ─── */}
            {/* लाईट मोडमध्ये फिकट राखाडी (#f8f9fa) आणि डार्क मोडमध्ये ट्रेडिंगव्ह्यू ब्लॅक (#0c0d14) */}
            <div className="w-full h-36 bg-slate-50 dark:bg-[#0c0d14] border-b border-slate-200 dark:border-slate-800/80 p-3 relative flex flex-col justify-between overflow-hidden shrink-0">

                {/* डाव्या बाजूची नियन बॉर्डर पट्टी */}
                <div className={`absolute top-0 left-0 w-1 h-full ${isWin ? "bg-emerald-500 shadow-[0_0_10px_#10b981]" : "bg-rose-500 shadow-[0_0_10px_#f43f5e]"}`} />

                {/* रिस्पॉन्सिव्ह ग्रीड लाईन्स */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:12px_16px]" />

                {/* कॅन्डलस्टिक मिनी ग्राफिक्स */}
                <div className="absolute inset-x-6 top-6 bottom-4 flex items-center justify-center opacity-25 dark:opacity-20 pointer-events-none">
                    <svg className="w-full h-full text-slate-400 dark:text-slate-500" viewBox="0 0 100 40">
                        <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="18" y="12" width="4" height="15" fill={isWin ? "#10b981" : "#f43f5e"} />
                        <line x1="50" y1="10" x2="50" y2="38" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="48" y="15" width="4" height="18" fill={isWin ? "#10b981" : "#f43f5e"} />
                        <line x1="80" y1="2" x2="80" y2="25" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="78" y="5" width="4" height="12" fill="#10b981" />
                    </svg>
                </div>

                {/* टाइमस्टॅम्प आणि स्टेटस टॅग */}
                <div className="flex items-center justify-between w-full relative z-10">
                    <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono tracking-wider">{trade.timestamp}</span>
                    <span className={`text-[9px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-widest ${isWin ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                        }`}>
                        {trade.status}
                    </span>
                </div>
            </div>

            {/* ─── BLOCK 2: DETAILS AREA ─── */}
            <div className="p-4 flex flex-col justify-between flex-1 bg-slate-50/30 dark:bg-slate-900/40">

                {/* १. INSTRUMENT & TYPE LINE */}
                <div className="flex items-center justify-between w-full border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white font-mono uppercase truncate max-w-[160px]">
                        {trade.asset}
                    </h2>
                    <span className={`text-[9px] font-mono font-black px-2.5 py-0.5 rounded border tracking-widest ${trade.type === "LONG"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
                        }`}>
                        {trade.type}
                    </span>
                </div>

                {/* २. NUMBERS MATRIX */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 my-2.5">
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/40 pb-1">
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Entry</span>
                        <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">${trade.entryPrice}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/40 pb-1">
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Exit</span>
                        <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">${trade.exitPrice}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/40 pb-1">
                        <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-bold">R:R Ratio</span>
                        <span className="text-xs font-black font-mono text-indigo-600 dark:text-indigo-400">{trade.riskReward || "1:2.0"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/40 pb-1">
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Net PnL</span>
                        <span className={`text-xs font-black font-mono ${isWin ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                            {isWin ? "+" : ""}${trade.pnl}
                        </span>
                    </div>
                </div>

                {/* ३. PSYCHOLOGY LOGS */}
                <div className="flex-1 flex flex-col gap-1 overflow-hidden my-1">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Psychology</span>
                        {trade.emotion && (
                            <span className={`text-[8px] font-mono font-black px-1.5 py-0.5 border rounded-full uppercase tracking-wider ${getEmotionColors(trade.emotion)}`}>
                                🧠 {trade.emotion}
                            </span>
                        )}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed italic line-clamp-2 mt-0.5">
                        {trade.description || "No anomalous execution markers logged."}
                    </p>
                </div>

                {/* ४. FOOTER ACTIONS */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 mt-auto">
                    <span className="text-[8px] font-mono text-slate-400 dark:text-slate-600">ID: {trade.id.slice(-6)}</span>
                    <button
                        type="button"
                        onClick={() => onDelete && onDelete(trade.id)}
                        className="p-1 text-slate-400 dark:text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 rounded-md transition-all duration-200"
                        aria-label="Purge Record"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    );
}