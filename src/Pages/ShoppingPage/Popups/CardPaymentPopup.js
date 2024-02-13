import React from "react";

const CardPaymentPopup = ({ setIsOpen }) => {
    return (
        <div className="w-full  flex items-center justify-center fixed top-0 left-0 right-0 h-screen z-50 bg-black bg-opacity-60 ">
            <div className=" w-[90%] sm:w-fit rounded-[8px] py-3 px-4 sm:rounded-lg bg-[#fff] h-[80%] flex items-center justify-center">
                <p className="text-center text-[24px] font-[700]">여기에는 실시간 계좌이체 <br /> PG사 전용 페이지가 <br /> 나타납니다.</p>
            </div>
        </div>
    );
};

export default CardPaymentPopup;
