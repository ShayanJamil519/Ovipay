import React, { useState } from "react";
import logo from "../../assets/img/sidebar_logo.png";
import { AiOutlineShop } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { HiGiftTop } from "react-icons/hi2";
import { ImCoinDollar } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { MdCoffee, MdOutlinePayment, MdShoppingBag } from "react-icons/md";
import { RiCoupon2Line, RiShutDownLine } from "react-icons/ri";
import { TbCash } from "react-icons/tb";
import ShutdownModal from "../modals/ShutdownModal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SidebarContain = ({ menuToggle, setMenuToggle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleToggle = () => {
        setMenuToggle(!menuToggle);
    };

    return (
        <>
            <div
                className={`${
                    menuToggle ? "right-0" : "-right-[100vh]"
                }   sidebar-container bg-[#fed52a] overflow-hidden fixed z-50 top-0 transition-all duration-300 w-[75%] sm:w-[300px] pt-[90px]  h-full `}
            >
                <div className="flex items-center w-full pl-10 text-lg">
                    <img src={logo} alt="" />
                    <div>
                        <h6 className="font-[900]">오비페이와 함께</h6>
                        <p className="font-[900] text-white">선지연 고객님</p>
                    </div>
                </div>

                <div className="flex flex-col h-[538px] pb-4 mt-5 overflow-y-scroll bg-white gap-y-5">
                    <div className="flex flex-col justify-center pt-4 w-full shadow shadow-black font-semibold text-[#fed52a] gap-y-4 ">
                        <Link
                            to="/"
                            onClick={handleToggle}
                            className="hover:no-underline hover:text-white"
                        >
                            {" "}
                            <div className="flex items-center gap-x-4 py-2 px-4 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                                <GoHome size={28} className="text-[" />
                                <h6 className="text-black">HOME</h6>
                            </div>
                        </Link>
                        <Link
                            to="/shopping-home"
                            onClick={handleToggle}
                            className="hover:no-underline hover:text-white"
                        >
                            <div className="flex items-center gap-x-4 py-2 px-4 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                                <MdShoppingBag size={28} className="text-[" />
                                <h6 className="text-black">쇼핑</h6>
                            </div>
                        </Link>
                        <div className="flex items-center gap-x-4 py-2 px-4 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                            <MdCoffee size={28} className="text-[" />
                            <h6 className="text-black">커피</h6>
                        </div>
                        <div className="flex items-center gap-x-4 py-2 px-4 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                            <AiOutlineShop size={28} className="text-[" />
                            <h6 className="text-black">오비페이 가맹점</h6>
                        </div>
                        <div className="flex items-center gap-x-4 py-2 px-4 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                            <ImCoinDollar size={28} className="text-[" />
                            <h6 className="text-black">입점 및 제휴 문의</h6>
                        </div>
                        <div className="flex items-center gap-x-4 py-2  px-4 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                            <TbCash size={28} className="text-[" />
                            <h6 className="text-black">숙박 예약</h6>
                        </div>
                    </div>

                    <div className="flex flex-col shadow py-3 justify-center w-full  font-semibold text-[#fed52a] gap-y-4 ">
                        <div className="flex items-center px-4 gap-x-4  py-2 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                            <MdOutlinePayment size={28} className="text-[" />
                            <h6 className="text-black">MY Ovipay</h6>
                        </div>
                        <Link
                            to="/gift-home"
                            onClick={handleToggle}
                            className="hover:no-underline hover:text-white"
                        >
                            <div className="flex items-center px-4 gap-x-4  py-2 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                                <HiGiftTop size={28} className="text-[" />
                                <h6 className="text-black">MY Gift</h6>
                            </div>
                        </Link>
                        <Link
                            to="/my-coupon"
                            onClick={handleToggle}
                            className="hover:no-underline hover:text-white"
                        >
                            <div className="flex items-center px-4 gap-x-4  py-2 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                                <RiCoupon2Line size={28} className="text-[" />
                                <h6 className="text-black">MY Coupon</h6>
                            </div>
                        </Link>

                        <Link
                            to="/shopping-home"
                            onClick={handleToggle}
                            className="hover:no-underline hover:text-white"
                        >
                            <div className="flex items-center gap-x-4 px-4 py-2 hover:bg-[#fed52a] cursor-pointer hover:text-white">
                                <IoCartOutline size={28} className="text-[" />
                                <h6 className="text-black">MY Shopping</h6>
                            </div>
                        </Link>
                    </div>
                    <div
                        onClick={toggle}
                        className="flex flex-col hover:bg-[#fed52a] py-2 cursor-pointer hover:text-white justify-center w-full px-4 font-semibold text-[#fed52a] gap-y-7 "
                    >
                        <div className="flex items-center gap-x-4 ">
                            <RiShutDownLine size={28} className="text-[" />
                            <h6 className="text-black ">로그아웃</h6>
                        </div>
                    </div>
                </div>
            </div>
            <ShutdownModal isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default SidebarContain;
