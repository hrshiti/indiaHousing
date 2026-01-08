import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const TrendingList = () => {
    const items = [
        {
            id: 1,
            title: "Sunny Apartment",
            location: "Indiranagar, Bangalore",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop",
            price: "₹1.2 Cr"
        },
        {
            id: 2,
            title: "Modern Villa",
            location: "Whitefield, Bangalore",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
            price: "₹3.5 Cr"
        }
    ];

    return (
        <div className="px-4 pb-24 space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Trending</h2>
                <button className="text-sm font-medium text-primary hover:text-primary/80">See all</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                    <Link to={`/property/${item.id}`} key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all block">
                        {/* Image */}
                        <div className="aspect-[4/3] w-full relative overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <button
                                onClick={(e) => { e.preventDefault(); /* Like logic at some point */ }}
                                className="absolute top-2 right-2 h-8 w-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm"
                            >
                                <Heart className="h-4 w-4 fill-current" />
                            </button>
                            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 backdrop-blur rounded-lg flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                <span className="text-[10px] font-bold text-white">{item.rating}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-3">
                            <h3 className="font-bold text-gray-900 text-sm truncate">{item.title}</h3>
                            <p className="text-xs text-muted-foreground truncate mb-2">{item.location}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-black text-primary">{item.price}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TrendingList;
