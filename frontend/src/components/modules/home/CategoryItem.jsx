import React from "react";
import { cn } from "@/lib/utils";

const CategoryItem = ({ icon: Icon, label, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center gap-2 group p-2 min-w-[72px]"
        >
            <div
                className={cn(
                    "h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm group-active:scale-95",
                    isActive
                        ? "bg-primary text-primary-foreground shadow-primary/25 shadow-md"
                        : "bg-white text-primary hover:bg-gray-50 border border-gray-100"
                )}
            >
                <Icon strokeWidth={1.5} size={26} />
            </div>
            <span className={cn(
                "text-xs font-medium tracking-wide transition-colors",
                isActive ? "text-primary" : "text-gray-600"
            )}>
                {label}
            </span>
        </button>
    );
};

export default CategoryItem;
