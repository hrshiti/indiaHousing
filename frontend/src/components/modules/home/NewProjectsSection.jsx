import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NewProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "Prestige City",
            developer: "Prestige Group",
            location: "Sarjapur Road",
            price: "From ₹80L",
            image: "https://images.unsplash.com/photo-1574362848149-11496d93e7c7?q=80&w=400&fit=crop"
        },
        {
            id: 2,
            title: "Sobha Dream",
            developer: "Sobha Ltd",
            location: "Panathur",
            price: "From ₹95L",
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=400&fit=crop"
        },
        {
            id: 3,
            title: "Godrej Woods",
            developer: "Godrej Properties",
            location: "Whitefield",
            price: "From ₹1.2Cr",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400&fit=crop"
        }
    ];

    return (
        <div className="px-4 py-4 space-y-3 bg-white py-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">New Launches 🚀</h2>
                    <p className="text-xs text-gray-500">Fresh additions to the market</p>
                </div>
                <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
                    <ArrowRight className="h-4 w-4 text-gray-600" />
                </button>
            </div>

            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {projects.map((item) => (
                    <Link to={`/property/${item.id}`} key={item.id} className="min-w-[200px] space-y-2 group cursor-pointer block">
                        <div className="aspect-[3/2] rounded-xl overflow-hidden relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                                <span className="text-white font-bold text-sm block">{item.price}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.location} • {item.developer}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NewProjectsSection;
