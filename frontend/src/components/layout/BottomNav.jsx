import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Search, Heart, User, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
    const location = useLocation();

    // Hide bottom nav on specific routes if needed (e.g. detailed product view, though usually valid to keep)
    // const hideOnRoutes = ["/post-property"];
    // if (hideOnRoutes.includes(location.pathname)) return null;

    const navItems = [
        { icon: Home, label: "Home", path: "/" },
        { icon: Search, label: "Search", path: "/search" },
        { icon: PlusCircle, label: "Sell", path: "/sell", highlight: true }, // Special "Post" button
        { icon: Heart, label: "Saved", path: "/saved" },
        { icon: User, label: "Profile", path: "/profile" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 pb-safe-area-bottom shadow-[0_-5px_10px_rgba(0,0,0,0.02)] md:hidden overflow-visible">
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => cn(
                            "flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-200",
                            item.highlight ? "-mt-6" : "", // Lift the middle button
                            isActive ? "text-gray-900 font-bold" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        {({ isActive }) => (
                            <>
                                <div className={cn(
                                    "p-1 rounded-full transition-all flex items-center justify-center",
                                    item.highlight
                                        ? "bg-white text-gray-800 p-3 shadow-[0_5px_15px_rgba(0,0,0,0.1)] scale-110 border border-gray-100 -mt-2"
                                        : "",
                                    isActive && !item.highlight ? "bg-gray-100" : "bg-transparent"
                                )}>
                                    <item.icon className={cn(
                                        "h-6 w-6",
                                        item.highlight ? "h-7 w-7 stroke-[2px]" : "",
                                        isActive && !item.highlight && "fill-current"
                                    )} strokeWidth={isActive || item.highlight ? 2.5 : 2} />
                                </div>
                                <span className={cn(
                                    "text-[10px] font-medium",
                                    isActive ? "text-primary" : "text-gray-500",
                                    item.highlight && "mt-1"
                                )}>
                                    {item.label}
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default BottomNav;
