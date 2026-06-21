"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Bold, Italic, List } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

export default function TradeForm() {
    const [mounted, setMounted] = useState(false);
    const [marketType, setMarketType] = useState('Crypto/Equities');
    const [session, setSession] = useState('NY Open');
    const [selectedTags, setSelectedTags] = useState<string[]>(['FOMO', 'GREED']);

    // Prevents Hydration error
    useEffect(() => {
        setMounted(true);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: (acceptedFiles) => console.log(acceptedFiles)
    });

    if (!mounted) {
        return <div className="max-w-5xl mx-auto text-center py-12 text-app-muted font-mono text-xs">Loading Form Architecture...</div>;
    }

    const availableTags = ['FOMO', 'GREED', 'FEAR', 'PATIENCE', 'SETUP', 'LIQUIDITY SWEEP', 'ORDER BLOCK'];

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    // Universal Class mapping for inputs
    const inputClasses = "w-full bg-app-bg border border-app-border rounded-lg px-3 py-2.5 text-[13px] font-medium text-app-text placeholder-app-muted focus:outline-none focus:border-app-text transition-colors duration-300";

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-12 font-sans transition-colors duration-300">

            {/* 1. UPLOAD AREA */}
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isDragActive
                    ? 'border-app-text bg-app-bg'
                    : 'border-app-border bg-app-card hover:border-app-text'
                    }`}
            >
                <input {...getInputProps()} />
                <p className="text-[10px] font-bold tracking-[0.2em] text-app-muted uppercase mb-3">Upload Area</p>
                <Plus size={24} className="text-app-muted mb-3" />
                <p className="text-[11px] text-app-muted uppercase tracking-widest font-medium text-center">Drag & Drop Chart Screenshots (Before & After)</p>
            </div>

            {/* MAIN CONTAINER */}
            <div className="border border-app-border bg-app-card rounded-2xl p-7 space-y-8 transition-colors duration-300">

                {/* 2. TRADE DETAILS */}
                <div className="space-y-5">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-app-muted uppercase border-b border-app-border pb-2">Trade Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div>
                            <label className="text-[10px] text-app-muted uppercase font-semibold tracking-widest block mb-2">Trade Date</label>
                            <input type="date" className={inputClasses} />
                        </div>
                        <div>
                            <label className="text-[10px] text-app-muted uppercase font-semibold tracking-widest block mb-2">Market Type</label>
                            <select value={marketType} onChange={(e) => setMarketType(e.target.value)} className={inputClasses}>
                                <option>Crypto/Equities</option>
                                <option>Forex</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[10px] text-app-muted uppercase font-semibold tracking-widest block mb-2">Instrument</label>
                            <input type="text" placeholder="BTCUSD, INFY" className={inputClasses} />
                        </div>
                        <div>
                            <label className="text-[10px] text-app-muted uppercase font-semibold tracking-widest block mb-2">Session</label>
                            <select value={session} onChange={(e) => setSession(e.target.value)} className={inputClasses}>
                                <option>NY Open</option>
                                <option>London Open</option>
                                <option>Asia</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-[10px] text-app-muted uppercase font-semibold tracking-widest block mb-2">Net PNL</label>
                            <input type="text" placeholder="$ 0.00" className={inputClasses} />
                        </div>
                        <div>
                            <label className="text-[10px] text-app-muted uppercase font-semibold tracking-widest block mb-2">QTY / Position Size</label>
                            <input type="text" placeholder="1.0" className={inputClasses} />
                        </div>
                    </div>
                </div>

                {/* 3. ENTRY & EXIT */}
                <div className="space-y-4">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-app-muted uppercase border-b border-app-border pb-2">Entry & Exit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Entry price" className={inputClasses} />
                        <input type="text" placeholder="Exit price" className={inputClasses} />
                    </div>
                </div>

                {/* 4. TRADE TAGS */}
                <div className="space-y-4">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-app-muted uppercase border-b border-app-border pb-2">Trade Tags</h2>
                    <div className="flex flex-wrap gap-2.5">
                        {availableTags.map((tag) => {
                            const isSelected = selectedTags.includes(tag);
                            const isBadTag = tag === 'FOMO' || tag === 'GREED';

                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => toggleTag(tag)}
                                    className={`text-[10px] font-semibold tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-300 ${isSelected
                                        ? isBadTag
                                            ? 'bg-app-danger/10 border-app-danger text-app-danger'
                                            : 'bg-app-text border-app-text text-app-bg'
                                        : 'bg-transparent border-app-border text-app-muted hover:border-app-text hover:text-app-text'
                                        }`}
                                >
                                    {tag} {isSelected && <span className="ml-1 opacity-70">✕</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 5. REFLECTION */}
                <div className="space-y-3">
                    <div className="border border-app-border bg-app-bg rounded-xl overflow-hidden focus-within:border-app-text transition-colors duration-300">
                        <div className="flex items-center justify-between border-b border-app-border px-4 py-2.5 bg-app-card">
                            <div className="flex items-center gap-4 text-app-muted">
                                <Bold size={13} />
                                <Italic size={13} />
                                <List size={13} />
                            </div>
                            <span className="text-[9px] font-bold tracking-[0.2em] text-app-muted uppercase">Reflection</span>
                        </div>
                        <textarea
                            rows={4}
                            placeholder="ENTER TRADE NOTES, MISTAKES, AND LESSONS LEARNED..."
                            className="w-full bg-app-bg p-4 text-[13px] font-medium text-app-text placeholder-app-muted focus:outline-none resize-none"
                        />
                    </div>
                </div>

                {/* 6. ACTION BUTTONS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <button type="button" className="md:col-span-1 border border-app-border text-app-text rounded-lg py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-app-bg transition-all duration-300 active:scale-[0.98]">
                        Draft / Save
                    </button>
                    <button type="button" className="md:col-span-2 bg-app-text text-app-bg rounded-lg py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase hover:opacity-90 transition-all duration-300 shadow-sm active:scale-[0.98]">
                        Submit Trade Journal Entry
                    </button>
                </div>

            </div>
        </div>
    );
}