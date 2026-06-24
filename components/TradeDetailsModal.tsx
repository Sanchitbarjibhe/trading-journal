// components/TradeDetailsModal.tsx
"use client";

import React, { useEffect } from "react";
import { Trade } from "./TradeCard";

interface TradeDetailsModalProps {
    trade: Trade | null;
    isOpen: boolean;
    onClose: () => void;
}

export function TradeDetailsModal({ trade, isOpen, onClose }: TradeDetailsModalProps) {
    // पॉपअप ओपन असताना बॅकग्राउंड स्क्रोल लॉक करण्यासाठी
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    if (!isOpen || !trade) return null;

    const isWin = trade.status === "WIN";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">

            {/* ─── MODAL CONTAINER ─── */}
            <div className="relative w-full max-w-5xl h-[90vh] md:h-auto max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col text-slate-800 dark:text-slate-100">

                {/* ─── HEADER SECTION ─── */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur z-10">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-black font-mono tracking-tight text-slate-900 dark:text-white uppercase">
                            {trade.asset}
                        </h2>
                        <span className={`text-xs font-mono font-black px-3 py-1 rounded border tracking-widest ${trade.type === "LONG"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                                : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
                            }`}>
                            {trade.type}
                        </span>
                        <span className={`text-xs font-mono font-black px-3 py-1 rounded border tracking-widest ${isWin ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
                            }`}>
                            {trade.status}
                        </span>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* ─── BODY CONTENT (TWO COLUMN GRID) ─── */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto">

                    {/* 📈 LEFT SIDE: CHART CHRONICLES (7 Columns) */}
                    <div className="lg:col-span-7 flex flex-col gap-4">

                        {/* Main TradingView Chart Container */}
                        <div className="w-full h-80 bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col justify-between p-4">
                            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />

                            <div className="flex justify-between items-center relative z-10">
                                <span className="text-xs font-mono text-slate-400">Main Execution Chart (1H)</span>
                                <span className="text-[10px] font-mono text-slate-500">{trade.timestamp}</span>
                            </div>

                            {/* Mock Candle Placeholder - इथे तुझा रिअल अपलोडेड इमेजचा <img> टॅग येईल */}
                            <div className="w-full h-48 flex items-center justify-center opacity-30 pointer-events-none">
                                <svg className="w-full h-full text-slate-600" viewBox="0 0 100 40">
                                    <path d="M10,20 L30,10 L50,25 L70,5 L90,15" fill="none" stroke={isWin ? "#10b981" : "#f43f5e"} strokeWidth="1.5" />
                                    <line x1="30" y1="5" x2="30" y2="30" stroke="currentColor" strokeWidth="0.5" />
                                    <rect x="27" y="10" width="6" height="12" fill="#10b981" />
                                    <line x1="70" y1="2" x2="70" y2="25" stroke="currentColor" strokeWidth="0.5" />
                                    <rect x="67" y="5" width="6" height="15" fill={isWin ? "#10b981" : "#f43f5e"} />
                                </svg>
                            </div>
                            <div className="text-center text-xs text-slate-500 font-mono relative z-10">TradingView Canvas Preview</div>
                        </div>

                        {/* Sub Charts / Multi-Timeframe Wireframe Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-36 bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-center text-xs text-slate-500 font-mono">
                                LTF Confluence (5M)
                            </div>
                            <div className="h-36 bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-center text-xs text-slate-500 font-mono">
                                HTF Trend Matrix (4H)
                            </div>
                        </div>
                    </div>

                    {/* 📊 RIGHT SIDE: METRICS & PSYCHOLOGY IN-DEPTH (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-5">

                        {/* Section A: Advanced Performance Matrix */}
                        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 rounded-xl p-4">
                            <h3 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
                                Execution Breakdown
                            </h3>
                            <div className="space-y-3 font-mono">
                                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/50 pb-1.5">
                                    <span className="text-sm text-slate-400">Entry Price</span>
                                    <span className="text-sm font-bold text-slate-900 dark:text-slate-200">${trade.entryPrice}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/50 pb-1.5">
                                    <span className="text-sm text-slate-400">Exit Price</span>
                                    <span className="text-sm font-bold text-slate-900 dark:text-slate-200">${trade.exitPrice}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/50 pb-1.5">
                                    <span className="text-sm text-indigo-500 font-bold">Risk Reward Ratio</span>
                                    <span className="text-sm font-black text-indigo-500">{trade.riskReward || "1:2.0"}</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-sm text-slate-400">Net PnL Realized</span>
                                    <span className={`text-sm font-black ${isWin ? "text-emerald-500" : "text-rose-500"}`}>
                                        {isWin ? "+" : ""}${trade.pnl}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Section B: Psychology Logs */}
                        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 rounded-xl p-4 flex-1">
                            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
                                <h3 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">
                                    Psychological Footprint
                                </h3>
                                {trade.emotion && (
                                    <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 rounded-full uppercase">
                                        🧠 {trade.emotion}
                                    </span>
                                )}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 p-3 rounded-lg h-32 overflow-y-auto">
                                {trade.description || "No anomalous emotional or execution constraints were logged during this market sequence."}
                            </div>
                        </div>

                        {/* Section C: Meta Metadata */}
                        <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 dark:text-slate-500 px-1">
                            <span>SYSTEM ID: {trade.id}</span>
                            <span>LOGGED VIA: WEB_APP</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}