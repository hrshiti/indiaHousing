import React from "react";
import { ArrowLeft, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "@/components/modules/property/PropertyCard";
import { motion } from "framer-motion";

const SavedPage = () => {
    const navigate = useNavigate();

    // Mock Data - Only using a subset
    const savedProperties = [
        {
            id: 1,
            title: "Luxury 3BHK Apartment",
            location: "Koramangala 4th Block, Bangalore",
            price: "₹2.4 Cr",
            type: "Sale",
            isVerified: true,
            image: "https://images.unsplash.com/photo-1600596542815-27b5d0d8f594?q=80&w=600&auto=format&fit=crop",
            specs: { beds: 3, baths: 3, area: 1850 }
        },
        {
            id: 4,
            title: "Premium Office Space",
            location: "MG Road, Central",
            price: "₹1.5 L",
            rent: true,
            type: "Rent",
            isVerified: true,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
            specs: { beds: 0, baths: 2, area: 2400 }
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0 z-30">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                        <ArrowLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <span className="text-base font-bold text-gray-900">Saved Properties</span>
                </div>
                <button className="text-xs font-bold text-primary">Clear All</button>
            </div>

            <div className="p-4 space-y-4">
                {savedProperties.length > 0 ? (
                    savedProperties.map((property, idx) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <PropertyCard property={property} />
                        </motion.div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center pt-24 text-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <HeartOff className="h-8 w-8 text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No Saved Properties</h3>
                        <p className="text-sm text-gray-500 mt-1 max-w-[200px]">Properties you mark as favorite will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavedPage;
