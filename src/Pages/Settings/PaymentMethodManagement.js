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
import CardModal from "./CardModal";

const PaymentMethodManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Header title="결제수단 관리" showHamburger={false} />
            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="pt-8 min-h-[80vh] relative  flex flex-col w-[90%] mx-auto"
            >
                <p className="font-bold mb-3">
                    카드 <span className="text-[#0F9AFF] text-[20px]">1</span>
                </p>

                {/* 1 Div */}
                <div className="flex items-center justify-center w-full ">
                    <Swiper
                        slidesPerView={1}
                        pagination={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className=" w-full  "
                    >
                        <SwiperSlide className="">
                            <div className="h-[200px] rounded-[20px] flex flex-col justify-center items-center py-3 w-full bg-[#FDD42A]">
                                <img src={logo} className="w-[50px] " />
                                <h1 className="text-[14px] text-[#474747] font-bold mt-3  ">
                                    KB국민은행카드
                                </h1>
                                <p className="text-[#8B6C1D] text-[14px] font-medium  ">
                                    000000********
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="">
                            <div className="h-[200px] border-[1px] border-[#DDDDDD] rounded-[20px] flex flex-col justify-center items-center py-3 w-full bg-[#ffffff]">
                                <div className="p-1 rounded-full border-[1px] border-[#A0A0A0]">
                                    <img src="/settings__add.svg" />
                                </div>

                                <p className="text-[#A0A0A0] text-[14px] font-medium mt-3 ">
                                    카드를 등록하고 간편하게 결제하세요
                                </p>
                            </div>
                        </SwiperSlide>

                        <div className="h-[30px] "></div>
                    </Swiper>
                </div>

                <div className=" text-center w-full mt-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        type="submit"
                        className="w-full bg-[#292929] font-semibold text-[17px] border-none text-[#fff] px-[85px] py-[12px] rounded-full hover:bg-[#f2ce3e]"
                    >
                        + 추가 등록하기
                    </button>
                </div>
            </form>
            {isOpen && <CardModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    );
};

export default PaymentMethodManagement;
