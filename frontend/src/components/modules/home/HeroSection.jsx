import React from "react";
import { Input } from "@/components/common/Input";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = ({ user }) => {
    return (
        <div className="px-4 pb-6 pt-2 space-y-6">
            {/* Greeting */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-0.5"
            >
                <h1 className="text-2xl font-bold tracking-tight">
                    Heyo, <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">{user?.name || "Guest"}</span> 👋
                </h1>
                <p className="text-sm text-gray-500 font-medium">
                    Discover what's happening around you
                </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
            >
                <div className="relative">
                    <Input
                        placeholder="Search properties, areas..."
                        className="pl-11 pr-12 h-14 rounded-2xl border-none bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] text-base"
                        icon={<Search className="h-5 w-5 text-primary" strokeWidth={2.5} />}
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-xl transition-colors text-primary">
                        <SlidersHorizontal className="h-5 w-5" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
