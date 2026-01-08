import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";

const FeaturedCarousel = () => {
    // Updated with more reliable Unsplash URLs
    const slides = [
        {
            id: 1,
            title: "PREMIUM\nRESIDENCES",
            subtitle: "Offers ending soon",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop", // Modern House
            color: "from-black/70 to-transparent"
        },
        {
            id: 2,
            title: "LUXURY\nINTERIORS",
            subtitle: "Upgrade your lifestyle",
            image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop", // Interior
            color: "from-orange-950/80 to-transparent"
        },
        {
            id: 3,
            title: "FOREST\nRETREATS",
            subtitle: "Find your peace",
            image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop", // Cabin/Nature
            color: "from-green-950/80 to-transparent"
        }
    ];

    return (
        <div className="py-2 overflow-hidden">
            <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory">
                {slides.map((slide) => (
                    <Link
                        to="/search"
                        key={slide.id}
                        className="relative min-w-[320px] h-[170px] rounded-2xl overflow-hidden shrink-0 snap-center group shadow-md block"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full relative"
                        >
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} z-10`} />

                            {/* Content */}
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-start text-white">
                                <h3 className="text-2xl font-black leading-tight whitespace-pre-line tracking-wide mb-2 drop-shadow-lg">
                                    {slide.title}
                                </h3>
                                <p className="text-sm font-medium opacity-90 mb-3 drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full px-5 h-8 text-xs font-bold border-none shadow-xl pointer-events-none">
                                    Explore Now
                                </Button>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCarousel;
