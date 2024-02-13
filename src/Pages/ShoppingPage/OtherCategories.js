import React, { useState } from "react";
import Header from "./Header";
import { FormGroup, Input } from "reactstrap";
import { CiSearch } from "react-icons/ci";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom";

const OtherCategories = () => {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const filters = ["전체", "가전제품", "식품", "욕실", "전자기기"];
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
            <Header title="쇼 핑" showHamburger={true} />
            
            <div className="flex flex-col items-center w-full py-4">
                {/* Search bar for items */}
                <FormGroup className="flex items-center justify-center w-full">
                    <CiSearch
                        size={40}
                        type="submit"
                        className="cursor-pointer bg-[#FED52A] z-10 absolute left-[3.8%] p-2 rounded-xl text-white"
                    />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="rounded-xl py-[25px] pl-14 w-[95%] text-[#D8D4CE] bg-[#ffffff] focus:outline-none "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </FormGroup>

                {/* Filters */}
                <div className="flex overflow-x-scroll items-center w-full px-3 mt-2 font-bold gap-x-4 gap-y-3">
                    {filters.map((filter) => (
                        <h6
                            onClick={() => setSelectedFilter(filter)}
                            className={`${
                                selectedFilter === filter
                                    ? "bg-[#FED52A]"
                                    : "bg-white text-[#828282] border"
                            } cursor-pointer min-w-[97px] text-center py-2 rounded-[50px]`}
                        >
                            {filter}
                        </h6>
                    ))}
                </div>

                {/* Horizontal Products */}
                <div className="overflow-x-auto max-w-full">
                    <h1 className="px-4 mt-8 text-[#464441] text-[16px] font-semibold">
                        신지연님을 위한 추천 상품
                    </h1>
                    <div className="flex space-x-4 p-4">
                        {firstProducts.map((product) => (
                            <Link
                                to="/shopping/product-details"
                                key={product.id}
                                className="relative flex-shrink-0 w-36"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-36 object-cover rounded-lg"
                                />
                                <div className="absolute top-2 right-2" onClick={() => setLiked(product.id)}>
                                    <img
                                        src={`${liked === product.id ? '/heart_filled.svg' : '/heart.svg'}`}
                                        alt="Heart"
                                        className="w-6 h-6"
                                    />
                                </div>
                                <div className="p-2">
                                    <p className="text-[14px] font-semibold mb-1">
                                        <span className="text-[#F6C700] mr-2">
                                            {product.discount}
                                        </span>
                                        {product.price}
                                    </p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                                        {product.title}
                                    </p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                                        {product.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="h-[1px] bg-[#8d8d8d] w-full px-4" />

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
                                        className="w-6 h-6 z-50"
                                    />
                                </div>
                                <div className="p-2">
                                    <p className="text-[14px] font-semibold mb-1">
                                        <span className="text-[#F6C700] mr-2">
                                            {product.discount}
                                        </span>
                                        {product.price}
                                    </p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                                        {product.title}
                                    </p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>

            </div>

            <Footer address={"home"} />
        </>
    );
};

export default OtherCategories;
