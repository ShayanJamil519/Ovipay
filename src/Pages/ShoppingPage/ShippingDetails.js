import React, { useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FilterModal from "../Gift/Modals/FilterModal";

const cardData = [
    {
        id: 1,
        expiry: "기간 만료 30일 남음",
        category: "매장명",
        description: "안심한우 1++등급 ‘투뿔 스...",
        price: "149,000원",
    },
    {
        id: 2,
        expiry: "기간 만료 30일 남음",
        category: "매장명",
        description: "안심한우 1++등급 ‘투뿔 스...",
        price: "149,000원",
    },
];

export default function Shipping() {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Header title="MY Shopping" showHamburger={true} />

            <div className="px-3">
                {/* This div is for input search-bar */}
                <div className="flex justify-between my-4 rounded-xl">
                    <div className="rounded-xl flex  gap-x-2 items-center px-3 py-2 w-full bg-[#f5f6f8] mt-2">
                        <PiMagnifyingGlass
                            size={30}
                            className="text-gray-300 text-start"
                        />
                        <input
                            placeholder="주문내역 검색"
                            className="text-[14px] bg-transparent"
                        />
                    </div>

                    <button onClick={() => setIsOpen(true)} className=" ml-2 w-[60px] flex items-center justify-center h-[50px] bg-[#fed52a] rounded-xl mt-2">
                        <img src="/setting.svg" alt=""
                            className="h-5"
                        />
                    </button>
                </div>

                <div className="flex gap-2 text-[11px] font-[400]">
                    <span>현재 설정된 필터:</span>
                    <span className="text-[#208AC5]">전체 / 1주일 / 전체</span>
                </div>

                {/* Save History */}
                {/* This div is for card */}
                <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="px-2 w-full text-[#464441] text-[16px] font-[500]">주문내역</h1>
                    <div className="mb-2 flex items-center w-full mt-3">
                        <img src="/dot.svg" alt="" className="mr-2" />
                        <h1 className="text-[#303030] w-full text-[16px] font-[500]">쇼핑</h1>
                    </div>

                    <div className="w-full flex items-center flex-col">
                        {cardData.map((card) => (
                            <div
                                key={card.id}
                                className="w-[98%] rounded-xl shadow-md flex gap-x-3 p-3 mt-4 bg-white"
                                style={{boxShadow: '0px 2px 48px 0px #0000000A'}}
                            >
                                <img src="/product.png" alt="" />
                                <div className="w-full mt-2">
                                    <p className="text-sm text-[#8D8D8D]">
                                        {card.category}
                                    </p>
                                    <p className="text-sm text-[#464441] mb-2">
                                        {card.description}
                                    </p>
                                    <h6 className="text-[18px] font-[900] text-black">
                                        {card.price}
                                    </h6>
                                    <div className="flex items-end justify-end w-full mt-3 gap-1">
                                        <button
                                            className="bg-[#F2F2F2] px-3 text-[10px] font-[700] py-1 rounded-[50px]"
                                            onClick={() =>
                                                history.push(
                                                    "/shopping/order-details"
                                                )
                                            }
                                        >
                                            상세내역
                                        </button>
                                        <button
                                            className="bg-[#FED52A] px-3 text-[10px] font-[700] py-1 rounded-[50px]"
                                            onClick={() =>
                                                history.push(
                                                    "/shopping/delivery-tracking"
                                                )
                                            }
                                        >
                                            배송조회
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* See More */}
                <div className="w-full mt-4 pb-8">
                    <div className="flex gap-2 border border-[#C8C8C8] items-center justify-center py-3 rounded-[10px]">
                        <p className="text-[#737373] text-[14px]">더보기</p>
                        <img src="/arrow_down.svg" alt="" />
                    </div>
                </div>

                {/* This div is for card */}
                <div className="flex flex-col items-center justify-center pt-8 border-t">
                    <div className="mb-2 flex items-center w-full">
                        <img src="/dot.svg" alt="" className="mr-2" />
                        <h1 className="w-full text-[#464441] text-[16px]">배송완료내역</h1>
                    </div>
                    <h1 className="text-[#E3BB17] w-full mt-3 font-[600] text-[15px]">
                        2024. 01. 20
                    </h1>

                    <div className="w-full flex items-center flex-col">
                        {cardData.map((card) => (
                            <div
                                key={card.id}
                                className="w-[98%] rounded-xl shadow-md flex gap-x-3 p-3 mt-3 mx-3 bg-white"
                                style={{boxShadow: '0px 2px 48px 0px #0000000A'}}
                            >
                                <img src="/product.png" alt="" />
                                <div className="w-full mt-2">
                                    <p className="text-sm text-[#8D8D8D]">
                                        {card.category}
                                    </p>
                                    <p className="text-sm text-[#464441] mb-2">
                                        {card.description}
                                    </p>
                                    <h6 className="text-[18px] font-[900] text-black">
                                        {card.price}
                                    </h6>
                                    <Link
                                        to="/shopping/order-details"
                                        className="flex flex-col items-end justify-center w-full mt-3"
                                    >
                                        <button className="bg-[#F2F2F2] px-3 text-sm py-1 rounded-xl">
                                            상세내역
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* See More */}
                <div className="w-full mt-4">
                    <div className="flex gap-2 border border-[#C8C8C8] items-center justify-center py-3 rounded-[10px]">
                        <p className="text-[#737373] text-[14px]">더보기</p>
                        <img src="/arrow_down.svg" alt="" />
                    </div>
                </div>
            </div>

            {isOpen && <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />}

            <Footer address={"account"} />
        </>
    );
}
