import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import RecommendedProducts from "../Global/RecommendedProducts";
import GiftLikeThis from "./GiftLikeThis";

const Index = () => {

    const firstProducts = [
        { id: 1, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 2, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 3, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 4, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 5, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
    ];

    const [selected, setSelected] = useState(0);

    return (
        <div className="relative h-full">
            <Header />

            <HeroSection />
            <div className="bg-[#FBFBFB]">
                <RecommendedProducts />
                <GiftLikeThis />

                <div>
                    <h1 className="px-4">금주의 인기상품</h1>
                    <div className="flex w-full justify-between items-center px-4">
                        <div className="flex gap-4 mt-3">
                            <p className={`${selected === 0 ? 'text-[#464441] border-b-2 border-[#FED52a]' : 'text-[#C3C3C3]' }`} onClick={()=> setSelected(0)}>쇼핑</p>
                            <p className={`${selected === 1 ? 'text-[#464441] border-b-2 border-[#FED52a]' : 'text-[#C3C3C3]'} `} onClick={()=> setSelected(1)}>GIFT</p>
                        </div>
                        <p className="mt-3 text-[12px] text-[#818181]">{"더보기 >"}</p>
                    </div>
                    <div className="flex flex-col space-y-4 px-4 pt-3 bg-white">
                        {firstProducts.map((product, index) => (
                            <div key={product.id} className={`flex ${index+1 !== firstProducts.length && 'border-b'} pb-3`}>
                                {/* Product Image */}
                                <div className="flex-shrink-0 w-36 mr-4 relative">
                                    <img src={product.image} alt={product.title} className="w-full h-36 object-cover rounded-lg" />
                                    <div className={`absolute top-2 left-2 ${ index > 2 ? 'bg-[#B1B1B1]' : 'bg-[#FED52A]'} text-white px-2 rounded-[5px]`}>
                                        <span className="text-[14px] font-[900]">{product.id}</span>
                                    </div>
                                </div>
                                {/* Product Information */}
                                <div className="flex items-start flex-col justify-start w-full h-full">
                                    <p className="text-[11px] text-[#8D8D8D] font-[400]">{product.title}</p>
                                    <p className="text-[14px] text-[#464441] font-[400]">{product.description}</p>
                                    <p className="text-[18px] font-[900] mt-2">{product.price} <span className="font-[300]">원</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="mb-[140px]"></div>

            <Footer />
        </div>
    );
};

export default Index;
