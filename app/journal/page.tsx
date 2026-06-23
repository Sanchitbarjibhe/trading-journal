// app/dashboard/journal/page.tsx
"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TradeCard } from "@/components/TradeCard";
import { deleteTradeSuccess, setTradeFilter } from "@/store/tradesSlice";

export default function JournalPage() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    // Select state from your exact store setup
    const trades = useSelector((state: any) => state.trades.tradesList);
    const currentFilter = useSelector((state: any) => state.trades.filterType);

    // --- 📈 DYNAMIC INSTANT ANALYTICS ---
    const totalTrades = trades.length;
    const winTrades = trades.filter((t: any) => t.status === "WIN").length;
    const winRate = totalTrades > 0 ? Math.round((winTrades / totalTrades) * 100) : 0;
    const netPnL = trades.reduce((acc: number, t: any) => acc + t.pnl, 0);

    // --- 🔍 ADVANCED HYBRID FILTERING & LIVE SEARCH MECHANICS ---
    const filteredTrades = trades.filter((trade: any) => {
        // 1. Filter by State Tab Category
        const matchesFilter =
            currentFilter === "ALL" ||
            (currentFilter === "WIN" && trade.status === "WIN") ||
            (currentFilter === "LOSS" && trade.status === "LOSS");

        // 2. Filter by Live Search Input Match (Asset, Type, or Description)
        const matchesSearch =
            trade.asset.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trade.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (trade.description && trade.description.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="space-y-10 animate-in fade-in duration-500 max-w-375 mx-auto select-none">

            {/* 1. UPPER META TERMINAL HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200 dark:border-white/5 pb-6">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-md shadow-indigo-500/50" />
                        <span className="text-[10px] font-mono font-black tracking-widest uppercase text-indigo-500 dark:text-indigo-400">Institutional Ledger Platform</span>
                    </div>
                    <h1 className="text-3xl font-black tracking-tight bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-500 bg-clip-text text-transparent mt-1">
                        Trading Journal
                    </h1>
                    <p className="text-xs text-slate-400 dark:text-slate-400 mt-1 font-medium">
                        Audit historical psychological anomalies and mathematical expectancy modules.
                    </p>
                </div>

                {/* --- DYNAMIC FILTER CONTROLLERS --- */}
                <div className="flex items-center bg-slate-100 dark:bg-white/2 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-inner">
                    {(["ALL", "WIN", "LOSS"] as const).map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => dispatch(setTradeFilter(filter))}
                            className={`px-6 py-2 rounded-xl text-[10px] font-mono font-black tracking-widest uppercase transition-all duration-300 ${currentFilter === filter
                                ? "bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-md shadow-indigo-600/10 scale-[1.02]"
                                : "text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. PREMIUM HYBRID GLASSMETRIC ANALYTICS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                {/* Card 1: Total Audited Trades */}
                <div className="bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-indigo-500/20 shadow-sm">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Total Audited Ledger Blocks</span>
                    <span className="text-3xl font-black font-mono tracking-tight text-slate-800 dark:text-white mt-1 block">
                        {totalTrades} <span className="text-xs text-slate-400 font-normal font-sans">Positions</span>
                    </span>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Card 2: Strategic Win Efficiency */}
                <div className="bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-emerald-500/20 shadow-sm">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Calculated Win Expectancy</span>
                    <span className="text-3xl font-black font-mono tracking-tight text-emerald-500 mt-1 block">
                        {winRate}% <span className="text-xs text-emerald-600/60 font-normal font-sans">Ratio</span>
                    </span>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Card 3: Net Premium Returns */}
                <div className="bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-indigo-500/20 shadow-sm">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Net Cumulative Yield</span>
                    <span className={`text-3xl font-black font-mono tracking-tight mt-1 block ${netPnL >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                        {netPnL >= 0 ? "+" : ""}${netPnL}
                    </span>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>
            </div>

            {/* 3. 🚀 NEW UPGRADE: LIVE COMMAND SEARCH BAR CONTROLLER */}
            <div className="relative w-full max-w-md select-none group">
                <input
                    type="text"
                    placeholder="SEARCH ASSET, DIRECTION OR KEYWORD..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 group-hover:border-slate-300 dark:group-hover:border-white/10 focus:border-indigo-500 dark:focus:border-indigo-500 text-[11px] font-mono font-bold tracking-widest uppercase rounded-xl transition-colors focus:outline-none placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-white"
                />
                {/* Search Vector Icon */}
                <svg className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            {/* 4. CORE TRADING LEDGER SHEET FRAME */}
            <div className="space-y-4">
                <div className="flex items-center justify-between px-4 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    <span>Execution Ledger Content</span>
                    <span>Performance Vectors</span>
                </div>

                {filteredTrades.length === 0 ? (
                    <div className="text-center py-24 border border-dashed border-slate-200 dark:border-white/5 rounded-2xl bg-slate-50/[0.5] dark:bg-white/[0.005]">
                        <svg className="w-8 h-8 text-slate-300 dark:text-white/10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">No matching execution records detected in system store.</p>
                    </div>
                ) : (
                    /* Rendered Grid Arrays */
                    <div className="flex flex-col gap-4">
                        {filteredTrades.map((trade: any) => (
                            <TradeCard
                                key={trade.id}
                                trade={trade}
                                onDelete={(id) => dispatch(deleteTradeSuccess(id))}
                            />
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}