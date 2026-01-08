import React from "react";
import { Bell, ChevronDown } from "lucide-react";
import Logo from "@/components/common/Logo";

const MobileHeader = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 pt-2 md:hidden bg-white/50 backdrop-blur-sm sticky top-0 z-30 h-[80px]">
            {/* Logo & Location */}
            <div className="flex items-center gap-2">
                {/* Increased container size significantly */}
                <div className="h-20 min-w-[80px] flex items-center justify-center -ml-2">
                    <Logo size="sm" className="w-auto h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                        Location
                    </span>
                    <button className="flex items-center gap-1 text-sm font-bold text-gray-900 leading-none">
                        Bangalore, IN
                        <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Actions */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="h-6 w-6 text-gray-700" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
            </button>
        </div>
    );
};

export default MobileHeader;
