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
        <aside className="w-full bg-app-card border border-app-border rounded-lg px-3 py-2.5 text-[13px] font-medium text-app-text transition-colors duration-300">
            <div>
                {/* Top Minimal Logo Container */}
                <div className="h-9 w-9 bg-app-text rounded-lg mb-10 flex items-center justify-center border border-app-border">
                    <div className="w-3 h-3 bg-app-bg rounded-sm"></div>
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
                                    ? 'bg-app-text text-app-bg font-normal shadow-sm'
                                    : 'hover:bg-app-bg hover:text-app-text border border-transparent'
                                    }`}
                            >
                                <Icon size={16} className={isActive ? 'text-app-bg' : 'text-app-muted'} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="pt-4 text-[9px] tracking-[0.2em] text-app-muted font-mono uppercase opacity-60">
                System Active
            </div>
        </aside>
    );
}