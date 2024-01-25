import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import product from "../../assets/img/product-item.png";
import { IoIosStar } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import RecommendedProducts from "../../components/Global/RecommendedProducts";
const Favourite = () => {
    const [isTrue, setIsTrue] = useState(false);
    const handleTrue = () => {
        setIsTrue(!isTrue);
    };
    const products = [
        {
            id: 2,
            category: "Bathroom",
            name: "Luxurious Towel Set",
            price: 29.99,
            image: "https://5.imimg.com/data5/ANDROID/Default/2021/2/TH/RP/TN/97672975/product-jpeg-500x500.jpg",
        },

        {
            id: 4,
            category: "Clothes",
            name: "Stylish Denim Jeans",
            price: 49.99,
            image: "https://m.media-amazon.com/images/I/71FvDqiYZDL._AC_UY1100_.jpg",
        },

        {
            id: 6,
            category: "Furniture",
            name: "Modern Coffee Table",
            price: 199.99,
            image: "https://tarkhan.pk/wp-content/uploads/2020/01/coffe-table1-scaled.jpg",
        },

        {
            id: 8,
            category: "Electronics",
            name: "Wireless Headphones",
            price: 129.99,
            image: "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg",
        },
    ];
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center w-full px-3 gap-y-5">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-lg font-semibold">찜 리스트</h2>
                    <div className="flex items-center gap-x-2">
                        <button className="px-3 py-1 text-sm font-bold rounded-xl text-black bg-[#FED52A]">
                            선택삭제
                        </button>
                        <button className="px-3 py-1 text-sm font-bold rounded-xl text-black bg-[#e5e5e5]">
                            전체삭제
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-y-1">
                    <div
                        onClick={handleTrue}
                        className="cursor-pointer w-[95%] rounded-xl shadow-md flex gap-x-3 p-3 "
                    >
                        <img src={product} alt="" />
                        <div className="w-[95%] ">
                            <h6 className="text-lg font-bold text-black">
                                테스트 상품
                            </h6>
                            <p className="text-sm text-gray-400">가전제품</p>
                            <div className="flex flex-col items-end justify-center w-full ">
                                {isTrue ? (
                                    <FaRegSquare
                                        size={25}
                                        className="text-[#FED52A] cursor-pointer relative bottom-12 "
                                    />
                                ) : (
                                    <FaRegSquareCheck
                                        size={25}
                                        className="text-[#FED52A] cursor-pointer relative bottom-12"
                                    />
                                )}
                                <p className="flex items-center gap-x-1">
                                    <span className="text-gray-400">4.9</span>
                                    <IoIosStar
                                        size={17}
                                        className="text-[#FED52A]"
                                    />
                                </p>
                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                    49,000원
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={handleTrue}
                        className="cursor-pointer w-[95%] rounded-xl shadow-md flex gap-x-3 p-3"
                    >
                        <img src={product} alt="" />
                        <div className="w-[95%] ">
                            <h6 className="text-lg font-bold text-black">
                                테스트 상품
                            </h6>
                            <p className="text-sm text-gray-400">가전제품</p>
                            <div className="flex flex-col items-end justify-center w-full ">
                                {isTrue ? (
                                    <FaRegSquare
                                        size={25}
                                        className="text-[#FED52A] cursor-pointer relative bottom-12 "
                                    />
                                ) : (
                                    <FaRegSquareCheck
                                        size={25}
                                        className="text-[#FED52A] cursor-pointer relative bottom-12"
                                    />
                                )}
                                <p className="flex items-center gap-x-1">
                                    <span className="text-gray-400">4.9</span>
                                    <IoIosStar
                                        size={17}
                                        className="text-[#FED52A]"
                                    />
                                </p>
                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                    49,000원
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={handleTrue}
                        className="cursor-pointer w-[95%] rounded-xl shadow-md flex gap-x-3 p-3"
                    >
                        <img src={product} alt="" />
                        <div className="w-[95%] ">
                            <h6 className="text-lg font-bold text-black">
                                테스트 상품
                            </h6>
                            <p className="text-sm text-gray-400">가전제품</p>
                            <div className="flex flex-col items-end justify-center w-full ">
                                {isTrue ? (
                                    <FaRegSquare
                                        size={25}
                                        className="text-[#FED52A] cursor-pointer relative bottom-12 "
                                    />
                                ) : (
                                    <FaRegSquareCheck
                                        size={25}
                                        className="text-[#FED52A] cursor-pointer relative bottom-12"
                                    />
                                )}
                                <p className="flex items-center gap-x-1">
                                    <span className="text-gray-400">4.9</span>
                                    <IoIosStar
                                        size={17}
                                        className="text-[#FED52A]"
                                    />
                                </p>
                                <h6 className="text-[#FED52A] font-semibold text-xl">
                                    49,000원
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <RecommendedProducts />
                {/* <div className="flex-col items-center justify-center w-full px-1 mt-6 ">
                    <h6 className="w-full font-semibold">최근 본 상품</h6>
                    <Swiper
                        slidesPerView={1}
                        pagination={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="flex items-center justify-center w-full mb-[60px] py-5"
                    >
                        {products.map((item) => (
                            <SwiperSlide className="flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-center p-5 shadow-md">
                                    <div className="w-full mb-2">
                                        <h1 className="text-2xl font-bold text-black">
                                            {item.name}
                                        </h1>
                                        <p className="text-[#FED52A] font-semibold text-xl">
                                            {item.price}원
                                        </p>
                                    </div>
                                    <img
                                        src={item.image}
                                        className="h-[200px] w-[300px]"
                                        alt="Slide 1"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}
            </div>
            <Footer address="favourite" />
        </>
    );
};

export default Favourite;
