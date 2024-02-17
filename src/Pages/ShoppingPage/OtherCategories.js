import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules

const OtherCategories = () => {
    
    const [liked, setLiked] = useState();

    const firstProducts = [
        {
            id: 1,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 2,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 3,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 4,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 5,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 6,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
    ];

    return (
        <>
                <div className="flex flex-wrap justify-between gap-3 p-4">
                        {firstProducts.map((product) => (
                            <div
                                to="/shopping/product-details"
                                key={product.id}
                                className="relative flex-shrink-0 w-[45%] mb-4"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-36 object-cover rounded-xl"
                                />
                                <div className="absolute top-2 right-2" onClick={() => setLiked(product.id)}>
                                    <img
                                        src={`${liked === product.id ? '/heart_filled.svg' : '/heart.svg'}`}
                                        alt="Heart"
                                        className="w-5 h-5 z-50"
                                    />
                                </div>
                                <div className="p-2">
                                    <p className="text-[14px] font-semibold mb-1">
                                        <span className="text-[#F6C700] mr-2">
                                            {product.discount}
                                        </span>
                                        {product.price}
                                    </p>
                                    <p className="text-[11px] text-[#8D8D8D] font-[400]">
                                        {product.title}
                                    </p>
                                    <p className="text-[11px] text-[#464441] font-[400]">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
        </>
    );
};

export default OtherCategories;
