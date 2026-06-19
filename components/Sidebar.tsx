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
        <aside className="w-full bg-[#0a0a0a] h-screen flex flex-col justify-between p-6 text-gray-400">
            <div>
                {/* Top Logo Container */}
                <div className="h-12 w-12 bg-[#1c1c1e] rounded-xl mb-10 flex items-center justify-center border border-[#26262a]">
                    <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1.5">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm tracking-wide transition-all duration-200 ${isActive
                                        ? 'bg-[#1c1c1e] text-white border border-[#26262a] font-medium shadow-sm'
                                        : 'hover:bg-[#121214] hover:text-gray-200 border border-transparent'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? 'text-white' : 'text-gray-500'} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="pt-4 text-[10px] tracking-widest text-gray-700 uppercase font-mono">
                System Active
            </div>
        </aside>
    );
}