import { React, useState } from "react";
import img1 from "../../assets/img/hero_swiper_image1.png";
import img2 from "../../assets/img/sidebar_logo.png";

import { GiRotaryPhone } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { BiSolidGift } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbCash } from "react-icons/tb";
import { RiCoupon3Line } from "react-icons/ri";

import { AiOutlineShop } from "react-icons/ai";
import { HiGiftTop } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col  items-center justify-center w-full px-3 pt-2 text-black rounded-t-3xl ">
                <div className="rounded-[20px] bg-[#fed52a] w-full shadow pb-3 pt-4 px-6">
                    <div
                        style={{
                            boxShadow:
                                "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                        }}
                        className="relative w-full  py-3 bg-white border rounded-lg"
                    >
                        <div className="px-4 py-2 flex justify-center items-center bg_barcode">
                            <button className="bg-[#fed52a] shadow-sm text-[13px] py-3  px-4 font-bold rounded-[8px] ">
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
                                <img src="/charge.png" alt="logo" />
                                <p className="text-[8px] font-bold text-[#525252]">
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
                                    src="/solar_cash-out-bold.png"
                                    alt="logo"
                                />
                                <p className="text-[8px] font-bold text-[#525252]">
                                    출 금
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/charge/confirm-form"
                            className="hover:no-underline hover:text-[#fed52a]"
                        >
                            <div className="flex items-center px-2 py-[7px] bg-white rounded-[8px] gap-x-2">
                                <img src="/p__logo.png" alt="logo" />
                                <p className="text-[8px] font-bold text-[#525252]">
                                    포인트 선물
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center justify-between w-full  mt-2 text-black/75">
                        <div className="flex items-center ">
                            <img src="/ovipay__logo__small.png" alt="logo" />
                            <p className="font-medium text-[12px]">OviPay</p>
                        </div>
                        <h5 className="text-[25px] text-[#292929] font-bold">
                            100,682 원
                        </h5>
                    </div>
                </div>
                <div className="flex items-center justify-between px-3 w-full mt-6 ">
                    <Link to="/shopping-home" className="hover:no-underline ">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/shopping.png"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                쇼 핑
                            </p>
                        </div>
                    </Link>
                    <Link
                        to="/listing-page"
                        className="hover:no-underline flex flex-col justify-center items-center"
                    >
                        <img
                            src="/reservation.png"
                            alt="logo"
                            className="w-[45px]"
                        />
                        <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                            숙박 예약
                        </p>
                    </Link>
                    <Link to="/gift-home" className="hover:no-underline  ">
                        {" "}
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/gift.png"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                GIFT
                            </p>
                        </div>
                    </Link>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/store.png" alt="logo" className="w-[45px]" />
                        <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                            OVI가맹점
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between pl-2 w-full mt-2 ">
                    <Link to="" className="hover:no-underline ">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/my_opivay.png"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                MyOvipay
                            </p>
                        </div>
                    </Link>
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src="/my__gift.png"
                            alt="logo"
                            className="w-[45px]"
                        />
                        <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                            MyGift
                        </p>
                    </div>
                    <Link to="" className="hover:no-underline ">
                        {" "}
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/my__coupon.png"
                                alt="logo"
                                className="w-[45px]"
                            />
                            <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                                MyCoupon
                            </p>
                        </div>
                    </Link>
                    <div className="flex flex-col justify-center items-center -ml-[11px] mr-[7px]">
                        <img
                            src="/my__shopping.png"
                            alt="logo"
                            className="w-[45px]"
                        />
                        <p className="mt-1 text-[12px] font-normal text-center text-[#171717]">
                            MyShopping
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-6 ">
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
                                className="h-[175px] w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex items-center justify-center">
                            <img
                                src={img1}
                                alt="Slide 1"
                                className="h-[175px] w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex items-center justify-center">
                            <img
                                src={img1}
                                alt="Slide 1"
                                className="h-[175px] w-full"
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
