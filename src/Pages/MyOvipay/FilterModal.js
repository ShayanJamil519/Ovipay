import React, { useState, useRef } from "react";

const filterValues = [
    {
        text: "전체내역",
    },
    {
        text: "사용내역만 보기",
    },
    {
        text: "추천인 적립 내역",
    },
    {
        text: "충전내역만 보기",
    },
    {
        text: "출금내역만 보기",
    },
    {
        text: "선물내역만 보기",
    },
];

const FilterModal = ({
    isOpen,
    setIsOpen,
    selectedFilter,
    setSelectedFilter,
}) => {
    const popupRef = useRef();

    const handleClosePopup = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div
            className={`${
                isOpen ? "fixed" : "hidden"
            } bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full`}
            onClick={handleClosePopup}
        >
            <div
                ref={popupRef}
                className={`fixed bottom-0 left-0 right-0 overflow-y-scroll bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-3xl border-2 ${
                    isOpen ? "translate-y-0" : "translate-y-full"
                }`}
                style={{ maxHeight: "85vh" }}
            >
                <div className="bg-white rounded-t-xl px-6 py-4 shadow-xl">
                    <div className=" flex justify-between items-center">
                        <h1 className="font-bold text-[19px]">정렬</h1>
                        <img
                            src="/settings__cross.svg"
                            alt="logo"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>

                    <div className="flex flex-col gap-6 mb-10 mt-6">
                        {filterValues.map((item, index) => (
                            <div
                                onClick={() => setSelectedFilter(item.text)}
                                className="flex justify-between items-center"
                            >
                                <p
                                    className={`${
                                        selectedFilter === item.text
                                            ? "text-[#EC9D05]"
                                            : "text-[#B9B9B9]"
                                    } text-[17px]`}
                                >
                                    {item.text}
                                </p>
                                {selectedFilter === item.text && (
                                    <img
                                        src="/myovipay__check.svg"
                                        alt="logo"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-[#FED52A] font-semibold py-2 px-3 bottom-1 rounded-[30px]  text-[18px]"
                    >
                        닫 기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
