import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
    ModalHeader,
    ModalBody,
} from "reactstrap";


const MyCartPopup = ({ setIsOpen }) => {
    return (
        <div className="w-full  flex items-center justify-center fixed top-0 left-0 right-0 h-screen z-50 bg-black bg-opacity-60 ">
            <div className=" w-[90%] sm:w-fit rounded-[8px] py-3 px-3 sm:rounded-lg bg-[#fff] ">
                <ModalHeader className=" mb-1 w-fit mx-auto border-0">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="img-fluid h-[68px] mx-auto"
                    />
                </ModalHeader>
                <ModalBody className="py-0 text-center border-0">
                    <p className="mb-1 text-[#8A8A8E] text-[12px]">
                        탁월한 선택이에요!
                    </p>
                    <h5 className="font-[700] text-[24px]">
                    선택한 상품이 <br />장바구니에 담겼습니다.
                    </h5>
                </ModalBody>
                
                <div className="flex mt-4 items-center justify-between gap-x-2 w-full ">
                    <Link to="/shopping/mycart" className="w-1/2">
                        <button
                            
                            className="bg-[#FED52A] text-black text-[16px] font-bold w-full py-3 border-0 rounded-[50px]"
                        >
                                장바구니
                        </button>
                    </Link>
                    <button
                        onClick={()=> setIsOpen(false)}
                        className="bg-[#292929] text-[#fff] text-[16px] font-bold w-1/2 py-3  border-0 rounded-[50px]"
                    >
                            뒤 로
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyCartPopup;
