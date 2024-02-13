import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import SortModal from "./Modals/SortModal";

const Favourite = () => {
    const [isOpen, setIsOpen] = useState(false);

    const firstProducts = [
        {
            id: 1,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 2,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 3,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 1,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 2,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
        {
            id: 3,
            image: "/product.png",
            title: "매장명",
            description: "안심한우 1++등급...",
            price: "149,000",
            discount: "15%",
        },
    ];

    const products = [
        {
            id: 2,
            category: "Bathroom",
            name: "테스트 상품",
            price: "49,000원",
            image: "/recommended__product__1.png",
        },
        {
            id: 2,
            category: "Bathroom",
            name: "테스트 상품",
            price: "49,000원",
            image: "/recommended__product__1.png",
        },
        {
            id: 2,
            category: "Bathroom",
            name: "테스트 상품",
            price: "49,000원",
            image: "/recommended__product__1.png",
        },
        {
            id: 2,
            category: "Bathroom",
            name: "테스트 상품",
            price: "49,000원",
            image: "/recommended__product__1.png",
        },
        {
            id: 2,
            category: "Bathroom",
            name: "테스트 상품",
            price: "49,000원",
            image: "/recommended__product__1.png",
        },
        {
            id: 2,
            category: "Bathroom",
            name: "테스트 상품",
            price: "49,000원",
            image: "/recommended__product__1.png",
        },
    ];

    return (
        <>
            <Header title="찜" showHamburger={true} />

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
                    <div
                        className="flex justify-start gap-2 border px-3 py-2 rounded-[50px]"
                        onClick={() => setIsOpen(true)}
                    >
                        <p className="text-[#828282] text-[10px]">담은순</p>
                        <img src="/arrow_down.svg" alt="" />
                    </div>
                </div>

                {/* Three Products Per Row */}
                <div className="w-full">
                    <div className="flex flex-wrap justify-between gap-3">
                        {firstProducts.map((product) => (
                            <div
                                key={product.id}
                                className="relative flex-shrink-0 w-[30%] mb-4"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-28 object-cover rounded-xl"
                                />
                                <div className="absolute top-1 right-2">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 border text-[#F6C700] checkbox"
                                    />
                                </div>
                                <div className="p-2">
                                    <p className="text-[14px] font-semibold mb-1">
                                        <span className="text-[#F6C700] mr-2">
                                            {product.discount}
                                        </span>
                                        {product.price}
                                    </p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                                        {product.title}
                                    </p>
                                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price and Button */}
                <div className="w-full">
                    <div className="flex gap-6 my-4">
                        <div className="flex flex-col items-start justify-start">
                            <h1 className="text-[14px] text-[#989898]">
                                1개 선택
                            </h1>
                            <p className="text-[18px] font-[900] text-[#464441]">
                                총 149,000원
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-[60%] bg-[#FED52A] rounded-[50px]">
                            <button className="text-[12px] font-[700]">
                                장바구니
                            </button>
                        </div>
                    </div>
                </div>

                {/* Recommended Products */}
                <div className="px-3 my-6 w-full">
                    <h1 className=" mb-2 text-[16px] font-medium text-[#464441]">
                        오비의 추천상품
                    </h1>
                    <div className="flex w-full overflow-x-auto justify-start items-center gap-3">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: "0 0 70%", // 80% width for each product
                                    marginRight: "0.7rem", // Adjust as needed for the gap
                                    boxShadow:
                                        "0px 2px 48px 0px rgba(0, 0, 0, 0.04)",
                                }}
                                className="flex flex-col  items-center rounded-[12px] justify-center px-3 pt-4 pb-3"
                            >
                                <div className="w-full mb-2">
                                    <p className="text-[#8D8D8D] text-[12px] font-[400]">
                                        매장명
                                    </p>
                                    <p className="text-[#464441] font-[400] text-[15px]">
                                        안심한우 1++등급 ‘투뿔 스페셜...
                                    </p>
                                    <h1 className="text-[#464441] font-[900] text-[20px] mt-2">
                                        149,000원
                                        <span className="text-[#F6C700] ml-2 font-[700]">
                                            15%
                                        </span>
                                    </h1>
                                </div>
                                <img
                                    src={item.image}
                                    className="h-[180px] w-full object-cover rounded-[10px]"
                                    alt="Product"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen && <SortModal isOpen={isOpen} setIsOpen={setIsOpen} />}

            <Footer address="favourite" />
        </>
    );
};

export default Favourite;
