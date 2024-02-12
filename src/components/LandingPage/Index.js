import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import RecommendedProducts from "../Global/RecommendedProducts";
import GiftLikeThis from "./GiftLikeThis";

const Index = () => {
    return (
        <div className="relative h-full">
            <Header />

            <HeroSection />
            <div className="bg-[#FBFBFB]">
                <RecommendedProducts />
                <GiftLikeThis />
            </div>

            <div className="mb-[140px]"></div>

            <Footer />
        </div>
    );
};

export default Index;
