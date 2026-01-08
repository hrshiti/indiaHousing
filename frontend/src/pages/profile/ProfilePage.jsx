import React, { useState } from "react";
import { ArrowLeft, Edit2, MapPin, Phone, Mail, ChevronRight, LogOut, Settings, HelpCircle, FileText, Bell, Shield } from "lucide-react";
import { Avatar } from "@/components/common/Avatar";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProfileMenuItem = ({ icon: Icon, label, onClick, isDestructive = false }) => (
    <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
    >
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${isDestructive ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-600'}`}>
                <Icon className="h-5 w-5" />
            </div>
            <span className={`text-sm font-medium ${isDestructive ? 'text-red-600' : 'text-gray-900'}`}>{label}</span>
        </div>
        {!isDestructive && <ChevronRight className="h-4 w-4 text-gray-400" />}
    </button>
);

const ProfilePage = () => {
    const navigate = useNavigate();
    const user = {
        name: "Vally",
        phone: "+91 98765 43210",
        email: "vally@example.com",
        location: "Bangalore, India",
        image: "https://github.com/shadcn.png"
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-30">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                    <ArrowLeft className="h-5 w-5 text-gray-700" />
                </button>
                <span className="text-base font-bold text-gray-900">My Profile</span>
            </div>

            <div className="p-4 space-y-6">
                {/* Profile Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-primary/20 to-orange-500/20" />

                    <div className="relative mt-4 mb-3">
                        <Avatar src={user.image} size="xl" className="border-4 border-white shadow-md relative z-10" />
                        <button className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-sm border border-gray-100 z-20">
                            <Edit2 className="h-3 w-3 text-gray-600" />
                        </button>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> {user.location}
                    </p>

                    <div className="flex gap-2 mt-5 w-full">
                        <div className="flex-1 bg-blue-50 rounded-2xl p-3 flex flex-col items-center gap-1">
                            <span className="text-lg font-bold text-blue-700">12</span>
                            <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Listings</span>
                        </div>
                        <div className="flex-1 bg-orange-50 rounded-2xl p-3 flex flex-col items-center gap-1">
                            <span className="text-lg font-bold text-orange-700">48</span>
                            <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">Views</span>
                        </div>
                        <div className="flex-1 bg-green-50 rounded-2xl p-3 flex flex-col items-center gap-1">
                            <span className="text-lg font-bold text-green-700">5</span>
                            <span className="text-[10px] uppercase font-bold text-green-400 tracking-wider">Sold</span>
                        </div>
                    </div>
                </div>

                {/* Contact Info (Read Only) */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 p-2">
                    <div className="flex items-center gap-3 p-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <div className="flex-1 border-b border-gray-50 pb-1">
                            <p className="text-xs text-gray-400 font-medium">Mobile Number</p>
                            <p className="text-sm font-bold text-gray-900">{user.phone}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 font-medium">Email Address</p>
                            <p className="text-sm font-bold text-gray-900">{user.email}</p>
                        </div>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <ProfileMenuItem icon={Bell} label="Notifications" onClick={() => { }} />
                    <ProfileMenuItem icon={Settings} label="App Settings" onClick={() => { }} />
                    <ProfileMenuItem icon={Shield} label="Privacy & Security" onClick={() => { }} />
                    <ProfileMenuItem icon={HelpCircle} label="Help & Support" onClick={() => { }} />
                    <ProfileMenuItem icon={FileText} label="Terms & Conditions" onClick={() => { }} />
                </div>

                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <ProfileMenuItem icon={LogOut} label="Logout" isDestructive onClick={() => { }} />
                </div>

                <p className="text-center text-[10px] text-gray-400 font-medium">v1.0.0 • Made with ❤️ in India</p>
            </div>
        </div>
    );
};

export default ProfilePage;
