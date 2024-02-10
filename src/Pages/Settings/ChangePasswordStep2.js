import React, { useState } from "react";
import Header from "./Header";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePasswordStep2 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <>
            <Header title="비밀번호 변경" showHamburger={false} />
            {/* Form */}
            <form className="pt-8 min-h-[80vh] relative  flex flex-col gap-6  w-[90%] mx-auto">
                {/* 1 Div */}
                <div>
                    <p className="font-bold text-[14px] mb-1">
                        새 비밀번호 입력
                    </p>
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

                {/* 2 Div */}
                <div>
                    <p className="font-bold text-[14px] mb-1">
                        비밀번호 다시 입력
                    </p>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="password"
                            placeholder="간편 비밀번호"
                            className="rounded-[12px] w-full  py-3 px-3 border-[1px] border-[#D4D4D4] bg-[#f9f8f8] focus:outline-none"
                            value={"abcde"}
                            // onChange={handleChange}
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        >
                            {!showConfirmPassword ? (
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
                        className="w-full bg-[#FED52A] font-semibold text-[18px] border-none text-[#272727] px-[85px] py-[12px] rounded-full hover:bg-[#f2ce3e]"
                    >
                        완 료
                    </button>
                </div>
            </form>
        </>
    );
};

export default ChangePasswordStep2;
