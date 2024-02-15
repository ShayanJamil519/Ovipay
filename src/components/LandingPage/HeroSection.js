import { React, useState } from "react";
import img1 from "../../assets/img/hero_swiper_image1.png";
import img2 from "../../assets/img/sidebar_logo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col  items-center justify-center w-full mb-4 px-3 pt-1 text-black rounded-t-3xl ">
                <div className="rounded-[20px] bg-[#fed52a] w-full shadow pb-2 pt-3 px-6">
                    <div
                        // style={{
                        //     boxShadow:
                        //         "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                        // }}
                        className="relative w-full  py-3 bg-white border rounded-lg"
                    >
                        <div className="px-4  flex justify-center items-center bg_barcode">
                            <button className="bg-[#fed52a] shadow-sm text-[13px] py-2.5  px-4 font-bold rounded-[8px] ">
                                바코드 보기
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center mt-2 justify-end w-full gap-x-2">
                        <Link
                            to="/charge/bar-input"
                            className="hover:no-underline hover:text-[#fed52a]"
                        >
                            {" "}
                            <div className="flex items-center px-2 py-[7px] bg-white rounded-[8px] gap-x-2">
                                <img src="/charge.svg" alt="logo" />
                                <p className="text-[11px] font-bold text-[#525252]">
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
                                <p className="text-[11px] font-bold text-[#525252]">
                                    출 금
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/charge/confirm-form"
                            className="hover:no-underline hover:text-[#fed52a]"
                        >
                            <div className="flex items-center px-2 py-[7px] bg-white rounded-[8px] gap-x-2">
                                <img src="/p__logo.svg" alt="logo" />
                                <p className="text-[11px] font-bold text-[#525252]">
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

                {/* ========== */}
                <div className="flex justify-between items-center  px-1 w-full mt-3.5 ">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Link
                            to="/shopping-home"
                            className="hover:no-underline "
                        >
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src="/shopping.svg"
                                    alt="logo"
                                    className="w-[45px]"
                                />
                                <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                    쇼 핑
                                </p>
                            </div>
                        </Link>
                        <Link to="/my-ovipay" className="hover:no-underline ">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src="/my_opivay.svg"
                                    alt="logo"
                                    className="w-[45px]"
                                />
                                <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                    MyOvipay
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Link
                            to="/reservation"
                            className="hover:no-underline flex flex-col justify-center items-center"
                        >
                            <img
                                src="/reservation.svg"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                숙박 예약
                            </p>
                        </Link>
                        <Link
                            to="/gift/delivery-details"
                            className="flex flex-col justify-center items-center"
                        >
                            <img
                                src="/my__gift.svg"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                MyGift
                            </p>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Link to="/gift-home" className="hover:no-underline  ">
                            {" "}
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src="/gift.svg"
                                    alt="logo"
                                    className="w-[45px]"
                                />
                                <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                    GIFT
                                </p>
                            </div>
                        </Link>
                        <Link to="/my-coupon" className="hover:no-underline ">
                            {" "}
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src="/my__coupon.svg"
                                    alt="logo"
                                    className="w-[45px]"
                                />
                                <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                    MyCoupon
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 -ml-3">
                        <Link
                            to="/affiliate"
                            className="flex flex-col justify-center items-center"
                        >
                            <img
                                src="/store.svg"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                OVI가맹점
                            </p>
                        </Link>
                        <Link
                            to="/shopping/delivery-details"
                            className="flex flex-col justify-center items-center "
                        >
                            <img
                                src="/my__shopping.svg"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                MyShopping
                            </p>
                        </Link>
                    </div>
                </div>

                {/* ================ */}

                <div className="flex items-center justify-center w-full mt-3 ">
                    <Swiper
                        slidesPerView={1}
                        pagination={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className=" w-full  "
                    >
                        <SwiperSlide className="flex items-center justify-center">
                            <img
                                src={img1}
                                alt="Slide 1"
                                className="h-[160px] w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex items-center justify-center">
                            <img
                                src={img1}
                                alt="Slide 1"
                                className="h-[160px] w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex items-center justify-center">
                            <img
                                src={img1}
                                alt="Slide 1"
                                className="h-[160px] w-full"
                            />
                        </SwiperSlide>
                        <div className="h-[30px] "></div>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
