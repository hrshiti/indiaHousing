import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, BedDouble, Bath, Square, Heart } from "lucide-react";
import { Button } from "@/components/common/Button";

const PropertyCard = ({ property }) => {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        // Prevent navigation if clicking heart or specific buttons if needed, but usually clicking card works.
        // If target is button, let button handle it? 
        // Better: Wrap the clickable parts.
        // simplest: onClick on wrapper.
        navigate(`/property/${property.id}`);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleCardClick}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                    {property.isVerified && (
                        <span className="bg-blue-600/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                            VERIFIED
                        </span>
                    )}
                    <span className="bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-md">
                        FOR {property.type.toUpperCase()}
                    </span>
                </div>
                <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={(e) => { e.stopPropagation(); /* Add logic */ }}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-gray-500 hover:text-red-500 transition-colors pointer-events-auto shadow-sm"
                >
                    <Heart className="h-4 w-4" />
                </motion.button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                {/* Title & Price */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-gray-900 line-clamp-1">{property.title}</h3>
                        <div className="flex items-center gap-1 text-gray-500 mt-1">
                            <MapPin className="h-3 w-3" />
                            <span className="text-xs truncate max-w-[200px]">{property.location}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block font-black text-lg text-primary">{property.price}</span>
                        {property.rent && <span className="text-[10px] text-gray-500 font-medium">/ month</span>}
                    </div>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 py-3 border-y border-dashed border-gray-100">
                    <div className="flex items-center gap-1.5">
                        <BedDouble className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-700">{property.specs.beds} Beds</span>
                    </div>
                    <div className="w-[1px] h-3 bg-gray-200" />
                    <div className="flex items-center gap-1.5">
                        <Bath className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-700">{property.specs.baths} Baths</span>
                    </div>
                    <div className="w-[1px] h-3 bg-gray-200" />
                    <div className="flex items-center gap-1.5">
                        <Square className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-700">{property.specs.area} sqft</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-1">
                    <Button
                        onClick={(e) => { e.stopPropagation(); navigate(`/property/${property.id}`); }}
                        className="w-full h-10 rounded-xl text-xs font-bold"
                        variant="outline"
                    >
                        View Details
                    </Button>
                    <Button
                        onClick={(e) => { e.stopPropagation(); /* Contact logic */ }}
                        className="w-full h-10 rounded-xl text-xs font-bold bg-green-600 hover:bg-green-700 shadow-green-200"
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
