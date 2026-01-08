import React, { useState } from "react";
import { Input } from "@/components/common/Input";
import { Search, Map, ArrowLeft, Filter } from "lucide-react";
import FiltersBar from "@/components/modules/search/FiltersBar";
import PropertyCard from "@/components/modules/property/PropertyCard";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({});

    // Updated Mock Data with tags for filtering
    const allProperties = [
        {
            id: 1,
            title: "Luxury 3BHK Apartment",
            location: "Koramangala 4th Block, Bangalore",
            price: "₹2.4 Cr",
            type: "Sale",
            category: "Apartment", // Added for filtering
            bhk: "3 BHK",
            isVerified: true,
            image: "https://images.unsplash.com/photo-1600596542815-27b5d0d8f594?q=80&w=600&auto=format&fit=crop",
            specs: { beds: 3, baths: 3, area: 1850 }
        },
        {
            id: 2,
            title: "Spacious Villa with Garden",
            location: "Varthur Road, Whitefield",
            price: "₹65,000",
            rent: true,
            type: "Rent",
            category: "Villa",
            bhk: "4+ BHK",
            isVerified: true,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
            specs: { beds: 4, baths: 4, area: 3200 }
        },
        {
            id: 3,
            title: "Compact 1BHK Studio",
            location: "Indiranagar 100ft Road",
            price: "₹25,000",
            rent: true,
            type: "Rent",
            category: "Apartment",
            bhk: "1 BHK",
            isVerified: false,
            image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=600&auto=format&fit=crop",
            specs: { beds: 1, baths: 1, area: 650 }
        },
        {
            id: 4,
            title: "Premium Office Space",
            location: "MG Road, Central",
            price: "₹1.5 L",
            rent: true,
            type: "Rent",
            category: "Office",
            isVerified: true,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
            specs: { beds: 0, baths: 2, area: 2400 }
        },
    ];

    // Simple Client-side Filtering Logic
    const filteredResults = allProperties.filter(p => {
        // Filter by Type (Apartment, Villa etc)
        if (filters.type?.length > 0 && !filters.type.includes(p.category)) return false;

        // Filter by BHK
        if (filters.bhk?.length > 0 && !filters.bhk.includes(p.bhk)) return false;

        // Add more logic for budget/furnishing if data exists
        return true;
    });

    return (
        <div className="min-h-screen bg-gray-50/50 pb-24 relative">
            {/* Gradient Background Mesh (Consistent) */}
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            {/* Sticky Header with Search */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 pt-safe-top shadow-sm">
                <div className="flex items-center gap-3 p-3 px-4">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700">
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <Input
                        placeholder="Search nearby properties..."
                        icon={<Search className="h-4 w-4 text-primary" />}
                        className="bg-gray-50 border-transparent focus:bg-white h-10 text-sm shadow-none"
                    />
                    <button className="p-2.5 bg-gray-100 rounded-xl text-gray-700">
                        <Map className="h-5 w-5" />
                    </button>
                </div>

                {/* Filters Row - Connected to State */}
                <FiltersBar
                    activeFilters={filters}
                    onFilterChange={(id, val) => setFilters(prev => ({ ...prev, [id]: val }))}
                    onReset={() => setFilters({})}
                />
            </header>

            {/* Results */}
            <main className="p-4 space-y-4 relative z-10">
                <div className="flex items-center justify-between px-1">
                    <p className="text-sm font-bold text-gray-900">
                        {filteredResults.length} Properties <span className="text-gray-500 font-normal">found</span>
                    </p>
                    <button className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg active:scale-95 transition-transform">
                        <Filter className="h-3 w-3" />
                        Sort
                    </button>
                </div>

                <div className="space-y-5">
                    <AnimatePresence>
                        {filteredResults.map((property, idx) => (
                            <motion.div
                                key={property.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <PropertyCard property={property} />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredResults.length === 0 && (
                        <div className="py-20 text-center text-gray-400">
                            <p>No properties match your filters.</p>
                            <button onClick={() => setFilters({})} className="text-primary text-sm font-bold mt-2">Clear Filters</button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default SearchPage;
