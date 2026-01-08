import React from "react";

const PromoBanner = ({ title, subtitle, cta, image, color = "bg-primary" }) => {
    return (
        <div className="px-4 py-2">
            <div className={`relative rounded-xl overflow-hidden ${color} h-[100px] flex items-center shadow-sm`}>
                <div className="flex-1 p-4 z-10">
                    <h3 className="text-white font-bold text-lg leading-none mb-1">{title}</h3>
                    <p className="text-white/80 text-xs font-medium mb-2">{subtitle}</p>
                    <button className="bg-white text-xs font-bold px-3 py-1 rounded-md text-gray-900 shadow-sm">
                        {cta}
                    </button>
                </div>
                <div className="w-[120px] h-full relative">
                    {/* Simple geometric or image background decoration */}
                    <div className="absolute inset-0 bg-white/10 skew-x-12 scale-150 translate-x-4" />
                    <img src={image} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
