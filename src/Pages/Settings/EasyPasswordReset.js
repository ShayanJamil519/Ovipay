import React, { useState } from "react";
import Header from "./Header";
import { FiEye, FiEyeOff } from "react-icons/fi";

const EasyPasswordReset = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Header title="간편 비밀번호 재설정" showHamburger={false} />
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
                    <div className=" relative">
                        <input
                            type="number"
                            className="rounded-[12px] w-[70%] text-center text-[15px] py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none "
                            placeholder="인증번호"
                            value={"34322"}
                            // onChange={handleNumber}
                        />
                        <button className="bg-[#FED52A] w-fit rounded-[12px] text-[12px] font-medium py-[20px] px-7  relative right-12">
                            확인
                        </button>
                    </div>
                </div>
                {/* 4 Div */}
                <div>
                    <p className="font-bold text-[14px] mb-1">인증번호</p>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="간편 비밀번호"
                            className="rounded-[12px] w-full  py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none"
                            value={"abcde"}
                            // onChange={handleChange}
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {!showPassword ? (
                                <FiEyeOff
                                    className="text-[#adadad]"
                                    size={20}
                                />
                            ) : (
                                <FiEye size={20} className="text-[#adadad]" />
                            )}
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-2 text-center w-full">
                    <button
                        type="submit"
                        className="w-full bg-[#FED52A] font-semibold text-[17px] border-none text-[#272727] px-[85px] py-[12px] rounded-full hover:bg-[#f2ce3e]"
                    >
                        로그인
                    </button>
                </div>
            </form>
        </>
    );
};

export default EasyPasswordReset;
