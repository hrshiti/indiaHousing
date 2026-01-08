import React, { useState, useEffect } from "react";
import { Input } from "@/components/common/Input";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const StickySearchBar = () => {
    const { scrollY } = useScroll();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsSticky(latest > 50); // Threshold to trigger "scrolled" state
        });
    }, [scrollY]);

    return (
        <div className={cn(
            "sticky top-[80px] z-20 px-4 py-2 transition-all duration-300",
            isSticky ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3" : "bg-transparent"
        )}>
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: isSticky ? 1 : 1 }} // Could add scale effect
                className="relative"
            >
                <div className="relative">
                    <Input
                        placeholder="Search properties, areas..."
                        className={cn(
                            "pl-11 pr-12 rounded-2xl border-none text-base transition-all duration-300",
                            isSticky ? "h-11 bg-gray-100 shadow-inner" : "h-12 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                        )}
                        icon={<Search className="h-5 w-5 text-primary" strokeWidth={2.5} />}
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-200/50 rounded-xl transition-colors text-primary">
                        <SlidersHorizontal className="h-5 w-5" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default StickySearchBar;
