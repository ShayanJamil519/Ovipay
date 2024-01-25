import React from "react";
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

const RecommendedProducts = () => {
    return (
        <div className="px-3 my-6 w-full">
            <h1 className=" mb-2 text-[16px] font-medium text-[#464441]">
                오비의 추천상품
            </h1>
            <div className="flex w-full overflow-x-auto justify-start items-center gap-3">
                {products.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "0 0 80%", // 80% width for each product
                            marginRight: "1rem", // Adjust as needed for the gap
                            boxShadow: "0px 2px 48px 0px rgba(0, 0, 0, 0.04)",
                        }}
                        className="flex flex-col  items-center rounded-[12px] justify-center px-3 pt-4 pb-3"
                    >
                        <div className="w-full mb-2">
                            <h1 className="text-[180x] font-bold text-[#464441]">
                                {item.name}
                            </h1>
                            <p className="text-[#FED52A] font-semibold text-[15px]">
                                {item.price}
                            </p>
                        </div>
                        <img
                            src={item.image}
                            className="h-[200px] w-full object-cover rounded-[10px]"
                            alt="Product"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedProducts;
