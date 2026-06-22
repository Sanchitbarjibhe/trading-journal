// components/Sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Pure Configuration array with beautiful clean paths (No emojis, highly corporate)
const NAV_ITEMS = [
    {
        category: "Core Journaling",
        items: [
            { name: "Dashboard Grid", href: "/dashboard" },
            { name: "Trade Cards", href: "/dashboard/trades" },
            { name: "Calendar Matrix", href: "/dashboard/calendar" },
        ],
    },
    {
        category: "Social Ecosystem (Premium)",
        items: [
            { name: "Accuracy Matrix", href: "/social/accuracy" },
            { name: "Traders Community", href: "/social/community" },
            { name: "Mentor Connect", href: "/social/mentors" },
        ],
    },
    {
        category: "Cognitive AI Engine",
        items: [
            { name: "Edge Diagnostics", href: "/ai/diagnostics" },
            { name: "Behavioral Audit", href: "/ai/behavior" },
        ],
    },
    {
        category: "Management",
        items: [
            { name: "Settings & API", href: "/settings" },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-[#090b11] dark:bg-[#090b11] light:bg-slate-50 border-r border-slate-200/10 dark:border-white/5 light:border-slate-200 flex flex-col justify-between p-6 select-none fixed left-0 top-0">

            {/* Upper Container: Logo & Navigation Links */}
            {/* Fixed: Added 'scrollbar-none' to completely eliminate any unwanted layout scrollers */}
            <div className="space-y-8 overflow-y-auto pr-1 scrollbar-none">

                {/* Tradox Header Brand Logo with hybrid light/dark adapting background */}
                <div className="flex items-center gap-3 pl-2">
                    <div className="w-8 h-8 bg-white dark:bg-white light:bg-slate-900 text-[#090b11] dark:text-[#090b11] light:text-white flex items-center justify-center rounded-lg font-black text-lg tracking-tighter">
                        T
                    </div>
                    <span className="text-lg font-bold tracking-widest text-white dark:text-white light:text-slate-900 uppercase">
                        Tradox
                    </span>
                </div>

                {/* Dynamic Navigation Architecture supporting hybrid theme tokens */}
                <nav className="space-y-6">
                    {NAV_ITEMS.map((cat, idx) => (
                        <div key={idx} className="space-y-2">
                            <span className="block text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 light:text-slate-400 font-bold pl-2">
                                {cat.category}
                            </span>

                            <ul className="space-y-1">
                                {cat.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium tracking-wide transition duration-200 group relative ${isActive
                                                        ? "bg-white/5 dark:bg-white/5 light:bg-slate-900/5 text-white dark:text-white light:text-slate-900 font-semibold border-l-2 border-indigo-500 pl-2.5"
                                                        : "text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/[0.02] light:hover:bg-slate-900/[0.02]"
                                                    }`}
                                            >
                                                <span>{item.name}</span>

                                                {/* Premium PRO tags wrapped in explicit semantic containers */}
                                                {item.category.includes("Premium") && (
                                                    <span className="text-[9px] bg-indigo-500/10 text-indigo-400 dark:bg-indigo-500/10 dark:text-indigo-400 light:bg-indigo-500/20 light:text-indigo-600 px-1.5 py-0.5 rounded-md font-bold scale-90 opacity-80">
                                                        PRO
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Footer Container: User Profile Context with hybrid adaptive states */}
            <div className="border-t border-slate-200/5 dark:border-white/5 light:border-slate-200 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 pl-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs shadow-md">
                        SB
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900 tracking-wide truncate max-w-[120px]">
                            Sanchit B.
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-500 light:text-slate-400 font-mono">
                            Free Tier
                        </span>
                    </div>
                </div>

                {/* Minimalist Corporate Logout Button */}
                <button
                    type="button"
                    title="Sign Out"
                    className="text-[11px] font-semibold text-slate-500 dark:text-slate-500 light:text-slate-400 hover:text-rose-400 dark:hover:text-rose-400 light:hover:text-rose-600 px-2 py-1 rounded-md hover:bg-white/5 light:hover:bg-slate-900/5 transition"
                >
                    Exit
                </button>
            </div>

        </aside>
    );
}