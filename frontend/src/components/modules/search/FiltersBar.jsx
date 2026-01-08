import React, { useState } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

import { motion, AnimatePresence } from "framer-motion";

const FILTERS = [
    { id: "type", label: "Property Type", options: ["Apartment", "Villa", "Plot", "Office"] },
    { id: "bhk", label: "BHK", options: ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"] },
    { id: "budget", label: "Budget", options: ["< 50L", "50L - 1Cr", "1Cr - 2Cr", "> 2Cr"] },
    { id: "furnishing", label: "Furnishing", options: ["Fully Furnished", "Semi Furnished", "Unfurnished"] },
];

const FiltersBar = ({ activeFilters, onFilterChange, onReset }) => {
    const [openDrawer, setOpenDrawer] = useState(null);

    const toggleFilter = (categoryId, value) => {
        const current = activeFilters[categoryId] || [];
        const updated = current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value];

        onFilterChange(categoryId, updated);
    };

    const hasFilters = Object.values(activeFilters).some(arr => arr.length > 0);

    return (
        <>
            <div className="sticky top-[60px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3">
                <div className="flex items-center gap-2 px-4 overflow-x-auto no-scrollbar">

                    {/* Main Filter Toggle (Could open a full modal) */}
                    <button
                        onClick={onReset}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium shrink-0 shadow-sm transition-colors",
                            hasFilters ? "bg-red-50 text-red-600 border border-red-100" : "bg-gray-900 text-white shadow-gray-200"
                        )}
                    >
                        <SlidersHorizontal className="h-3 w-3" />
                        {hasFilters ? "Clear" : "Filters"}
                    </button>

                    <div className="w-[1px] h-6 bg-gray-200 mx-1 shrink-0" />

                    {/* Individual Filter Pills */}
                    {FILTERS.map((filter) => {
                        const isActive = activeFilters[filter.id]?.length > 0;
                        return (
                            <button
                                key={filter.id}
                                onClick={() => setOpenDrawer(filter.id)}
                                className={cn(
                                    "flex items-center gap-1 px-4 py-2 border rounded-full text-xs font-medium whitespace-nowrap active:scale-95 transition-all",
                                    isActive
                                        ? "bg-primary/10 border-primary text-primary"
                                        : "bg-white border-gray-200 text-gray-700"
                                )}
                            >
                                {filter.label}
                                {isActive && <span className="ml-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{activeFilters[filter.id].length}</span>}
                                <ChevronDown className={cn("h-3 w-3", isActive ? "text-primary" : "text-gray-400")} />
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Simple Bottom Sheet / Drawer Implementation for Filters */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {openDrawer && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                onClick={() => setOpenDrawer(null)}
                                className="fixed inset-0 bg-black/50 z-[60]"
                            />

                            {/* Drawer Content */}
                            <motion.div
                                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="fixed bottom-0 left-0 right-0 bg-white z-[70] rounded-t-3xl p-6 pb-safe-bottom max-h-[85vh] overflow-y-auto shadow-2xl"
                                drag="y"
                                dragConstraints={{ top: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_, info) => {
                                    if (info.offset.y > 100) setOpenDrawer(null);
                                }}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-lg">{FILTERS.find(f => f.id === openDrawer)?.label}</h3>
                                    <button onClick={() => setOpenDrawer(null)} className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Close</button>
                                </div>

                                <div className="grid grid-cols-2 gap-3 pb-6">
                                    {FILTERS.find(f => f.id === openDrawer)?.options.map(option => {
                                        const isSelected = activeFilters[openDrawer]?.includes(option);
                                        return (
                                            <button
                                                key={option}
                                                onClick={() => toggleFilter(openDrawer, option)}
                                                className={cn(
                                                    "flex items-center justify-between p-3.5 rounded-xl border text-sm font-bold transition-all",
                                                    isSelected
                                                        ? "bg-primary/5 border-primary text-primary"
                                                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                                                )}
                                            >
                                                {option}
                                                {isSelected && <Check className="h-4 w-4" />}
                                            </button>
                                        )
                                    })}
                                </div>

                                <div className="pt-2 border-t border-gray-100 mt-2">
                                    <button
                                        onClick={() => setOpenDrawer(null)}
                                        className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30"
                                    >
                                        Apply Filters
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default FiltersBar;
