import React, { useState } from "react";
import Header from "./Header";

const ChangePersonalInformation = () => {
    return (
        <>
            <Header title="개인정보 변경" showHamburger={false} />
            {/* Form */}
            <form className="pt-8 min-h-[80vh] relative  flex flex-col gap-6  w-[90%] mx-auto">
                {/* 1 Div */}
                <div>
                    <p className="font-bold text-[14px] mb-1">이름</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        className="rounded-[12px] text-[14px] w-full py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none"
                        value={"신지연"}
                        // onChange={handleChange}
                        required
                    />
                </div>
                {/* 2 Div */}
                <div className="">
                    <h2 className="font-bold text-[14px] mb-1">
                        전화번호 인증
                    </h2>

                    <div className="flex justiy-start items-center gap-2">
                        <input
                            type="number"
                            className="rounded-[12px] text-center text-[15px] w-[80px]  py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none"
                            value={"010"}
                            // onChange={handleDigit1}
                            placeholder="000"
                        />
                        <input
                            type="number"
                            className="rounded-[12px]  text-center text-[15px]  w-[80px]  py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none"
                            value={"010"}
                            // onChange={handleDigit1}
                            placeholder="000"
                        />
                        <input
                            type="number"
                            className="rounded-[12px]  text-center text-[15px]  w-[80px] py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none"
                            value={"010"}
                            // onChange={handleDigit1}
                            placeholder="000"
                        />
                    </div>
                </div>
                {/* 3 Div */}
                <div className="">
                    <p className="font-bold text-[14px] mb-1">인증번호</p>
                    <input
                        type="number"
                        className="rounded-[12px] text-center text-[15px] py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none relative"
                        placeholder="인증번호"
                        value={"34322"}
                        // onChange={handleNumber}
                    />
                    <button className="bg-[#FED52A] rounded-[12px] text-[12px] font-medium py-[20px] px-7  relative right-12">
                        확인
                    </button>
                </div>

                <div className="absolute bottom-2 text-center w-full">
                    <button
                        type="submit"
                        className="w-full bg-[#FED52A] font-semibold text-[18px] border-none text-[#272727] px-[85px] py-[12px] rounded-full hover:bg-[#f2ce3e]"
                    >
                        저 장
                    </button>
                </div>
            </form>
        </>
    );
};

export default ChangePersonalInformation;
