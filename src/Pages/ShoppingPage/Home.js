import React, { useState } from "react";
import Header from "./Header";
import { FormGroup, Input } from "reactstrap";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img/hero_swiper_image1.png";
import product from "../../assets/img/product-item.png";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { IoIosStar } from "react-icons/io";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import RecommendedProducts from "../../components/Global/RecommendedProducts";
const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
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
                <div className="flex flex-wrap items-center w-full px-3 mt-4 font-bold gap-x-4 gap-y-5">
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

                {/* <div className="flex-col items-center justify-center w-full px-1 mt-12 ">
                    <h1 className="px-3 text-2xl text-black">
                        오비의 추천상품
                    </h1>
                    {filterProducts().length === 0 ? (
                        <p className="mt-5 text-xl text-center text-gray-600">
                            검색 결과가 없습니다...
                        </p>
                    ) : (
                        <Swiper
                            slidesPerView={1}
                            pagination={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                            ]}
                            className="flex items-center justify-center w-full mb-[60px] py-5"
                        >
                            {filterProducts().map((item) => (
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
                    )}
                </div> */}

                <RecommendedProducts />
                <div className="flex flex-col items-center justify-center w-full ">
                    <h5 className="w-full px-4 mb-3 text-2xl text-black">
                        금주의 인기상품
                    </h5>

                    {/* product */}
                    <Link
                        to="/shopping/product-details"
                        className="w-full hover:no-underline"
                    >
                        {" "}
                        <div className="w-[95%] rounded-xl shadow-md flex gap-x-3 p-3">
                            <img src={product} alt="" />
                            <div className="w-full mt-2">
                                <h6 className="text-lg font-bold text-black">
                                    테스트 상품
                                </h6>
                                <p className="text-sm text-gray-400">
                                    가전제품
                                </p>
                                <div className="flex flex-col items-end justify-center w-full ">
                                    <p className="flex items-center gap-x-1">
                                        <span className="text-gray-400">
                                            4.9
                                        </span>
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
                    </Link>

                    <Link
                        to="/shopping/product-details"
                        className="w-full hover:no-underline"
                    >
                        <div className="w-[95%] rounded-xl shadow-md flex gap-x-3 p-3 mt-4">
                            <img src={product} alt="" />
                            <div className="w-full mt-2">
                                <h6 className="text-lg font-bold text-black">
                                    테스트 상품
                                </h6>
                                <p className="text-sm text-gray-400">
                                    가전제품
                                </p>
                                <div className="flex flex-col items-end justify-center w-full ">
                                    <p className="flex items-center gap-x-1">
                                        <span className="text-gray-400">
                                            4.9
                                        </span>
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
                    </Link>

                    <Link
                        to="/shopping/product-details"
                        className="w-full hover:no-underline"
                    >
                        {" "}
                        <div className="w-[95%] rounded-xl shadow-md flex gap-x-3 p-3 mt-4">
                            <img src={product} alt="" />
                            <div className="w-full mt-2">
                                <h6 className="text-lg font-bold text-black">
                                    테스트 상품
                                </h6>
                                <p className="text-sm text-gray-400">
                                    가전제품
                                </p>
                                <div className="flex flex-col items-end justify-center w-full ">
                                    <p className="flex items-center gap-x-1">
                                        <span className="text-gray-400">
                                            4.9
                                        </span>
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
                    </Link>
                </div>
            </div>
            <Footer address={"home"} />
        </>
    );
};

export default Home;
