import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HeroGreeting = ({ user }) => {
    return (
        <div className="px-4 pt-1 mb-2">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-0.5"
            >
                <h1 className="text-2xl font-bold tracking-tight">
                    Heyo, <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">{user?.name || "Guest"}</span> 👋
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                    Discover what's happening around you
                </p>
            </motion.div>
        </div>
    );
};

export default HeroGreeting;
