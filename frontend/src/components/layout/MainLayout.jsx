import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import BottomNav from './BottomNav';

const MainLayout = () => {
    // Lenis Smooth Scroll Setup
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50/50">
            {/* Desktop Header Placeholder - Hidden on mobile */}
            <header className="hidden md:flex sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur items-center h-16 px-6">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    IndiaHousing
                </span>
                <nav className="ml-auto flex gap-6">
                    <a href="/" className="text-sm font-medium hover:text-primary">Home</a>
                    <a href="/search" className="text-sm font-medium hover:text-primary">Buy</a>
                    <a href="/sell" className="text-sm font-medium hover:text-primary">Sell</a>
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-md mx-auto md:max-w-7xl md:px-6 pb-20 md:pb-6">
                {/* 
                    Mobile-First Wrapper: 
                    On mobile, we center content and limit width slightly to mimic app-like feel if on desktop, 
                    but usually full width. 
                 */}
                <Outlet />
            </main>

            {/* Mobile Bottom Navigation */}
            <BottomNav />
        </div>
    );
};

export default MainLayout;
