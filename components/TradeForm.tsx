"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Bold, Italic, List } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

export default function TradeForm() {
    const [mounted, setMounted] = useState(false);
    const [marketType, setMarketType] = useState('Crypto/Equities');
    const [session, setSession] = useState('NY Open');
    const [selectedTags, setSelectedTags] = useState<string[]>(['FOMO', 'GREED']);

    // For Prevents Hydration error
    useEffect(() => {
        setMounted(true);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: (acceptedFiles) => console.log(acceptedFiles)
    });

    if (!mounted) {
        return <div className="max-w-5xl mx-auto text-center py-12 text-gray-500 font-mono text-xs">Loading Form Architecture...</div>;
    }

    const availableTags = ['FOMO', 'GREED', 'FEAR', 'PATIENCE', 'SETUP', 'LIQUIDITY SWEEP', 'ORDER BLOCK'];

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const inputClasses = "w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1c1c1e] rounded-lg px-3 py-2.5 text-[13px] font-medium text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-black dark:focus:border-[#3f3f46] transition-colors duration-300";

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-12 font-sans transition-colors duration-500">

            {/* 1. UPLOAD AREA */}
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isDragActive
                    ? 'border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-[#121214]'
                    : 'border-gray-200 dark:border-[#1c1c1e] bg-white dark:bg-[#0d0d0f] hover:border-gray-400 dark:hover:border-[#26262a]'
                    }`}
            >
                <input {...getInputProps()} />
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase mb-3">Upload Area</p>
                <Plus size={24} className="text-gray-400 dark:text-gray-500 mb-3" />
                <p className="text-[11px] text-gray-500 dark:text-gray-600 uppercase tracking-widest font-medium text-center">Drag & Drop Chart Screenshots (Before & After)</p>
            </div>

            {/* MAIN CONTAINER */}
            <div className="border border-gray-100 dark:border-[#1c1c1e] bg-white dark:bg-[#0d0d0f] rounded-2xl p-7 space-y-8 shadow-sm dark:shadow-none transition-colors duration-500">

                {/* 2. TRADE DETAILS */}
                <div className="space-y-5">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-gray-400 dark:text-gray-400 uppercase border-b border-gray-100 dark:border-[#1c1c1e] pb-2">Trade Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div>
                            <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-widest block mb-2">Trade Date</label>
                            <input type="date" className={inputClasses} />
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-widest block mb-2">Market Type</label>
                            <select value={marketType} onChange={(e) => setMarketType(e.target.value)} className={inputClasses}>
                                <option>Crypto/Equities</option>
                                <option>Forex</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-widest block mb-2">Instrument</label>
                            <input type="text" placeholder="BTCUSD, INFY" className={inputClasses} />
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-widest block mb-2">Session</label>
                            <select value={session} onChange={(e) => setSession(e.target.value)} className={inputClasses}>
                                <option>NY Open</option>
                                <option>London Open</option>
                                <option>Asia</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-widest block mb-2">Net PNL</label>
                            <input type="text" placeholder="$ 0.00" className={inputClasses} />
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-widest block mb-2">QTY / Position Size</label>
                            <input type="text" placeholder="1.0" className={inputClasses} />
                        </div>
                    </div>
                </div>

                {/* 3. ENTRY & EXIT */}
                <div className="space-y-4">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-gray-400 dark:text-gray-400 uppercase border-b border-gray-100 dark:border-[#1c1c1e] pb-2">Entry & Exit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Entry price" className={inputClasses} />
                        <input type="text" placeholder="Exit price" className={inputClasses} />
                    </div>
                </div>

                {/* 4. TRADE TAGS */}
                <div className="space-y-4">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-gray-400 dark:text-gray-400 uppercase border-b border-gray-100 dark:border-[#1c1c1e] pb-2">Trade Tags</h2>
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
                                            ? 'bg-red-50 border-red-200 text-red-600 dark:bg-[#2a1414] dark:border-[#e11d48] dark:text-[#f43f5e]'
                                            : 'bg-gray-900 border-gray-900 text-white dark:bg-[#26262a] dark:border-[#52525b] dark:text-white'
                                        : 'bg-transparent border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600 dark:border-[#1c1c1e] dark:text-gray-500 dark:hover:border-[#3f3f46] dark:hover:text-gray-300'
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
                    <div className="border border-gray-200 dark:border-[#1c1c1e] bg-gray-50 dark:bg-[#0a0a0a] rounded-xl overflow-hidden focus-within:border-black dark:focus-within:border-[#3f3f46] transition-colors duration-300">
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-[#1c1c1e] px-4 py-2.5 bg-white dark:bg-[#0d0d0f]">
                            <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
                                <Bold size={13} />
                                <Italic size={13} />
                                <List size={13} />
                            </div>
                            <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase">Reflection</span>
                        </div>
                        <textarea
                            rows={4}
                            placeholder="ENTER TRADE NOTES, MISTAKES, AND LESSONS LEARNED..."
                            className="w-full bg-gray-50 dark:bg-[#0a0a0a] p-4 text-[13px] font-medium text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none resize-none"
                        />
                    </div>
                </div>

                {/* 6. ACTION BUTTONS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <button type="button" className="md:col-span-1 border border-gray-300 dark:border-[#3f3f46] text-gray-600 dark:text-gray-300 rounded-lg py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-gray-50 dark:hover:bg-[#1c1c1e] transition-all duration-300 active:scale-[0.98]">
                        Draft / Save
                    </button>
                    <button type="button" className="md:col-span-2 bg-gray-900 text-white dark:bg-white dark:text-black rounded-lg py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-sm active:scale-[0.98]">
                        Submit Trade Journal Entry
                    </button>
                </div>

            </div>
        </div>
    );
}