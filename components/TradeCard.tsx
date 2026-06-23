// components/TradeCard.tsx
"use client";

import React from "react";

// Directly matching your exact Trade interface from store
export interface Trade {
    id: string;
    asset: string;
    type: "LONG" | "SHORT";
    entryPrice: number;
    exitPrice: number;
    pnl: number;
    status: "WIN" | "LOSS";
    timestamp: string;
}

interface TradeCardProps {
    trade: Trade & { description?: string; riskReward?: string }; // locally extended description for clean design look
    onDelete?: (id: string) => void;
}

export function TradeCard({ trade, onDelete }: TradeCardProps) {
    const isWin = trade.status === "WIN";

    return (
        <div className="group relative w-full bg-slate-50 dark:bg-white/2 hover:bg-slate-100 dark:hover:bg-white/4 border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:translate-x-1 select-none">

            {/* 1. LEFT: Asset & Direction Badge */}
            <div className="flex items-center gap-4 min-w-45">
                <div className={`w-2 h-12 rounded-full ${trade.type === "LONG" ? "bg-emerald-500 shadow-lg shadow-emerald-500/20" : "bg-rose-500 shadow-lg shadow-rose-500/20"}`} />
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm font-black tracking-tight uppercase text-slate-900 dark:text-white">{trade.asset}</h3>
                        <span className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${trade.type === "LONG" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                            {trade.type}
                        </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono mt-1">{trade.timestamp}</p>
                </div>
            </div>

            {/* 2. MIDDLE: Psychology Description */}
            <div className="flex-1 max-w-xl">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">Execution Logic / Psychology Notes</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium line-clamp-2 italic">
                    {trade.description || "No execution notes provided for this dynamic performance block."}
                </p>
            </div>

            {/* 3. RIGHT: Parameters Matrix */}
            <div className="grid grid-cols-3 gap-4 text-center min-w-55 border-l border-r border-slate-200 dark:border-white/5 px-4">
                <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Entry</span>
                    <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-200">${trade.entryPrice}</span>
                </div>
                <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Exit</span>
                    <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-200">${trade.exitPrice}</span>
                </div>
                <div>
                    <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-wider block font-bold">R:R Ratio</span>
                    <span className="text-xs font-black font-mono text-indigo-500 dark:text-indigo-400">{trade.riskReward || "1:2.0"}</span>
                </div>
            </div>

            {/* 4. EXTREME RIGHT: PnL & Status badge */}
            <div className="flex items-center justify-between md:justify-end gap-6 min-w-37.5">
                <div className="text-right">
                    <span className={`text-[9px] font-mono uppercase tracking-wider block ${isWin ? "text-emerald-400" : "text-rose-400"}`}>
                        {trade.status}
                    </span>
                    <span className={`text-sm font-black font-mono ${isWin ? "text-emerald-500" : "text-rose-500"}`}>
                        {isWin ? "+" : ""}${trade.pnl}
                    </span>
                </div>

                {/* Delete button triggering your exact deleteTradeSuccess */}
                <button
                    type="button"
                    onClick={() => onDelete && onDelete(trade.id)}
                    className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/5 rounded-xl transition"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

        </div>
    );
}