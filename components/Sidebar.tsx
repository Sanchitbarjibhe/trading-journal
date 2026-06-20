"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BarChart3, RefreshCcw, Settings } from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Restarts', href: '/restarts', icon: RefreshCcw },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1c1c1e] rounded-lg px-3 py-2.5 text-[13px] font-medium text-gray-900 dark:text-gray-200 focus:outline-none focus:border-black dark:focus:border-[#3f3f46] transition-colors">
            <div>
                {/* Top Minimal Logo Container */}
                <div className="h-9 w-9 bg-[#1c1c1e] rounded-lg mb-10 flex items-center justify-center border border-[#26262a]">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] tracking-wide transition-all duration-150 ${isActive
                                    ? 'bg-[#161618] text-white border border-[#26262a] font-normal shadow-sm'
                                    : 'hover:bg-[#0f0f11] hover:text-gray-200 border border-transparent'
                                    }`}
                            >
                                <Icon size={16} className={isActive ? 'text-white' : 'text-gray-500'} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="pt-4 text-[9px] tracking-[0.2em] text-gray-600 font-mono uppercase opacity-60">
                System Active
            </div>
        </aside>
    );
}