import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import product from "../../assets/img/product-item.png";

const PopularProducts = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-3 ">
            <h5 className="w-full mb-3 text-[16px] font-medium text-[#464441">
                금주의 인기상품
            </h5>

            {/* product */}
            <Link
                to="/shopping/product-details"
                className="w-full hover:no-underline "
            >
                {" "}
                <div
                    style={{
                        boxShadow: "0px 2px 48px 0px rgba(0, 0, 0, 0.04)",
                    }}
                    className=" rounded-[12px] flex gap-x-3 p-3"
                >
                    <img src={product} alt="" />
                    <div className="w-full mt-2">
                        <h6 className="text-[15px] font-bold text-[#464441]">
                            테스트 상품
                        </h6>
                        <p className="text-[12px] text-[#928F8B]">가전제품</p>
                        <div className="flex flex-col items-end justify-center w-full ">
                            <p className="flex items-center gap-x-1">
                                <span className="text-[#D8D4CE]">4.9</span>
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
                className="w-full hover:no-underline "
            >
                {" "}
                <div
                    style={{
                        boxShadow: "0px 2px 48px 0px rgba(0, 0, 0, 0.04)",
                    }}
                    className=" rounded-[12px] flex gap-x-3 p-3"
                >
                    <img src={product} alt="" />
                    <div className="w-full mt-2">
                        <h6 className="text-[15px] font-bold text-[#464441]">
                            테스트 상품
                        </h6>
                        <p className="text-[12px] text-[#928F8B]">가전제품</p>
                        <div className="flex flex-col items-end justify-center w-full ">
                            <p className="flex items-center gap-x-1">
                                <span className="text-[#D8D4CE]">4.9</span>
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
    );
};

export default PopularProducts;
