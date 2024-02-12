import React from "react";
import {
    ModalHeader,
    ModalBody,
} from "reactstrap";


const CheckoutPopup = ({ setConfirm, setDone }) => {
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
                        오비페이를 이용해주셔서 감사합니다
                    </p>
                    <h5 className="font-[700] text-[24px]">
                        쿠폰이 성공적으로 사용됐습니다!
                    </h5>
                </ModalBody>
                
                <div className="flex mt-4 items-center justify-between gap-x-2 w-full ">
                    <button
                        className="bg-[#292929] text-white text-[16px] font-bold w-full py-3 border-0 rounded-[50px]"
                        // onClick={() => {
                        //     setConfirm(false);
                        //     setDone(true);
                        // }}
                    >
                        뒤 로
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPopup;
