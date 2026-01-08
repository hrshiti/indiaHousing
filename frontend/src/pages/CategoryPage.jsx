import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Filter, Map, Layers } from "lucide-react";
import { Input } from "@/components/common/Input";
import FiltersBar from "@/components/modules/search/FiltersBar";
import PropertyCard from "@/components/modules/property/PropertyCard";
import PromoBanner from "@/components/modules/home/PromoBanner";
import { motion } from "framer-motion";

const CategoryPage = () => {
    const { category } = useParams(); // e.g., 'buy', 'rent', 'commercial'
    const navigate = useNavigate();
    const [filters, setFilters] = useState({});

    // Dynamic Title & Content based on Category
    const getCategoryDetails = (cat) => {
        switch (cat?.toLowerCase()) {
            case 'buy': return { title: "Properties for Sale", subtitle: "Find your dream home" };
            case 'rent': return { title: "Properties for Rent", subtitle: "Spaces for every budget" };
            case 'pg': return { title: "Paying Guest (PG)", subtitle: "Affordable shared living" };
            case 'plots': return { title: "Plots & Land", subtitle: "Invest in the future" };
            case 'commercial': return { title: "Commercial Spaces", subtitle: "Offices, Shops & more" };
            default: return { title: "Properties", subtitle: "Explore top listings" };
        }
    };

    const info = getCategoryDetails(category);

    return (
        <div className="min-h-screen bg-gray-50/50 pb-24 relative">
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 pt-safe-top shadow-sm">
                <div className="flex items-center gap-3 p-3 px-4">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700">
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div className="flex-1">
                        <h1 className="text-base font-bold text-gray-900 leading-none">{info.title}</h1>
                        <p className="text-[10px] text-gray-500">{info.subtitle}</p>
                    </div>
                </div>
                <FiltersBar
                    activeFilters={filters}
                    onFilterChange={(id, val) => setFilters(prev => ({ ...prev, [id]: val }))}
                    onReset={() => setFilters({})}
                />
            </header>

            <main className="p-4 space-y-4 relative z-10">

                {/* Promo Banner specific to category */}
                <PromoBanner
                    title={`Best Deals in ${info.title}`}
                    subtitle="Limited time offers available"
                    cta="View Offers"
                    image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                    color="bg-gray-900"
                />

                <div className="flex items-center justify-between px-1">
                    <p className="text-sm font-bold text-gray-900">
                        Top Listings
                    </p>
                    <button className="flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-lg">
                        <Map className="h-3 w-3" /> Map View
                    </button>
                </div>

                {/* Reusing PropertyCard with Dummy Data for now */}
                {/* Ideally this data comes from an API filtered by 'category' */}
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                        <PropertyCard
                            key={i}
                            property={{
                                id: i,
                                title: `${category === 'commercial' ? 'Office Space' : 'Luxury Apartment'} ${i}`,
                                location: "Whitefield, Bangalore",
                                price: "₹1.5 Cr",
                                type: category || "Sale",
                                isVerified: i % 2 === 0,
                                image: `https://images.unsplash.com/photo-${1600000000000 + i}?w=600&auto=format&fit=crop`,
                                specs: { beds: 3, baths: 3, area: 1500 }
                            }}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CategoryPage;
