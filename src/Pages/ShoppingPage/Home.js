import React, { useState } from "react";
import Header from "./Header";
import { FormGroup, Input } from "reactstrap";
import { CiSearch } from "react-icons/ci";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import Footer from "./Footer";
import RecommendedProducts from "../../components/Global/RecommendedProducts";


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const options = ['1만원 미만', '1~2만원대', '3-4만원대', '5만원 이상']
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

        {
            id: 9,
            category: "Appliances",
            name: "Wireless Earphones",
            price: 129.99,
            image: "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg",
        },

        {
            id: 10,
            category: "Appliances",
            name: "Wireless Headphones",
            price: 129.99,
            image: "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg",
        },

        {
            id: 11,
            category: "Furniture",
            name: "Cozy Armchair",
            price: 299.99,
            image: "https://homedecor.pk/cdn/shop/products/cozy-swivel-chair-o_1_900x.jpg?v=1667669327",
        },

        {
            id: 13,
            category: "Electronics",
            name: "4K Smart TV",
            price: 1299.99,
            image: "https://www.radiotvcentre.pk/wp-content/uploads/2021/06/43AU7000-Samsung-UHD-4K-Smart-LED-TV-price-in-Pakistan.jpg",
        },
        {
            id: 14,
            category: "Clothes",
            name: "Leather Jacket",
            price: 79.99,
            image: "https://thursdayboots.com/cdn/shop/files/1024x1024-Men-Keanu-OldEnglish-022122-1_972b12f3-47d3-41d9-a917-10dd4d511249.jpg?v=1705439794",
        },

        {
            id: 16,
            category: "Gift",
            name: "Personalized Photo Frame",
            price: 24.99,
            image: "https://vasari.pk/wp-content/uploads/2021/11/VCFF-006.jpg",
        },
        {
            id: 17,
            category: "Gift",
            name: "Chocolate Assortment Box",
            price: 34.99,
            image: "https://cdn11.bigcommerce.com/s-gb80281b/images/stencil/1280x1280/products/224/1230/IMGP8181__48481.1647542818.jpg?c=2",
        },
        {
            id: 18,
            category: "Gift",
            name: "Scented Candle Set",
            price: 19.99,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Fgifts%2Fbest-candle-gift-sets&psig=AOvVaw30GXFLVEq6AWCGLt2KaYWX&ust=1705795974603000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCuzavX6oMDFQAAAAAdAAAAABAD",
        },
    ];

    const firstProducts = [
        { id: 1, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 2, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 3, image: '/product.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
    ];

    const secondProducts = [
        { id: 1, image: '/recommended__product__1.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 2, image: '/recommended__product__1.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 3, image: '/recommended__product__1.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 4, image: '/recommended__product__1.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 5, image: '/recommended__product__1.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
        { id: 6, image: '/recommended__product__1.png', title: '매장명', description: '안심한우 1++등급...', price: '149,000', discount: '15%' },
    ];

    const filterProducts = () => {
        return products.filter(
            (item) =>
                (!selectedCategory || item.category === selectedCategory) &&
                (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    searchQuery === "")
        );
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center w-full py-4">
                {/* Search bar for items */}
                <FormGroup className="flex items-center justify-center w-full">
                    <CiSearch
                        size={40}
                        type="submit"
                        className="cursor-pointer bg-[#FED52A] z-10 absolute left-[3.8%] p-2 rounded-xl text-white"
                    />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="rounded-xl py-[25px] pl-12 border-[#FED52A] w-[95%] text-gray-400 bg-[#ffffff] focus:outline-none "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </FormGroup>

                {/* Filters */}
                <div className="flex overflow-x-scroll items-center w-full px-3 mt-4 font-bold gap-x-4 gap-y-5">
                    {/* home appliance */}
                    <h6
                        onClick={() => setSelectedCategory("Appliances")}
                        className={`${
                            selectedCategory === "Appliances"
                                ? "bg-[#FED52A]"
                                : "bg-white"
                        } cursor-pointer min-w-[97px] text-center py-2 rounded-2xl  shadow-md`}
                    >
                        가전제품
                    </h6>
                    {/* Gifts */}
                    <h6
                        onClick={() => setSelectedCategory("Gift")}
                        className={`${
                            selectedCategory === "Gift"
                                ? "bg-[#FED52A]"
                                : "bg-white"
                        } cursor-pointer min-w-[97px] text-center py-2 rounded-2xl  shadow-md`}
                    >
                        GIFT
                    </h6>
                    {/* Furniture */}
                    <h6
                        onClick={() => setSelectedCategory("Furniture")}
                        className={`${
                            selectedCategory === "Furniture"
                                ? "bg-[#FED52A]"
                                : "bg-white"
                        } cursor-pointer min-w-[97px] text-center py-2 rounded-2xl  shadow-md`}
                    >
                        가구
                    </h6>
                    {/* bathroom */}
                    <h6
                        onClick={() => setSelectedCategory("Bathroom")}
                        className={`${
                            selectedCategory === "Bathroom"
                                ? "bg-[#FED52A]"
                                : "bg-white"
                        } cursor-pointer min-w-[97px] text-center py-2 rounded-2xl  shadow-md`}
                    >
                        욕실
                    </h6>
                    {/* Electronics */}
                    <h6
                        onClick={() => setSelectedCategory("Electronics")}
                        className={`${
                            selectedCategory === "Electronics"
                                ? "bg-[#FED52A]"
                                : "bg-white"
                        } cursor-pointer min-w-[97px] text-center py-2 rounded-2xl  shadow-md`}
                    >
                        전자기기
                    </h6>
                    {/* Clothes */}
                    <h6
                        onClick={() => setSelectedCategory("Clothes")}
                        className={`${
                            selectedCategory === "Clothes"
                                ? "bg-[#FED52A]"
                                : "bg-white"
                        } cursor-pointer min-w-[97px] text-center py-2 rounded-2xl  shadow-md`}
                    >
                        의류
                    </h6>
                </div>

                {/* Horizontal Products */}
                <div className="overflow-x-auto max-w-full">
                    <h1 className="px-4 mt-8 text-[#464441]">신지연님을 위한 추천 상품</h1>
                    <div className="flex space-x-4 p-4">
                        {firstProducts.map((product) => (
                            <div key={product.id} className="relative flex-shrink-0 w-36">
                                <img src={product.image} alt={product.title} className="w-full h-36 object-cover rounded-lg" />
                                <div className="absolute top-2 right-2">
                                    <img src="/heart.svg" alt="Heart" className="w-6 h-6" />
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

                <div className="h-[1px] bg-[#8d8d8d] w-full px-4" />

                {/* Vertical Products */}
                <div className="w-full">
                    <h1 className="px-4 mt-6 text-[#464441]">금주의 인기상품</h1>
                    <div className="flex flex-col space-y-4 px-4 pb-4 pt-3">
                        {firstProducts.map((product) => (
                            <div key={product.id} className="flex border-b pb-3">
                                {/* Product Image */}
                                <div className="flex-shrink-0 w-36 mr-4 relative">
                                    <img src={product.image} alt={product.title} className="w-full h-36 object-cover rounded-lg" />
                                    <div className="absolute top-2 left-2 bg-[#FED52A] text-white px-2 rounded-[5px]">
                                        <span className="text-[14px] font-[900]">{product.id}</span>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <img src="/heart.svg" alt="Heart" className="w-6 h-6" />
                                    </div>
                                </div>
                                {/* Product Information */}
                                <div className="flex items-start flex-col justify-start w-full h-full">
                                    <p className="text-[11px] text-[#8D8D8D] font-[400] mb-1">{product.title}</p>
                                    <p className="text-[14px] text-[#464441] font-[400]">{product.description}</p>
                                    <p className="text-[18px] font-[900] mt-2">{product.price}원</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products Three Per Row */}
                <div className="max-w-full">
                    <h1 className="px-4 mt-2 text-[#464441]">가격대 별 추천상품</h1>
                    <div className="flex px-4 justify-between mt-6">
                        {
                            options.map((option)=> (
                                <span className={`text-[14px] text-[#737373]`}>{option}</span>
                            ))
                        }
                    </div>
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        {secondProducts.map((product) => (
                            <div key={product.id} className="relative flex-shrink-0 w-[30%] mb-4">
                                <img src={product.image} alt={product.title} className="w-full h-28 object-cover rounded-xl" />
                                <div className="absolute top-1 right-1">
                                    <img src="/heart.svg" alt="Heart" className="w-6 h-6" />
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

                {/* See More */}
                <div className="w-full px-4">
                    <div className="flex gap-2 border border-[#C8C8C8] items-center justify-center py-2 rounded-[10px]">
                        <p className="text-[#737373] text-[14px]">더보기</p>
                        <img src="/arrow_down.svg" alt="" />
                    </div>
                </div>

                <RecommendedProducts />
            </div>
            
            <Footer address={"home"} />
        </>
    );
};

export default Home;
