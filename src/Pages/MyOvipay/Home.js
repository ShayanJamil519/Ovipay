import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import FilterModal from "./FilterModal";

const filters = [
    { name: "전체", value: "" },
    { name: "1주일", value: "" },
    { name: "1개월", value: "" },
    { name: "6개월", value: "" },
    { name: "1년", value: "" },
];

const priceData = [
    {
        description: "kkwiw도깽",
        date: "2024..01.02 / 16:42",
        price: "+ 1,000 원",
        priceDesc: "회원가입 적립",
    },
    {
        description: "롱구스밥버거",
        date: "2024..01.02 / 16:42",
        price: "- 6,700 원",
        priceDesc: "포인트 사용",
    },
    {
        description: "포인트 충전",
        date: "2024..01.02 / 16:42",
        price: "+ 50,000 원",
        priceDesc: "포인트 충전",
    },
    {
        description: "포인트 출금",
        date: "2024..01.02 / 16:42",
        price: "- 20,000 원",
        priceDesc: "포인트 출금",
    },
    {
        description: "박정호 포인트 선물",
        date: "2024..01.02 / 16:42",
        price: "- 10,000 원",
        priceDesc: "포인트 선물",
    },
    {
        description: "포인트 충전",
        date: "2024..01.02 / 16:42",
        price: "+ 50,000 원",
        priceDesc: "환불",
    },
];

const MyOvipayPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [selectedFilter, setSelectedFilter] = useState("추천인 적립 내역");

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <Header title="MY Ovipay" showHamburger={true} />

            <div className="w-[90%] mx-auto pt-3 ">
                {/* Bar Code Container */}
                <div className="rounded-[20px] bg-[#fed52a] w-full shadow pb-3 pt-4 px-6">
                    <div className="relative w-full  py-3 bg-white border rounded-lg">
                        <div className="px-4  flex justify-center items-center bg_barcode">
                            <button className="bg-[#fed52a] shadow-sm text-[13px] py-2.5  px-4 font-bold rounded-[8px] ">
                                바코드 보기
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full  mt-8 text-black/75">
                        <div className="flex items-center ">
                            <img src="/ovipay__logo__small.svg" alt="logo" />
                            <p className="font-medium text-[14px]">OviPay</p>
                        </div>
                        <h5 className="text-[25px] text-[#292929] font-bold">
                            100,682 P
                        </h5>
                    </div>
                </div>
                {/* Links Container */}
                <div className="flex items-center mt-4 mb-4 justify-end w-full gap-x-2">
                    <Link
                        style={{
                            boxShadow: "0px 4px 4px 0px #0000001F",
                        }}
                        to="/charge/bar-input"
                        className="hover:no-underline hover:text-[#fed52a] py-3 w-1/3 border-[1px] border-[#FED52A] rounded-[15px] flex justify-center items-center gap-1"
                    >
                        {" "}
                        <img src="/myovipay__charge.svg" alt="logo" />
                        <p className="text-[14px] font-bold text-[#525252]">
                            충 전
                        </p>
                    </Link>
                    <Link
                        style={{
                            boxShadow: "0px 4px 4px 0px #0000001F",
                        }}
                        to="/my-ovipay/withdrawal"
                        className="hover:no-underline hover:text-[#fed52a] py-3 w-1/3 border-[1px] border-[#FED52A] rounded-[15px] flex justify-center items-center gap-1"
                    >
                        {" "}
                        <img
                            src="/solar_cash-out-bold.svg"
                            alt="logo"
                            className="w-[18px] h-[18px]"
                        />
                        <p className="text-[14px] font-bold text-[#525252]">
                            출 금
                        </p>
                    </Link>
                    <Link
                        style={{
                            boxShadow: "0px 4px 4px 0px #0000001F",
                        }}
                        to="/my-ovipay/gift-points"
                        className="hover:no-underline hover:text-[#fed52a] py-3 w-1/3 border-[1px] border-[#FED52A] rounded-[15px] flex justify-center items-center gap-1"
                    >
                        <img
                            src="/gift__icon.svg"
                            alt="logo"
                            className="w-[16px] h-[15px] mb-[1px]"
                        />
                        <p className="text-[14px] font-bold text-[#525252]">
                            포인트 선물
                        </p>
                    </Link>
                </div>
            </div>
            {/* Horizontal Bar */}
            <div
                style={{
                    boxShadow: "0px 2px 4px 0px #0000001A inset",
                }}
                className="w-full h-[8px] bg-[#F2F3F7]"
            ></div>
            {/* ======== */}
            <div className="w-[90%] mx-auto pt-3 pb-10">
                {/* Filters */}
                <div className="flex flex-wrap items-center w-full  mt-2 font-bold gap-x-2 ">
                    {filters.map((filter, index) => (
                        <h6
                            key={index}
                            onClick={() => {
                                setSelectedCategory(filter.name);
                                handleSelectCategory(filter.name);
                            }}
                            className={`${
                                selectedCategory === filter.name
                                    ? "bg-[#FED52A]"
                                    : "bg-white text-[#828282] border-[1px] border-[#D2D2CE]"
                            } cursor-pointer text-[10px] grid place-items-center h-[35px] w-[57px] rounded-[50px] shadow-md`}
                        >
                            {filter.name}
                        </h6>
                    ))}
                </div>

                {/* Select Container */}
                <div className="w-full mt-3 flex justify-end items-center">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="py-2 px-3 w-fit flex justify-center items-center gap-2 rounded-[50px] bg-[#F5F5F5]"
                    >
                        <p className="text-[14px]">{selectedFilter}</p>
                        <img src="/myovipay__downarrow.svg" />
                    </div>
                </div>

                {/* Price Details */}
                <div className="mt-6 w-full flex flex-col gap-3">
                    {priceData.map((item, index) => (
                        <div key={index} className="px-3 py-2 w-full">
                            <div className="flex justify-between items-center mb-[2px]">
                                <p className="font-semibold">
                                    {item.description}
                                </p>
                                <p
                                    className={`font-semibold ${
                                        index % 2 === 0
                                            ? "  text-[#000E88]"
                                            : "text-[#FF0000]"
                                    } `}
                                >
                                    {item.price}
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-[#C5C5C7] text-[12px]">
                                    {item.date}
                                </p>
                                <p className="font-semibold  text-[13px] text-[#565656]">
                                    {item.priceDesc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <FilterModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />
            )}
        </>
    );
};

export default MyOvipayPage;
