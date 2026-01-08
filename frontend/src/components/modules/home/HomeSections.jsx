import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SectionHeader = ({ title, subtitle, actionText = "See all" }) => {
    return (
        <div className="flex items-center justify-between px-4 mb-3">
            <div>
                <h2 className="text-base font-bold text-gray-900 leading-tight">{title}</h2>
                {subtitle && <p className="text-[10px] text-gray-500 font-medium">{subtitle}</p>}
            </div>
            <button className="flex items-center gap-1 text-[10px] font-bold text-primary hover:text-primary/80 transition-colors">
                {actionText} <ArrowRight className="h-3 w-3" />
            </button>
        </div>
    );
};

const HorizontalScrollList = ({ children, className }) => {
    return (
        <div className={cn("flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2 snap-x", className)}>
            {children}
        </div>
    );
};

const ProjectCard = ({ id = 1, title, location, price, image, label, type = "default" }) => {
    const isLarge = type === "large";

    return (
        <Link
            to={`/property/${id}`}
            className={cn(
                "relative overflow-hidden rounded-xl shrink-0 group shadow-sm bg-white border border-gray-100 block",
                isLarge ? "w-[280px] h-[200px]" : "w-[160px] h-[220px]"
            )}
        >
            {/* Image */}
            <div className={cn("relative overflow-hidden w-full", isLarge ? "h-full" : "h-[140px]")}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay for Large Cards */}
                {isLarge && <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />}

                {/* Tag */}
                {label && (
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-0.5 rounded shadow-sm text-gray-800">
                        {label}
                    </span>
                )}
            </div>

            {/* Content - styled differently based on type */}
            {isLarge ? (
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg leading-tight">{title}</h3>
                    <p className="text-xs text-gray-300 mb-1">{location}</p>
                    <div className="font-bold text-yellow-400 text-sm">{price}</div>
                </div>
            ) : (
                <div className="p-2 space-y-1">
                    <h3 className="font-bold text-xs text-gray-900 line-clamp-1">{title}</h3>
                    <p className="text-[10px] text-gray-500 line-clamp-1">{location}</p>
                    <div className="font-bold text-sm text-gray-900 mt-1">{price}</div>
                </div>
            )}
        </Link>
    );
};

export { SectionHeader, HorizontalScrollList, ProjectCard };
