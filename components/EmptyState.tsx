// components/EmptyState.tsx
"use client";

import React from "react";

interface EmptyStateProps {
    onAddTrade?: () => void;
}

export function EmptyState({ onAddTrade }: EmptyStateProps) {
    return (
        <div className="w-full h-112.5 bg-[#0c0e17] border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 text-center select-none">

            {/* Container simulating a clean IconScout Business Analysis Graphic */}
            <div className="w-40 h-40 bg-white/1 border border-dashed border-white/10 rounded-full flex items-center justify-center mb-6 relative group hover:border-indigo-500/30 transition duration-300">

                {/* Abstract Minimal Graphic representing empty analytical graphs */}
                <div className="w-20 h-16 border border-white/10 rounded p-1.5 flex items-end gap-1 group-hover:scale-105 transition duration-300">
                    <div className="w-full h-[30%] bg-slate-700/40 rounded-t-sm" />
                    <div className="w-full h-[55%] bg-slate-700/40 rounded-t-sm" />
                    <div className="w-full h-[20%] bg-slate-700/40 rounded-t-sm animate-pulse" />
                    <div className="w-full h-[75%] bg-indigo-500/20 rounded-t-sm border-t border-indigo-500/40" />
                </div>

                {/* Ambient absolute badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center text-[8px] font-bold text-amber-400">
                    !
                </div>
            </div>

            {/* Contextual Copywriting */}
            <div className="space-y-2 max-w-sm mb-6">
                <h3 className="text-lg font-bold text-white tracking-tight">
                    No Trade Logs Detected
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                    Your trading engine is currently idle. Start auditing your risk metrics and execution parameters by importing or creating your very first trade card.
                </p>
            </div>

            {/* Trigger Button to Open Log Form Modal */}
            <button
                type="button"
                onClick={onAddTrade}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-xl shadow-lg shadow-indigo-600/10 active:scale-[0.98] transition duration-200"
            >
                + Log New Execution Card
            </button>

        </div>
    );
}