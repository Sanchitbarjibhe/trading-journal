"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface FloatingActionButtonProps {
    label?: string;          // बटनचे नाव (Default: "Note Trade")
    navigateTo?: string;     // क्लिक केल्यावर कुठे जायचे (Default: "/note-trade")
    icon?: React.ReactNode;  // जर वेगळा SVG आयकॉन वापरायचा असेल तर
}

export default function FloatingActionButton({
    label = "Note Trade",
    navigateTo = "/note-trade",
    icon,
}: FloatingActionButtonProps) {
    const router = useRouter();

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                type="button"
                onClick={() => router.push(navigateTo)}
                className="group relative flex items-center justify-center gap-0 hover:gap-3 h-12 px-4 hover:px-5 bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white text-white dark:text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl shadow-2xl shadow-indigo-500/10 dark:shadow-white/5 border border-white/10 dark:border-slate-200 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden select-none cursor-pointer"
            >
                {/* Ambient Glowing Background Aura on Hover */}
                <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300" />

                {/* Icon Component */}
                <div className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12 text-indigo-400 dark:text-indigo-600 shrink-0 flex items-center justify-center">
                    {icon ? (
                        icon
                    ) : (
                        /* Luxury Custom Pen Vector (Default Icon) */
                        <svg
                            className="w-full h-full"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                        </svg>
                    )}
                </div>

                {/* Animated Text */}
                <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap">
                    {label}
                </span>
            </button>
        </div>
    );
}