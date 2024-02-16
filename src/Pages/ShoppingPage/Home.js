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
import RecommendedProducts from "../../components/Global/RecommendedProducts";
import { Link } from "react-router-dom/cjs/react-router-dom";
import OtherCategories from "./OtherCategories";
import VerticalProduct from "./Components/VerticalProduct";
import HorizontalProduct from "./Components/HorizontalProduct";
import RecommendedProduct from "./Components/RecommendedProducts";

const Home = () => {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const options = ["1만원 미만", "1~2만원대", "3-4만원대", "5만원 이상"];
    const filters = ["전체", "가전제품", "식품", "욕실", "전자기기", "가구", "의류", "생활용품", "반려동물", "유아ㆍ아동", "캠핑ㆍ레저", "데코ㆍ식물", "뷰티"];
    const [selectedOption, setSelectedOption] = useState('1만원 미만');
    const [displayedProducts, setDisplayedProducts] = useState(6);

    const handleSeeMore = () => {
        setDisplayedProducts(displayedProducts + 6);
    };

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
    ];

    const secondProducts = [
        {
            id: 1,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 2,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 3,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 4,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 5,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 6,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 1,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 2,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 3,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 4,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 5,
            image: "/recommended__product__1.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 6,
            image: "/recommended__product__1.png",
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
                <div className="flex overflow-x-scroll items-center w-full px-3 mt-2 font-bold gap-x-2 gap-y-3">
                    {filters.map((filter, index) => (
                        <h6
                            onClick={() => setSelectedFilter(filter)}
                            className={`${
                                selectedFilter === filter
                                    ? "bg-[#FED52A]"
                                    : "bg-white text-[#828282] border"
                            } cursor-pointer min-w-[90px] text-center text-[14px] font-[400] px-3 py-2 rounded-[50px]`}
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
                            <HorizontalProduct product={product} />
                        ))}
                    </div>
                </div>

                <div className="h-[1px] bg-[#8d8d8d] w-full px-4" />

                {
                    selectedFilter ? 
                    <OtherCategories />
                    :
                    <>
                        {/* Vertical Products */}
                        <div className="w-full">
                            <h1 className="px-4 mt-6 text-[#464441] font-semibold">
                                금주의 인기상품
                            </h1>
                            <div className="flex flex-col space-y-4 px-4 pb-4 pt-3">
                                {firstProducts.map((product) => (
                                    <VerticalProduct product={product} />
                                ))}
                            </div>
                        </div>

                        {/* Products Three Per Row */}
                        <div className="max-w-full">
                            <h1 className="px-4 mt-2 text-[#464441] font-semibold">
                                가격대 별 추천상품
                            </h1>
                            <div className="flex px-4 justify-between mt-6">
                                {options.map((option) => (
                                    <span className={`text-[14px] ${selectedOption === option ? 'text-black font-[700]' : 'text-[#737373] font-[400]'} `} onClick={()=> setSelectedOption(option)}>
                                        {option}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-between gap-3 p-4">
                                {secondProducts.slice(0, displayedProducts).map((product) => (
                                    <RecommendedProduct product={product} />
                                ))}
                            </div>
                        </div>

                        {/* See More */}
                        <div className={`w-full px-4 ${displayedProducts > 6 && 'hidden'}`} onClick={handleSeeMore}>
                            <div className="flex gap-2 border border-[#C8C8C8] items-center justify-center py-[12px] rounded-[10px]">
                                <p className="text-[#737373] text-[14px]">더보기</p>
                                <img src="/arrow_down.svg" alt="" />
                            </div>
                        </div>

                        <RecommendedProducts />
                    </>
                }

            </div>

            <Footer address={"home"} />
        </>
    );
};

export default Home;
