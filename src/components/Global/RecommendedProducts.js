import React, { useState } from "react";

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
    }
];

const RecommendedProducts = () => {

    const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentProductIndex(index);
  };

    return (
        <div className="px-3 my-6 pt-10 w-full bg-[#FBFBFB]">
            <h1 className=" mb-2 text-[16px] font-medium text-[#464441]">
                OVI의 추천상품
            </h1>
            <div className="flex w-full overflow-x-auto justify-start items-center gap-3">
                {products.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "0 0 75%", // 80% width for each product
                            marginRight: "0.7rem", // Adjust as needed for the gap
                            // boxShadow: "2px 2px 30px 0px #0000001A",
                        }}
                        className="flex flex-col bg-white shadow-md items-center rounded-[12px] justify-center px-3 pt-4 pb-3"
                    >
                        <div className="w-full mb-2">
                            <p className="text-[#8D8D8D] text-[12px] font-[400]">
                                매장명
                            </p>
                            <p className="text-[##464441] font-[400] text-[15px]">
                                안심한우 1++등급 ‘투뿔 스페셜...
                            </p>
                            <h1 className="text-[#464441] font-[900] text-[20px] mt-2">
                                149,000 <span className="font-light">원</span>{" "}
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

            <div className="flex justify-center mt-3">
                {products.map((_, index) => (
                <button
                    key={index}
                    className={`mx-1 w-2 h-2 rounded-full ${
                    currentProductIndex === index ? 'bg-[#FED52A]' : 'bg-[#E5E5EA]'
                    }`}
                    onClick={() => handleDotClick(index)}
                />
                ))}
            </div>
        </div>
    );
};

export default RecommendedProducts;
