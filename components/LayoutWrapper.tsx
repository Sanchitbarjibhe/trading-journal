// components/LayoutWrapper.tsx
"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Sidebar from "@/components/Sidebar";
import FloatingActionButton from "./ui/FloatingActionButton";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="min-h-screen bg-[#090b11]" />;
    }

    const isAuthRoute =
        pathname === "/" ||
        pathname === "/login" ||
        pathname === "/signup" ||
        pathname?.startsWith("/auth");
    1
    // Shell 1: Plain viewport for Auth/Landing Pages
    if (isAuthRoute) {
        return <div className="min-h-screen w-full bg-[#090b11]">{children}</div>;
    }

    // Shell 2: Universal Premium Layout Frame
    return (
        <div className="flex min-h-screen bg-white dark:bg-[#090b11] text-slate-900 dark:text-white relative font-sans">

            {/* 1. Fixed Universal Navigation Sidebar */}
            <Sidebar />

            {/* 2. Main Execution Viewport */}
            <main className="flex-1 pl-64 min-h-screen overflow-x-hidden relative">

                {/* --- 🌗 TOP RIGHT LUXURY THEME TOGGLE CONTROLLER --- */}
                <div className="absolute top-6 right-8 z-50">
                    <button
                        type="button"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/3 hover:bg-slate-200 dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/5 rounded-full shadow-sm backdrop-blur-md transition-all duration-300 group select-none text-[11px] font-mono font-bold tracking-wider"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition">
                            THEME: {theme === "dark" ? "DARK" : "LIGHT"}
                        </span>
                    </button>
                </div>

                {/* Dynamic Content Frame Injector */}
                <div className="p-8 pt-20 max-w-[1600px] mx-auto w-full pb-28">
                    {children}
                </div>
            </main>

            {/* --- 🚀 CLASSY CUSTOM FLOATING ACTION BUTTON (FAB) --- */}
            <FloatingActionButton />

        </div>
    );
}