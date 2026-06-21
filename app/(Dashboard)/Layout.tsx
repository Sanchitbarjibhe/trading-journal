"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import { Menu } from 'lucide-react';
import { useTheme } from "next-themes";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Next-themes साठी क्लायंटवर माउंट होण्याची वाट पाहणे आवश्यक आहे (Hydration फिक्स)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />;

    return (
        <div className="flex bg-white dark:bg-[#0a0a0a] min-h-screen text-gray-900 dark:text-white w-full overflow-x-hidden transition-colors duration-500 ease-in-out">

            {/* डाव्या बाजूचा Sidebar (Smooth Animation) */}
            <div className={`fixed h-full z-20 top-0 bottom-0 left-0 w-64 bg-gray-50 dark:bg-[#0a0a0a] border-r border-gray-100 dark:border-transparent transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <Sidebar />
            </div>

            {/* उजव्या बाजूचा मुख्य एरिया */}
            <main className={`flex-1 min-h-screen transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isSidebarOpen ? 'pl-64' : 'pl-0'
                }`}>
                {/* कार्ड कंटेनर - लाईट मोडमध्ये पांढरा आणि डार्क मोडमध्ये डार्क राहील */}
                <div className="p-8 max-w-350 mx-auto min-h-screen bg-white dark:bg-[#0d0d0f] border-l border-gray-100 dark:border-[#1a1a1c] transition-colors duration-500 ease-in-out">

                    {/* TOP BAR */}
                    <div className="flex justify-between items-center mb-8">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 bg-gray-50 hover:bg-gray-100 dark:bg-[#161618] border border-gray-200 dark:border-[#26262a] rounded-lg dark:hover:bg-[#26262a] transition-all duration-300"
                            title={isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
                        >
                            <Menu size={16} className="text-gray-500 dark:text-gray-400" />
                        </button>
                        {/* UI THEME SWITCHER BUTTON (MODIFIED) */}
                        <div className="flex items-center gap-3 text-[11px] text-gray-400 font-mono tracking-widest select-none">
                            <span>UI MODE</span>
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className={`w-14 h-7 rounded-full p-1 cursor-pointer border relative flex items-center justify-between transition-all duration-500 ease-in-out ${theme === "dark"
                                    ? "bg-[#161618] border-[#26262a]"
                                    : "bg-gray-100 border-gray-300 shadow-inner"
                                    }`}
                            >
                                {/* डावीकडील सूर्य (Light Mode Indicator) */}
                                <span className={`z-10 pl-1 transition-opacity duration-300 ${theme === "light" ? "opacity-100 text-amber-500" : "opacity-30 text-gray-500"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                                </span>

                                {/* उजवीकडील चंद्र (Dark Mode Indicator) */}
                                <span className={`z-10 pr-1 transition-opacity duration-300 ${theme === "dark" ? "opacity-100 text-indigo-400" : "opacity-30 text-gray-400"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                                </span>

                                {/* सरकणारा मुख्य गोल टोगल (Smooth Spring Slider) */}
                                <div
                                    className={`absolute w-5 h-5 rounded-full shadow-md transition-all duration-500 transform ease-out ${theme === "dark"
                                        ? "bg-white translate-x-7"
                                        : "bg-white translate-x-0"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* मुख्य फॉर्म किंवा पेजेस */}
                    {children}
                </div>
            </main>

        </div>
    );
}