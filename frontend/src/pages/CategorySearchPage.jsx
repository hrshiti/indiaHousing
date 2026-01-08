import React, { useState } from "react";
import { ArrowLeft, Search, MapPin, X, Building2, Home, Armchair, Plus, ChevronDown } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CategorySearchPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    // State
    const [subType, setSubType] = useState(() => {
        const c = (category || "").toLowerCase();
        if (c.includes("rent") || c.includes("pg")) return "Rent/PG";
        if (c.includes("commercial")) return "Commercial";
        return "Buy";
    });

    const [selectedCity, setSelectedCity] = useState(null); // If null -> Landing Mode. If set -> Filter Mode.
    const [searchQuery, setSearchQuery] = useState("");

    // Tabs
    const tabs = ["Buy", "Rent/PG", "Commercial"];

    // Mock Data
    const recentSearches = [`Buy in Indore`, `3 BHK in Vijay Nagar`];
    const popularCities = ["Noida", "Delhi", "Mumbai", "Chennai", "Gurgaon", "Bangalore", "Hyderabad"];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0 }
    };

    // Filter State
    const [lookingTo, setLookingTo] = useState("Rent"); // Rent or PG
    const [selectedBHK, setSelectedBHK] = useState([]);
    const [selectedPropType, setSelectedPropType] = useState([]);
    const [furnishing, setFurnishing] = useState("");

    const propertyTypes = [
        { label: "Flat/Apartment", icon: Building2 },
        { label: "Builder Floor", icon: Building2 },
        { label: "1 RK/ Studio Apt", icon: Home },
        { label: "Independent House/Villa", icon: Home },
        { label: "Serviced Apartment", icon: Building2 },
    ];

    const toggleSelection = (list, setList, item) => {
        if (list.includes(item)) setList(list.filter(i => i !== item));
        else setList([...list, item]);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col relative">

            {/* --- HEADER SECTION --- */}
            <div className="bg-gradient-to-r from-primary to-orange-600 px-4 pt-12 pb-8 rounded-b-[2.5rem] shadow-xl relative z-20 shrink-0">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                    {/* Tabs */}
                    <div className="bg-white/20 backdrop-blur-md p-1 rounded-full flex gap-1">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setSubType(tab)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-xs font-bold transition-all",
                                    subType === tab
                                        ? "bg-white text-primary shadow-sm"
                                        : "text-white/80 hover:bg-white/10"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button onClick={() => navigate("/")} className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Search Bar (Dynamic) */}
                <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center gap-3 transform translate-y-6">
                    <button className="text-primary p-1">
                        <Search className="h-5 w-5" />
                    </button>

                    <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
                        {/* City Chip */}
                        {selectedCity ? (
                            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold shrink-0">
                                {selectedCity}
                                <X
                                    className="h-3 w-3 cursor-pointer"
                                    onClick={(e) => { e.stopPropagation(); setSelectedCity(null); }}
                                />
                            </div>
                        ) : (
                            <span className="text-gray-400 text-sm font-medium">Add</span>
                        )}

                        <input
                            autoFocus={!selectedCity}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            // placeholder logic
                            placeholder={selectedCity ? "Add more..." : `Try - 3 BHK in ${popularCities[0]}`}
                            className="w-full min-w-[100px] text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 pt-12 px-4 pb-28 overflow-y-auto">
                <AnimatePresence mode="wait">

                    {/* MODE 1: SEARCH LANDING (No City Selected) */}
                    {!selectedCity ? (
                        <motion.div
                            key="landing"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="space-y-6"
                        >
                            {/* Last Searched */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <h3 className="text-xs font-bold text-gray-900 mb-3">Last searched..</h3>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="space-y-3"
                                >
                                    {recentSearches.map((term, i) => (
                                        <motion.button
                                            key={i}
                                            variants={item}
                                            className="flex items-center justify-between w-full group"
                                        >
                                            <div className="flex items-center gap-3 text-gray-500 group-hover:text-primary transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                                    <Search className="h-4 w-4" />
                                                </div>
                                                <span className="text-sm font-medium">{term}</span>
                                            </div>
                                            <ArrowLeft className="h-4 w-4 rotate-[135deg] text-gray-300" />
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Popular Cities */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <h3 className="text-xs font-bold text-gray-900 mb-3">Popular cities in India</h3>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="flex flex-wrap gap-2"
                                >
                                    {popularCities.map(city => (
                                        <motion.button
                                            key={city}
                                            variants={item}
                                            onClick={() => setSelectedCity(city)}
                                            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-1 hover:border-primary hover:text-primary transition-colors shadow-sm"
                                        >
                                            <span className="text-lg leading-none mb-0.5">+</span> {city}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                    ) : (

                        /* MODE 2: FILTERS FORM (City Selected) */
                        <motion.div
                            key="filters"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="space-y-6"
                        >
                            {/* Looking To Tabs */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-gray-900">Looking to</h3>
                                <div className="flex gap-2">
                                    {["Rent", "PG/Co-living"].map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setLookingTo(opt)}
                                            className={cn(
                                                "px-4 py-2 rounded-xl text-xs font-bold border transition-all",
                                                lookingTo === opt
                                                    ? "bg-blue-50 border-blue-100 text-blue-700"
                                                    : "bg-white border-gray-200 text-gray-600"
                                            )}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Budget (Placeholder for now) */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-gray-900">Budget in ₹</h3>
                                <div className="flex gap-3">
                                    <input type="number" placeholder="Min" className="w-full p-2 rounded-xl border border-gray-200 text-sm font-bold" />
                                    <input type="number" placeholder="Max" className="w-full p-2 rounded-xl border border-gray-200 text-sm font-bold" />
                                </div>
                            </div>

                            {/* BHK Scroll */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-gray-900">BHK</h3>
                                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                                    {["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map(bhk => (
                                        <button
                                            key={bhk}
                                            onClick={() => toggleSelection(selectedBHK, setSelectedBHK, bhk)}
                                            className={cn(
                                                "px-4 py-2 rounded-xl text-xs font-bold border shrink-0 transition-all",
                                                selectedBHK.includes(bhk)
                                                    ? "bg-primary/10 border-primary text-primary"
                                                    : "bg-white border-gray-200 text-gray-600"
                                            )}
                                        >
                                            {bhk}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Property Types Grid */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-gray-900">Property types</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {propertyTypes.map(pt => (
                                        <button
                                            key={pt.label}
                                            onClick={() => toggleSelection(selectedPropType, setSelectedPropType, pt.label)}
                                            className={cn(
                                                "p-3 rounded-xl border flex flex-col items-start gap-2 transition-all text-left h-24",
                                                selectedPropType.includes(pt.label)
                                                    ? "bg-primary/5 border-primary text-gray-900"
                                                    : "bg-white border-gray-200 hover:bg-gray-50"
                                            )}
                                        >
                                            <pt.icon className={cn("h-5 w-5", selectedPropType.includes(pt.label) ? "text-primary" : "text-gray-400")} />
                                            <span className="text-xs font-bold text-gray-700 leading-tight">{pt.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Furnishing */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-gray-900">Furnishing status</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Furnished", "Semi-furnished", "Unfurnished"].map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setFurnishing(opt)}
                                            className={cn(
                                                "px-4 py-2 rounded-xl text-xs font-bold border transition-all",
                                                furnishing === opt
                                                    ? "bg-primary/10 border-primary text-primary"
                                                    : "bg-white border-gray-200 text-gray-600"
                                            )}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Advanced Filters Accordion */}
                            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">Advanced Filters</h3>
                                    <p className="text-[10px] text-gray-500">Posted by, Available for, Amenities, Area & 6 more</p>
                                </div>
                                <ChevronDown className="h-4 w-4 text-gray-400" />
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sticky Bottom Bar (Only in Filter Mode) */}
            {selectedCity && (
                <div className="bg-white border-t border-gray-100 p-4 pb-safe-bottom flex items-center justify-between sticky bottom-0 z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
                    <button
                        onClick={() => {
                            setSelectedCity(null);
                            setSelectedBHK([]);
                        }}
                        className="text-primary text-sm font-bold px-4"
                    >
                        Clear All
                    </button>
                    <button
                        onClick={() => navigate('/search')}
                        className="bg-primary text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-transform"
                    >
                        See all 25133 properties
                    </button>
                </div>
            )}
        </div>
    );
};

export default CategorySearchPage;
