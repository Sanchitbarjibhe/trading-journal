// components/Sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Configuration array for clean, scannable, and maintainable navigation
const NAV_ITEMS = [
    {
        category: "Core Journaling",
        items: [
            { name: "Dashboard Grid", href: "/dashboard", icon: "📊" },
            { name: "Trade Cards", href: "/dashboard/trades", icon: "🃏" },
            { name: "Calendar Matrix", href: "/dashboard/calendar", icon: "📅" },
        ],
    },
    {
        category: "Social Ecosystem (Premium)",
        items: [
            { name: "Accuracy Matrix", href: "/social/accuracy", icon: "⚡" },
            { name: "Traders Community", href: "/social/community", icon: "🤝" },
            { name: "Mentor Connect", href: "/social/mentors", icon: "👑" },
        ],
    },
    {
        category: "Cognitive AI Engine",
        items: [
            { name: "Edge Diagnostics", href: "/ai/diagnostics", icon: "🤖" },
            { name: "Behavioral Audit", href: "/ai/behavior", icon: "🧠" },
        ],
    },
    {
        category: "Management",
        items: [
            { name: "Settings & API", href: "/settings", icon: "⚙️" },
        ],
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-[#090b11] border-r border-app-border/10 flex flex-col justify-between p-6 select-none fixed left-0 top-0">

            {/* Upper Container: Logo & Navigation Links */}
            <div className="space-y-8 overflow-y-auto pr-1 scrollbar-none">

                {/* Tradox Header Brand Logo */}
                <div className="flex items-center gap-3 pl-2">
                    <div className="w-8 h-8 bg-white text-[#090b11] flex items-center justify-center rounded-lg font-black text-lg tracking-tighter">
                        T
                    </div>
                    <span className="text-lg font-bold tracking-widest uppercase bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Tradox
                    </span>
                </div>

                {/* Dynamic Mapping of Navigation Categories */}
                <nav className="space-y-6">
                    {NAV_ITEMS.map((cat, idx) => (
                        <div key={idx} className="space-y-2">
                            <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold pl-2">
                                {cat.category}
                            </span>

                            <ul className="space-y-1">
                                {cat.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium tracking-wide transition duration-200 group relative ${isActive
                                                    ? "bg-white/5 text-white font-semibold border-l-2 border-indigo-500 pl-2.5"
                                                    : "text-slate-400 hover:text-white hover:bg-white/2"
                                                    }`}
                                            >
                                                <span className={`text-sm transition duration-200 ${!isActive && "opacity-70 group-hover:opacity-100"}`}>
                                                    {item.icon}
                                                </span>
                                                {item.name}

                                                {/* Subtle indicators for premium upcoming modules */}
                                                {cat.category.includes("Premium") && (
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded-md font-bold scale-90 opacity-80">
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

            {/* Footer Container: User Profile Context */}
            <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 pl-1">
                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs shadow-md">
                        SB
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white tracking-wide truncate max-w-30">
                            Sanchit B.
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                            Free Tier
                        </span>
                    </div>
                </div>

                {/* Simple Interactive Logout Icon Trigger */}
                <button
                    title="Sign Out"
                    className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-rose-400 transition"
                >
                    ❌
                </button>
            </div>

        </aside>
    );
}