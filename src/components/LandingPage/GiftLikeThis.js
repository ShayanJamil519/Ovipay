import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import product from "../../assets/img/product-item.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const GiftLikeThis = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full mb-5 px-3 ">
            <h5 className="w-full mb-3 text-[16px] font-medium text-[#464441]">
                이런 선물은 어때요?
            </h5>

            <div className="flex items-center justify-center w-full mt-3 ">
                <Swiper
                    slidesPerView={1}
                    pagination={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className=" w-full  "
                >
                    {[1, 2, 3].map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center "
                        >
                            <div
                                // to="/shopping/product-details"
                                style={{
                                    boxShadow: "2px 2px 5px 0px #0000001A",
                                }}
                                className=" w-full rounded-[12px] flex gap-x-3 p-3 bg-[#fff]"
                            >
                                <img src={product} alt="logo" />
                                <div className="w-full mt-2">
                                    <h6 className="text-[11px]  text-[#8D8D8D] mb-[2px]">
                                        매장명
                                    </h6>
                                    <p className="text-[14px] text-[#464441]">
                                        안심한우 1++등급 ‘투뿔 ...
                                    </p>
                                    <div className="flex items-center justify-start gap-1 w-full mt-1 ">
                                        <p className="text-[#F6C700] font-bold text-[18px]">
                                            15%
                                        </p>

                                        <h6 className="text-[#000] font-bold text-[18px]">
                                            149,000{" "}
                                            <span className="font-light">
                                                원
                                            </span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="h-[40px] "></div>
                </Swiper>
            </div>
        </div>
    );
};

export default GiftLikeThis;
