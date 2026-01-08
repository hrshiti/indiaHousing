import React from "react";
import MobileHeader from "@/components/layout/MobileHeader";
import HeroGreeting from "@/components/modules/home/HeroGreeting"; // Renamed
import StickySearchBar from "@/components/modules/home/StickySearchBar"; // New
import CategoriesGrid from "@/components/modules/home/CategoriesGrid";
import FeaturedCarousel from "@/components/modules/home/FeaturedCarousel";
import { SectionHeader, HorizontalScrollList, ProjectCard } from "@/components/modules/home/HomeSections";
import PromoBanner from "@/components/modules/home/PromoBanner";

const HomePage = () => {
    // Data for various sections
    const handpicked = [
        { id: 1, title: "Prestige City", price: "₹85 L", loc: "Sarjapur", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400", label: "Best Seller" },
        { id: 2, title: "Godrej Woods", price: "₹1.2 Cr", loc: "Whitefield", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", label: "New Phase" },
        { id: 3, title: "Brigade Utopia", price: "₹65 L", loc: "Varthur", img: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=400", label: "Hot" },
    ];

    const upcoming = [
        { id: 1, title: "Total Environment", price: "₹2.5 Cr", loc: "Hennur", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", label: "Launching Soon" },
        { id: 2, title: "Sobha Dream", price: "₹95 L", loc: "Panathur", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400", label: "Pre-launch" },
    ];

    const plots = [
        { id: 1, title: "Sunny Plots", price: "₹2500/sqft", loc: "Devanahalli", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400" },
        { id: 2, title: "Green Valley", price: "₹1800/sqft", loc: "Mysore Rd", img: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=400" },
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 pb-24 relative overflow-auto"> {/* Changed overflow-hidden to auto to allow body scroll behavior if needed, or keeping default document scroll */}
            {/* Subtle Background Gradient Mesh */}
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

            {/* 1. Header (Sticky by default in specific component, but let's ensure z-index stack) */}
            <MobileHeader />

            {/* 2. Main Content */}
            <main className="relative z-10 flex flex-col gap-0"> {/* gap-0 removes all flex gaps; we control spacing manually */}

                <HeroGreeting user={{ name: "Vally" }} />

                {/* Sticky Search Bar */}
                <StickySearchBar />

                {/* Categories (Zero Margin Top to pull it close to search) */}
                <div className="mt-2">
                    <CategoriesGrid />
                </div>

                {/* Main Banner (Small margin top) */}
                <div className="mt-1">
                    <FeaturedCarousel />
                </div>

                {/* --- Content Sections (Standardized Spacing) --- */}
                <div className="space-y-4 mt-2">
                    {/* Handpicked Residential Projects */}
                    <section>
                        <SectionHeader title="Handpicked Residential Projects" subtitle="Curated just for you" />
                        <HorizontalScrollList>
                            {handpicked.map(item => (
                                <ProjectCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    location={item.loc}
                                    price={item.price}
                                    image={item.img}
                                    label={item.label}
                                    type="large"
                                />
                            ))}
                        </HorizontalScrollList>
                    </section>

                    {/* Banner Ad 1 */}
                    <PromoBanner
                        title="Sell Faster"
                        subtitle="Get verified leads instantly"
                        cta="Post Free Ad"
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
                        color="bg-gradient-to-r from-blue-600 to-blue-400"
                    />

                    {/* Upcoming Projects */}
                    <section>
                        <SectionHeader title="Upcoming Projects" subtitle="Be the first to book" />
                        <HorizontalScrollList>
                            {upcoming.map(item => (
                                <ProjectCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    location={item.loc}
                                    price={item.price}
                                    image={item.img}
                                    label={item.label}
                                />
                            ))}
                        </HorizontalScrollList>
                    </section>

                    {/* Plots & Lands */}
                    <section>
                        <SectionHeader title="Buy Plots & Land" subtitle="Great investment opportunities" />
                        <HorizontalScrollList>
                            {plots.map(item => (
                                <ProjectCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    location={item.loc}
                                    price={item.price}
                                    image={item.img}
                                />
                            ))}
                        </HorizontalScrollList>
                    </section>

                    {/* Banner Ad 2 */}
                    <PromoBanner
                        title="Home Loans"
                        subtitle="Interest rates start @ 8.5%"
                        cta="Check Eligibility"
                        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
                        color="bg-gradient-to-r from-orange-500 to-red-500"
                    />
                </div>

            </main>
        </div>
    );
};

export default HomePage;
