import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import Footer from "./Footer";
import Header from "./Header";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const AffiliatedStores = () => {
        
    const [selectedCategory, setSelectedCategory] = useState(null);
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
        { name: '치킨', value: '' },
        { name: '분식', value: '' },
        { name: '키즈', value: '' },
        { name: '상품권', value: '' },
        { name: '부담없는 선물', value: '' },
        { name: '먹거리', value: '' },
        { name: '명품 선물', value: '' },
        { name: '감성 선물', value: '' },
    ];

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center w-full py-4">
                
                {/* Search bar for items */}
                <FormGroup className="flex items-center justify-center w-full px-3">
                    <CiSearch
                        size={40}
                        type="submit"
                        className="cursor-pointer bg-[#FED52A] z-10 absolute left-[9%] p-2 rounded-xl text-white"
                    />
                    <Input
                        type="text"
                        placeholder="찾으시는 가게가 있으신가요?"
                        className="rounded-xl py-[25px] pl-14 border-[#FED52A] w-[95%] text-gray-400 bg-[#ffffff] focus:outline-none "
                    />
                </FormGroup>

                {/* Filters */}
                <div className="flex flex-wrap items-center w-full px-4 mt-2 font-bold gap-x-3 gap-y-4">
                    {filters.map((filter, index) => (
                        <h6
                        key={index}
                        onClick={() => {
                            setSelectedCategory(filter.name);
                            handleSelectCategory(filter.name);
                        }}
                        className={`${
                            selectedCategory === filter.name
                            ? 'bg-[#FED52A]'
                            : 'bg-white'
                        } cursor-pointer min-w-[90px] text-[10px] font-[700] text-center py-2 px-3 border rounded-[12px] shadow-md`}
                        >
                        {filter.name}
                        </h6>
                    ))}
                </div>

                <div className="flex justify-between w-full px-4 mt-4">
                    <p className="text-[#464441] font-[700]">치킨 가맹점</p>
                    <p className="text-[#7D7D7D] text-[13px] font-[400]">거리순</p>
                </div>

                <div className="flex flex-col items-center justify-center w-full mt-4 gap-y-3">

                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {cards.map((item) => (
                            <Link
                                to="/gift/gift-product-details"
                                key={item.id}
                                className={`flex flex-col px-4 justify-end py-3 shadow-inner gap-y-2 bg-[#C4C4C4] rounded-3xl h-[200px] ${item.id % 2 === 0 ? " mt-0" : "mt-6"}`}
                            >
                                <h1 className="text-[14px] font-[600] text-white">기프티콘 테스트</h1>
                                <p className="text-gray-100">치킨</p>
                            </Link>
                        ))}
                    </div>
                    
                </div>
            </div>

            <Footer address={"home"} />
        </>
    );
};

export default AffiliatedStores;
