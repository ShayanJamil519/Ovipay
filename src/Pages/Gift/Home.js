import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import Footer from "./Footer";
import Header from "./Header";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import LocationModal from './Modals/LocationModal'
import HorizontalCard from "./Components/HorizontalCard";

const Home = () => {
        
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    const cards = [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
    ];

    // Array of different filters
    const filters = [
        { name: '생일', value: '' },
        { name: '부모님 선물', value: '' },
        { name: '부담없는 선물', value: '' },
        { name: '먹거리', value: '' },
        { name: '명품 선물', value: '' },
        { name: '키즈', value: '' },
        { name: '감성 선물', value: '' },
        { name: '상품권', value: '' },
        { name: '집들이', value: '' },
        { name: '교환권', value: '' },
        { name: '설 선물', value: '' },
        { name: '내 주변위치', value: '' },
    ];

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const products = [
        { id: 1, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 2, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 3, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
    ];

    return (
        <>
            <Header title="GIFT" />
            <div className="flex flex-col items-center w-full py-4">
                <div
                    className="flex items-center justify-center w-full hover:no-underline"
                >
                    <button className="w-[95%] flex items-center text-center font-bold text-sm rounded-xl text-black py-2.5 px-3 shadow-md mb-3 bg-[#FED52A] gap-x-1" onClick={()=> setIsOpen(true)}>
                        <FaLocationDot size={18} className="text-black" /> 이
                        곳을 터치하여 주소를 설정하세요!
                    </button>
                </div>
                
                {/* Search bar for items */}
                <FormGroup className="flex items-center justify-center w-full">
                    <CiSearch
                        size={40}
                        type="submit"
                        className="cursor-pointer bg-[#FED52A] z-10 absolute left-[3.8%] p-2 rounded-xl text-white"
                    />
                    <Input
                        type="text"
                        placeholder="GIFT로 마음을 나누세요...."
                        className="rounded-xl py-[25px] pl-14 w-[95%] text-gray-400 bg-[#ffffff] focus:outline-none "
                    />
                </FormGroup>

                {/* Filters */}
                <div className="flex flex-wrap items-center w-full px-3 mt-2 font-bold gap-x-2 gap-y-5">
                    {filters.map((filter, index) => (
                        <h6
                        key={index}
                        onClick={() => {
                            setSelectedCategory(filter.name);
                            handleSelectCategory(filter.name);
                        }}
                        className={`${
                            (selectedCategory === filter.name || index === 0)
                            ? 'bg-[#FED52A]'
                            : 'bg-white'
                        } cursor-pointer text-[10px] font-[700] text-center py-2 px-3 border rounded-[8px] shadow-md`}
                        >
                        {filter.name}
                        </h6>
                    ))}
                </div>

                <div className="overflow-x-auto max-w-full max-h-[300px]">
                    <div className="flex space-x-4 p-4">
                        {products.map((product) => (
                            <HorizontalCard product={product} />
                        ))}
                    </div>
                </div>

                <div className="h-[2px] w-[90%] bg-[#d1d1d1] px-4"></div>

                <div className="flex flex-col items-center justify-center w-full mt-4 px-3">

                    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-4">
                        {cards.map((item) => (
                            <Link
                                to="/gift/gift-product-details"
                                key={item.id}
                                className={`flex flex-col px-4 justify-end py-3 shadow-inner gap-y-2 bg-[#C4C4C4] border rounded-3xl h-[200px] ${item.id % 2 === 0 ? " mt-0" : "mt-6"}`}
                                style={{background: "linear-gradient(2.5deg, #000000 -47.86%, rgba(0, 0, 0, 0) 100%)"}}
                            >
                                <p className="text-[14px] font-[600] text-white">기프티콘 테스트</p>
                                <p className="text-gray-100">치킨</p>
                            </Link>
                        ))}
                    </div>
                    
                </div>
            </div>

            {isOpen && <LocationModal isOpen={isOpen} setIsOpen={setIsOpen} />}
            <Footer address={"home"} />
        </>
    );
};

export default Home;
