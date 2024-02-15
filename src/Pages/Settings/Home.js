import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

const Home = () => {
    return (
        <>
            <Header title="마이페이지" showHamburger={true} />

            <div className="w-[90%] mx-auto pt-3 ">
                {/* Logo Container */}
                <div className="flex mb-3 pl-2 items-center justify-start gap-2  text-black/70 t  ">
                    <Link to="/">
                        <img className="w-[60px] " src={logo} alt="logo" />
                    </Link>
                    <div className="flex flex-col items-start justify-center  gap-y-1">
                        <h6 className="cursor-pointer font-bold text-[#373535]  text-[17px]  hover:text-[#fed52a]  ">
                            오비페이와 함께
                        </h6>
                        <h6 className="cursor-pointer text-[15px] font-bold text-[#737373] hover:text-[#fed52a]  ">
                            선지연 고객님
                        </h6>
                    </div>
                </div>

                {/* Bar Code Container */}
                <div className="rounded-[20px] bg-[#fed52a] w-full shadow pb-3 pt-4 px-6">
                    <div className="relative w-full  py-3 bg-white border rounded-lg">
                        <div className="px-4  flex justify-center items-center bg_barcode">
                            <button className="bg-[#fed52a] shadow-sm text-[13px] py-2.5  px-4 font-bold rounded-[8px] ">
                                바코드 보기
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center mt-2 justify-end w-full gap-x-2">
                        <Link
                            to="/my-ovipay"
                            className="hover:no-underline hover:text-[#fed52a]"
                        >
                            {" "}
                            <div className="flex items-center px-2 py-[7px] bg-white rounded-[8px] gap-x-2">
                                <img src="/charge.svg" alt="logo" />
                                <p className="text-[10px] font-bold text-[#525252]">
                                    충 전
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/charge/input-form"
                            className="hover:no-underline hover:text-[#fed52a]"
                        >
                            {" "}
                            <div className="flex items-center px-2 py-[7px] bg-white rounded-[8px] gap-x-2">
                                <img
                                    src="/solar_cash-out-bold.svg"
                                    alt="logo"
                                />
                                <p className="text-[10px] font-bold text-[#525252]">
                                    출 금
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/charge/confirm-form"
                            className="hover:no-underline hover:text-[#fed52a]"
                        >
                            <div className="flex items-center px-2 py-[7px] bg-white rounded-[8px] gap-x-2">
                                <img
                                    src="/gift__icon.svg"
                                    alt="logo"
                                    className=""
                                />
                                <p className="text-[10px] font-bold text-[#525252]">
                                    포인트 선물
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center justify-between w-full  mt-2 text-black/75">
                        <div className="flex items-center ">
                            <img src="/ovipay__logo__small.svg" alt="logo" />
                            <p className="font-medium text-[14px]">OviPay</p>
                        </div>
                        <h5 className="text-[25px] text-[#292929] font-bold">
                            100,682 원
                        </h5>
                    </div>
                </div>

                {/* History Container */}
                <div className="flex my-4 justify-between items-center gap-2">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                boxShadow: "2px 2px 7px 0px #00000026",
                            }}
                            className="relative  h-[95px] rounded-[20px] flex flex-col justify-center items-center w-1/4 "
                        >
                            <p className="text-[10px] text-[#A3A3A3] font-medium">
                                주문 내역
                            </p>
                            <h1 className="text-[18px] text-[#F9CA05] font-medium">
                                21
                            </h1>
                            <img
                                src="/go__icon.svg"
                                alt="icon"
                                className="absolute bottom-2 right-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Horizontal Bar */}
            <div
                style={{
                    boxShadow: "0px 2px 4px 0px #0000001A inset",
                }}
                className="w-full h-[8px] bg-[#F2F3F7]"
            ></div>
            {/* Settings Container */}
            <div className="w-[90%] pt-1 pb-28 mx-auto">
                {/* 1 Div */}
                <Link
                    to="/settings/reset-password"
                    className="flex justify-between border-b-[1px] border-[#E2E2E2] py-4 items-center"
                >
                    <div className="flex justify-start items-center gap-2">
                        <img src="/unlock__settings.svg" alt="logo" />
                        <p className="text-[14px] font-medium text-[#4F4F4F]">
                            간편비밀번호 재설정
                        </p>
                    </div>
                    <img src="/go__settings.svg" alt="logo" />
                </Link>
                {/* 2 Div */}
                <Link
                    to="/settings/change-password/step-1"
                    className="flex justify-between border-b-[1px] border-[#E2E2E2] py-4 items-center"
                >
                    <div className="flex justify-start items-center gap-2">
                        <img src="/lock__settings.svg" alt="logo" />
                        <p className="text-[14px] font-medium text-[#4F4F4F]">
                            비밀번호 변경
                        </p>
                    </div>
                    <img src="/go__settings.svg" alt="logo" />
                </Link>
                {/* 3 Div */}
                <Link
                    to="/settings/change-personal-information"
                    className="flex justify-between border-b-[1px] border-[#E2E2E2] py-4 items-center"
                >
                    <div className="flex justify-start items-center gap-2">
                        <img src="/profile__settings.svg" alt="logo" />
                        <p className="text-[14px] font-medium text-[#4F4F4F]">
                            개인정보 변경
                        </p>
                    </div>
                    <img src="/go__settings.svg" alt="logo" />
                </Link>
                {/* 4 Div */}
                <Link
                    to="/settings/payment-method-management"
                    className="flex justify-between border-b-[1px] border-[#E2E2E2] py-4 items-center"
                >
                    <div className="flex justify-start items-center gap-2">
                        <img src="/management__settings.svg" alt="logo" />
                        <p className="text-[14px] font-medium text-[#4F4F4F]">
                            결제수단 관리
                        </p>
                    </div>
                    <img src="/go__settings.svg" alt="logo" />
                </Link>
            </div>
        </>
    );
};

export default Home;
