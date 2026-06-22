// app/dashboard/trades/page.tsx
"use client";

import React from "react";

export default function TradesPage() {

    return (
        <div className="space-y-6">

            {/* Section Header Metrics */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/50 dark:border-white/5 pb-5">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Trade Cards Journal</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Audit and inspect your historically locked trading performance modules.
                    </p>
                </div>
            </div>



        </div>
    );
}