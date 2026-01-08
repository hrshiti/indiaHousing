import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Building2, Home, Upload, Check, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: 1, title: "Basic Details" },
    { id: 2, title: "Location" },
    { id: 3, title: "Features" },
    { id: 4, title: "Photos" },
    { id: 5, title: "Pricing" }
];

const SelectionCard = ({ selected, onClick, icon: Icon, label }) => (
    <button
        onClick={onClick}
        className={cn(
            "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 gap-2 h-28",
            selected ? "border-primary bg-primary/5 text-primary" : "border-gray-100 bg-white text-gray-500 hover:bg-gray-50"
        )}
    >
        <Icon className={cn("h-8 w-8", selected ? "fill-primary/20" : "")} />
        <span className="text-xs font-bold">{label}</span>
    </button>
);

const PostPropertyPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        listingType: "Sell", // Sell, Rent, PG
        propertyType: "Apartment",
        bhk: "",
        furnishing: "",
        images: []
    });

    const handleNext = () => {
        if (currentStep < STEPS.length) setCurrentStep(prev => prev + 1);
        else {
            // Submit logic placeholder
            alert("Property Posted Successfully! (Mock)");
            navigate("/");
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
        else navigate(-1);
    };

    const progress = (currentStep / STEPS.length) * 100;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0 z-30">
                <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                    <ArrowLeft className="h-5 w-5 text-gray-700" />
                </button>
                <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {currentStep} of {STEPS.length}</span>
                    <span className="text-sm font-bold text-gray-900">{STEPS[currentStep - 1].title}</span>
                </div>
                <button className="text-sm font-bold text-red-500 p-2">Exit</button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-100 w-full">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 pb-24 overflow-y-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        {/* --- Step 1: Basics --- */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h2 className="text-lg font-bold">I want to...</h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        {["Sell", "Rent/Lease"].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setFormData({ ...formData, listingType: opt })}
                                                className={cn(
                                                    "py-3 rounded-xl border text-sm font-bold transition-all",
                                                    formData.listingType === opt
                                                        ? "bg-gray-900 text-white border-gray-900 shadow-md"
                                                        : "bg-white text-gray-600 border-gray-200"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h2 className="text-lg font-bold">Property Type</h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        <SelectionCard
                                            label="Apartment"
                                            icon={Building2}
                                            selected={formData.propertyType === "Apartment"}
                                            onClick={() => setFormData({ ...formData, propertyType: "Apartment" })}
                                        />
                                        <SelectionCard
                                            label="Independent House"
                                            icon={Home}
                                            selected={formData.propertyType === "Independent House"}
                                            onClick={() => setFormData({ ...formData, propertyType: "Independent House" })}
                                        />
                                        {/* Add more types as needed */}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* --- Step 2: Location --- */}
                        {currentStep === 2 && (
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-blue-900">Auto-detect Location</p>
                                        <p className="text-xs text-blue-700 mt-1">Tap to fetch your current GPS location for better accuracy.</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 mb-1 block">City</label>
                                        <Input placeholder="Enter City (e.g. Bangalore)" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 mb-1 block">Locality / Project</label>
                                        <Input placeholder="Search Locality..." icon={<MapPin className="h-4 w-4" />} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 mb-1 block">Detailed Address</label>
                                        <textarea className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px]" placeholder="House No, Street, Landmark..." />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* --- Step 3: Features --- */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h2 className="text-lg font-bold">Apartment Configuration</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map(bhk => (
                                            <button
                                                key={bhk}
                                                onClick={() => setFormData({ ...formData, bhk: bhk })}
                                                className={cn(
                                                    "px-4 py-2 rounded-full border text-sm font-medium transition-all",
                                                    formData.bhk === bhk
                                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                                                        : "bg-white text-gray-600 border-gray-200"
                                                )}
                                            >
                                                {bhk}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h2 className="text-lg font-bold">Furnishing Status</h2>
                                    <div className="grid grid-cols-3 gap-2">
                                        {["Unfurnished", "Semi-Furnished", "Fully-Furnished"].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setFormData({ ...formData, furnishing: opt })}
                                                className={cn(
                                                    "px-2 py-3 rounded-xl border text-[10px] sm:text-xs font-bold transition-all text-center leading-tight",
                                                    formData.furnishing === opt
                                                        ? "bg-primary/10 text-primary border-primary"
                                                        : "bg-white text-gray-600 border-gray-200"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900">Super Built-up Area (sq.ft)</label>
                                    <Input type="number" placeholder="e.g. 1500" />
                                </div>
                            </div>
                        )}

                        {/* --- Step 4: Photos --- */}
                        {currentStep === 4 && (
                            <div className="space-y-4">
                                <div className="border-2 border-dashed border-primary/30 bg-primary/5 rounded-2xl h-48 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-primary/10 transition-colors">
                                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <Camera className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-primary">Click to Upload Photos</p>
                                        <p className="text-xs text-gray-500 mt-1">Max 10 photos supported</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {/* Mock Uploaded Images */}
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden group">
                                            <img src={`https://images.unsplash.com/photo-${i === 1 ? '1600596542815-27b5d0d8f594' : i === 2 ? '1600607687939-ce8a6c25118c' : '1600566753190-17f0baa2a6c3'}?w=200`} className="w-full h-full object-cover" />
                                            <button className="absolute top-1 right-1 bg-black/50 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Check className="h-3 w-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* --- Step 5: Pricing --- */}
                        {currentStep === 5 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-bold text-gray-900 mb-1 block">Expected Price (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                                        <Input className="pl-8 text-lg font-bold" placeholder="0" type="number" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Price per sq.ft: ₹0</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="h-4 w-4 rounded text-primary focus:ring-primary" id="negotiable" />
                                    <label htmlFor="negotiable" className="text-sm font-medium text-gray-700">Price is Negotiable</label>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <label className="text-sm font-bold text-gray-900 mb-2 block">Maintenance (Monthly)</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                                        <Input className="pl-8" placeholder="Maintenance charges" type="number" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-bold text-gray-900 mb-1 block">Description</label>
                                    <textarea className="w-full p-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[120px]" placeholder="Tell us more about the property features..." />
                                </div>
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="bg-white border-t border-gray-100 p-4 pb-safe-bottom flex items-center justify-between sticky bottom-0 z-30">
                <div className="text-xs text-gray-400 font-medium">
                    {currentStep === STEPS.length ? "Ready to post?" : "Next step: " + STEPS[currentStep].title}
                </div>
                <Button
                    onClick={handleNext}
                    className="rounded-full px-8 shadow-lg shadow-primary/30"
                >
                    {currentStep === STEPS.length ? "Post Property" : "Continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};

export default PostPropertyPage;
