import React from "react";
import CategoryItem from "./CategoryItem";
import { Home, Key, Building2, Map, Briefcase, HardHat, UserSquare2, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CategoriesGrid = () => {
    const categories = [
        { label: "Buy", icon: Home, color: "text-blue-500" },
        { label: "Rent", icon: Key, color: "text-orange-500" },
        { label: "PG", icon: Building2, color: "text-purple-500" },
        { label: "Plots", icon: Map, color: "text-green-500" },
        { label: "Commercial", icon: Briefcase, color: "text-indigo-500" },
        { label: "New", icon: HardHat, color: "text-yellow-500" },
        { label: "Agents", icon: UserSquare2, color: "text-rose-500" },
        { label: "More", icon: MoreHorizontal, color: "text-gray-500" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="py-2"> {/* Minimal padding */}
            {/* Removed "Categories" title for tighter look, or keep it small */}
            {/* <div className="flex items-center justify-between px-4 mb-2">
         <h2 className="text-sm font-bold text-gray-900">Categories</h2>
      </div> */}

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-1"
            >
                {categories.map((cat, index) => (
                    <motion.div key={index} variants={item} className="shrink-0">
                        <Link to={`/category/${cat.label.toLowerCase()}`}>
                            <CategoryItem
                                icon={cat.icon}
                                label={cat.label}
                                className={cat.color}
                            />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CategoriesGrid;
