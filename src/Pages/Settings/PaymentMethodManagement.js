import React, { useState } from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import logo from "../../assets/img/logo.svg";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const PaymentMethodManagement = () => {
    return (
        <>
            <Header title="결제수단 관리" showHamburger={false} />
            {/* Form */}
            <form className="pt-8 min-h-[80vh] relative  flex flex-col gap-6  w-[90%] mx-auto">
                {/* 1 Div */}
                <div className="flex items-center justify-center w-full mt-3 ">
                    <Swiper
                        slidesPerView={1}
                        pagination={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className=" w-full  "
                    >
                        <SwiperSlide className="">
                            <div className="h-[200px] rounded-[20px] py-3 w-full bg-[#FDD42A]">
                                <img src={logo} className="w-[50px] mx-auto" />
                                <h1 className="text-[14px] font-bold">
                                    KB국민은행카드
                                </h1>
                            </div>
                        </SwiperSlide>

                        <div className="h-[30px] "></div>
                    </Swiper>
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

export default PaymentMethodManagement;
