import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    ArrowLeft, Share2, Heart, Search, MapPin, BadgeCheck, CheckCircle2,
    BedDouble, Bath, Car, Maximize, User, Calendar, Phone, MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";

const PropertyDetailsPage = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    // Handle Scroll for Header Transition
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mock Data based on Image
    const property = {
        price: "46,500",
        title: "Independent/Builder Floor for Rent in Model LIC Colony, Basaveshwara Nagar",
        location: "Model LIC Colony, Basaveshwara Nagar",
        verified: true,
        highlights: [
            "North Facing",
            "Rajajinagar metro Nearby",
            "Nps school Nearby",
            "Vitrified Flooring"
        ],
        specs: [
            { label: "3 BHK", icon: BedDouble },
            { label: "3 Baths", icon: Bath },
            { label: "Fully Furnished", sub: "Single women", icon: User },
            { label: "2000 sq.ft", sub: "Carpet Area", icon: Maximize },
        ],
        details: [
            { label: "Layout", value: "3 BHK, 3 Baths, Pooja Room, Study Room" },
            { label: "Carpet Area", value: "2000 sq.ft." },
            { label: "Floor Number", value: "3" },
            { label: "No. of Balconies", value: "2" },
            { label: "Parking", value: "1 Covered" },
            { label: "Furnishing", value: "Semi furnished" },
            { label: "Security Deposit", value: "₹ 4.65 Lac" },
            { label: "Facing", value: "North" },
            { label: "Width of facing road", value: "40 ft" },
            { label: "Flooring", value: "Vitrified" }
        ],
        facilities: [
            { label: "1 Covered Parking", icon: Car, color: "bg-green-100 text-green-700" },
            { label: "Vastu Compliant", icon: BadgeCheck, color: "bg-orange-100 text-orange-700" },
            { label: "Power Backup", icon: CheckCircle2, color: "bg-yellow-100 text-yellow-700" }
        ],
        dealer: {
            name: "Sri Kamadhenu Enterprises",
            verified: true,
            since: "Jul 2015",
            properties: "100+",
            avatar: "SK"
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-28">

            {/* --- 1. STICKY HEADER --- */}
            <header className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 flex items-center gap-3",
                scrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
            )}>
                <button onClick={() => navigate(-1)} className="p-2 bg-black/10 backdrop-blur-md rounded-full">
                    <ArrowLeft className="h-5 w-5" />
                </button>

                {/* Search Bar mimic */}
                <div className="flex-1 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                    <Search className="h-4 w-4 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
                        Search City, Locality, Project
                    </span>
                </div>

                <div className="flex gap-2">
                    <button className="p-2 bg-black/10 backdrop-blur-md rounded-full">
                        <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-black/10 backdrop-blur-md rounded-full">
                        <Share2 className="h-5 w-5" />
                    </button>
                </div>
            </header>

            {/* --- 2. HERO IMAGE SECTION --- */}
            <div className="relative h-[400px] w-full bg-gray-200">
                <img
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Property"
                />

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                            <BadgeCheck className="h-3 w-3" /> Verified
                        </span>
                    </div>
                    <div className="flex items-end gap-1 mb-1">
                        <h1 className="text-2xl font-bold">₹ {property.price}</h1>
                        <span className="text-sm font-medium opacity-80 mb-1">/month</span>
                    </div>
                    <p className="text-xs text-white/90 mb-3 truncate max-w-[80%]">{property.location}</p>

                    <button className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1">
                        See Price Details <ArrowLeft className="h-3 w-3 rotate-180" />
                    </button>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-medium flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-sm" /> 1/12
                </div>
            </div>

            {/* --- 3. VERIFICATION BANNER --- */}
            <div className="bg-green-50 px-4 py-3 flex items-center justify-between border-b border-green-100">
                <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <p className="text-xs font-medium text-green-800">
                        Property has been verified by our team <span className="text-blue-600 underline">Learn more</span>
                    </p>
                </div>
                <button className="text-gray-400"><ArrowLeft className="h-3 w-3 rotate-180 opacity-50" /></button>
            </div>

            {/* --- 4. HIGHLIGHTS & SPECS --- */}
            <div className="px-4 py-6 space-y-6 bg-white mb-2">

                {/* Quick Highlights List */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {property.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-semibold text-gray-600 flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3 text-green-500" /> {h}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <div>
                    <p className="text-xs text-gray-500 font-medium">Independent/Builder Floor for Rent in</p>
                    <h2 className="text-sm font-bold text-gray-900 mt-0.5">Model LIC Colony, Basaveshwara Nagar</h2>
                </div>

                {/* Nearby Places Scroll */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {["Maruteshwara Temple", "Indus ind bank ATM", "Bus stop"].map((place, i) => (
                        <div key={i} className="flex items-center gap-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-bold shrink-0">
                            <MapPin className="h-3 w-3" /> {place}
                        </div>
                    ))}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-4 gap-2 text-center">
                    {property.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-2">
                            <spec.icon className="h-5 w-5 text-gray-400 mb-1" />
                            <span className="text-xs font-bold text-gray-900 leading-tight">{spec.label}</span>
                            {spec.sub && <span className="text-[9px] text-gray-400 mt-0.5">{spec.sub}</span>}
                        </div>
                    ))}
                </div>

                {/* Why Choose Card */}
                <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-orange-100 rounded-full">
                            <BadgeCheck className="h-4 w-4 text-orange-600" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-900">Other Key Highlights</h3>
                    </div>
                    <ul className="space-y-2 pl-2">
                        <li className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full" /> Vastu Compliant
                        </li>
                        <li className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full" /> Wheel Chair Friendly
                        </li>
                        <li className="text-xs text-blue-600 font-bold ml-3 cursor-pointer">...more</li>
                    </ul>
                </div>

                {/* Views Banner */}
                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <User className="h-4 w-4 text-blue-600" />
                    <p className="text-xs font-medium text-gray-700">
                        <span className="font-bold text-gray-900">2 people</span> viewed this property in last 24 hours
                    </p>
                </div>
            </div>

            {/* --- 5. PROPERTY DETAILS TABLE --- */}
            <div className="bg-white px-4 py-6 mb-2">
                <h3 className="text-base font-bold text-gray-900 mb-4">Property Details</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {property.details.map((item, i) => (
                        <div key={i}>
                            <p className="text-[10px] text-gray-500 mb-0.5">{item.label}</p>
                            <p className="text-xs font-bold text-gray-900">{item.value}</p>
                        </div>
                    ))}
                </div>
                <button className="text-xs font-bold text-gray-900 mt-4 flex items-center gap-1">
                    View all property details <ArrowLeft className="h-3 w-3 rotate-180" />
                </button>
            </div>

            {/* --- 6. FACILITIES --- */}
            <div className="bg-white px-4 py-6 mb-2">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-gray-900">Facilities</h3>
                    <button className="text-xs font-bold text-blue-600">View all (8)</button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                    {property.facilities.map((f, i) => (
                        <div key={i} className={`p-4 rounded-xl min-w-[100px] flex flex-col items-center justify-center gap-2 ${f.color} bg-opacity-20`}>
                            <f.icon className="h-6 w-6" />
                            <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">{f.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 7. ABOUT & CONTACT --- */}
            <div className="bg-white px-4 py-6 space-y-8">
                <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">About Property</h3>
                    <p className="text-sm font-bold text-gray-800 mb-1">Address: Model LIC Colony, Basaveshwara Nagar</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        3 BHK in Basaveshwara nagar near pavithra paradise good location. 3rd floor with lift and car parking.
                        <span className="text-primary font-bold ml-1">...read more</span>
                    </p>
                </div>

                {/* Dealer Card */}
                <div>
                    <h3 className="text-base font-bold text-gray-900 mb-4">Contact Dealer</h3>
                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                {property.dealer.avatar}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900">{property.dealer.name}</h4>
                                <p className="text-[10px] text-gray-500 line-clamp-1">{property.dealer.name} | +91-98xxxxxx</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-center border-t border-gray-100 pt-3 mb-3">
                            <div>
                                <p className="text-xs font-bold text-gray-900">{property.dealer.properties}</p>
                                <p className="text-[9px] text-gray-400">Properties Listed</p>
                            </div>
                            <div className="w-[1px] h-6 bg-gray-100" />
                            <div>
                                <p className="text-xs font-bold text-gray-900">{property.dealer.since}</p>
                                <p className="text-[9px] text-gray-400">Member Since</p>
                            </div>
                        </div>

                        <button className="w-full py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg mb-4">
                            View Complete Profile
                        </button>

                        {/* Lead Form Placeholder */}
                        <div className="space-y-3">
                            <input placeholder="Name" className="w-full text-xs font-medium border-b border-gray-200 py-2 focus:outline-none focus:border-primary" />
                            <input placeholder="Phone Number" className="w-full text-xs font-medium border-b border-gray-200 py-2 focus:outline-none focus:border-primary" />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 8. STICKY FOOTER --- */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
                {/* Nudge Banner */}
                <div className="bg-pink-50 text-pink-700 text-[10px] font-medium text-center py-1 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" />
                    7 people already contacted since last week
                </div>

                <div className="p-3 pb-safe-bottom flex items-center gap-3">
                    <button className="flex items-center gap-1 px-4 py-3 border border-green-500 text-green-600 bg-white rounded-xl text-xs font-bold shadow-sm flex-1 justify-center">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                    </button>
                    <button className="flex items-center gap-1 px-4 py-3 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/30 flex-[1.5] justify-center">
                        View Number
                    </button>
                    <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg">
                        <Phone className="h-5 w-5" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default PropertyDetailsPage;
