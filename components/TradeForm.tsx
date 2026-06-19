"use client";
import React, { useState } from 'react';
import { Plus, Bold, Italic, List } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

export default function TradeForm() {
    const [marketType, setMarketType] = useState('Crypto/Equities');
    const [session, setSession] = useState('NY Open');
    const [selectedTags, setSelectedTags] = useState<string[]>(['FOMO', 'GREED']);

    // Drag and Drop Configuration
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles);
        }
    });

    const availableTags = ['FOMO', 'GREED', 'FEAR', 'PATIENCE', 'SETUP', 'LIQUIDITY SWEEP', 'ORDER BLOCK'];

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-12">

            {/* 1. UPLOAD AREA */}
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${isDragActive ? 'border-white bg-[#121212]' : 'border-[#262626] bg-[#09090b]'
                    }`}
            >
                <input {...getInputProps()} />
                <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Upload Area</p>
                <Plus size={32} className="text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 uppercase tracking-wide">Drag & Drop Chart Screenshots (Before & After)</p>
            </div>

            {/* MAIN CONTAINER FOR FORM ELEMENTS */}
            <div className="border border-[#262626] bg-[#0c0c0e] rounded-2xl p-6 space-y-6">

                {/* 2. TRADE DETAILS SECTION */}
                <div className="space-y-4">
                    <h2 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Trade Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="text-xs text-gray-500 uppercase font-medium block mb-1.5">Trade Date</label>
                            <input type="date" className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-500" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase font-medium block mb-1.5">Market Type</label>
                            <select
                                value={marketType}
                                onChange={(e) => setMarketType(e.target.value)}
                                className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-500 appearance-none"
                            >
                                <option>Crypto/Equities</option>
                                <option>Forex</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase font-medium block mb-1.5">Instrument</label>
                            <input type="text" placeholder="BTCUSD, INFY" className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase font-medium block mb-1.5">Session</label>
                            <select
                                value={session}
                                onChange={(e) => setSession(e.target.value)}
                                className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-500 appearance-none"
                            >
                                <option>NY Open</option>
                                <option>London Open</option>
                                <option>Asia</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-gray-500 uppercase font-medium block mb-1.5">Net PNL (Manual Input / Broker Sync)</label>
                            <input type="text" className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-500" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase font-medium block mb-1.5">QTY / Position Size</label>
                            <input type="text" className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-500" />
                        </div>
                    </div>
                </div>

                {/* 3. ENTRY & EXIT SECTION */}
                <div className="border-t border-[#1c1c1e] pt-4 space-y-4">
                    <h2 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Entry & Exit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Entry price" className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500" />
                        <input type="text" placeholder="Exit price" className="w-full bg-[#09090b] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500" />
                    </div>
                </div>

                {/* 4. TRADE TAGS SECTION */}
                <div className="border-t border-[#1c1c1e] pt-4 space-y-3">
                    <h2 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                        Trade Tags <span className="text-xs text-gray-600 font-normal lowercase">(refining psychology)</span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {availableTags.map((tag) => {
                            const isSelected = selectedTags.includes(tag);
                            const isBadTag = tag === 'FOMO' || tag === 'GREED'; // डिझाईननुसार रेड हायलाईट

                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => toggleTag(tag)}
                                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${isSelected
                                            ? isBadTag
                                                ? 'bg-[#2a1414] border-[#e11d48] text-[#f43f5e]'
                                                : 'bg-[#262626] border-white text-white'
                                            : 'border-[#262626] text-gray-400 hover:border-gray-500'
                                        }`}
                                >
                                    {tag} {isSelected && <span className="ml-1 text-[10px]">✕</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 5. RICH TEXT EDITOR PLACEHOLDER */}
                <div className="border-t border-[#1c1c1e] pt-4 space-y-2">
                    <div className="border border-[#262626] bg-[#09090b] rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between border-b border-[#262626] px-4 py-2 bg-[#0c0c0e]">
                            <div className="flex items-center gap-4 text-gray-400">
                                <Bold size={16} className="cursor-pointer hover:text-white" />
                                <Italic size={16} className="cursor-pointer hover:text-white" />
                                <List size={16} className="cursor-pointer hover:text-white" />
                            </div>
                            <span className="text-[10px] tracking-wider text-gray-500 uppercase">Reflect / Reflection</span>
                        </div>
                        <textarea
                            rows={4}
                            placeholder="ENTER TRADE NOTES, MISTAKES, AND LESSONS LEARNED..."
                            className="w-full bg-[#09090b] p-4 text-sm text-white placeholder-gray-600 focus:outline-none resize-none"
                        />
                        <div className="text-[10px] text-center text-gray-600 pb-2 tracking-widest uppercase">Rich Text Editor</div>
                    </div>
                </div>

                {/* 6. ACTION BUTTONS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <button type="button" className="md:col-span-1 border border-white text-white rounded-xl py-3 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                        Draft / Save For Later
                    </button>
                    <button type="button" className="md:col-span-2 bg-white text-black rounded-xl py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-all">
                        Submit Trade Journal Entry
                    </button>
                </div>

            </div>
        </div>
    );
}