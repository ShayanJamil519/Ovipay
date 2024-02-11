import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import product from "../../assets/img/product-item.png";
import { IoIosStar } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import RecommendedProducts from "../../components/Global/RecommendedProducts";


const Favourite = () => {
    const [isTrue, setIsTrue] = useState(false);

    const firstProducts = [
        { id: 1, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 2, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 3, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 1, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 2, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 3, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
    ];

    return (
        <>
            <Header />
            
            <div className="flex flex-col items-center justify-center w-full px-3 gap-y-5">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-lg font-semibold px-2">찜 리스트</h2>
                    <div className="flex items-center gap-x-2">
                        <button className="px-3 py-1 text-sm font-bold rounded-xl text-black bg-[#FED52A]">
                            선택삭제
                        </button>
                        <button className="px-3 py-1 text-sm font-bold rounded-xl text-black bg-[#e5e5e5]">
                            전체삭제
                        </button>
                    </div>
                </div>

                {/* More Modal */}
                <div className="flex items-start justify-start w-full mt-2">
                    <div className="flex justify-start gap-2 border px-3 py-2 rounded-[50px]">
                        <p className="text-[#828282] text-[10px]">담은순</p>
                        <img src="/arrow_down.svg" alt="" />
                    </div>
                </div>


                {/* Three Products Per Row */}
                <div className="w-full">
                    <div className="flex flex-wrap justify-between gap-3">
                        {firstProducts.map((product) => (
                            <div key={product.id} className="relative flex-shrink-0 w-[30%] mb-4">
                                <img src={product.image} alt={product.title} className="w-full h-28 object-cover rounded-xl" />
                                <div className="absolute top-1 right-2">
                                    <input type="checkbox" className="h-4 w-4 border text-[#F6C700] checkbox" />
                                </div>
                                <div className="p-2">
                                    <p className="text-[14px] font-semibold mb-1"><span className="text-[#F6C700] mr-2">{product.discount}</span>{product.price}</p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">{product.title}</p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price and Button */}
                <div className="w-full">
                    <div className="flex gap-6 my-4">
                        <div className="flex flex-col items-start justify-start py-2">
                            <h1 className="text-[14px] text-[#989898]">1개 선택</h1>
                            <p className="text-[18px] font-[900] text-[#464441]">총 149,000원</p>
                        </div>
                        <div className="flex items-center justify-center w-[60%] bg-[#FED52A] py-1 rounded-[50px]">
                            <button className="text-[12px] font-[700]">장바구니</button>
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
