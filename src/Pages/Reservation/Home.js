import React from "react";
import Header from "./Header";
import logo from "../../assets/img/logo.svg";

const ReservationPage = () => {
    return (
        <>
            <Header title="" showHamburger={true} />

            <div className="w-full flex justify-center items-center flex-col min-h-[80vh]  pt-3 ">
                <img src={logo} alt="Logo" className="w-[90px]" />
                <p className="mt-7 mb-2  text-[24px] font-bold">
                    현재 서비스 준비중입니다.
                </p>
                <h5 className="text-[#8A8A8E] text-[12px]">
                    더 나은 모습으로 찾아뵙겠습니다. 감사합니다.
                </h5>
            </div>
        </>
    );
};

export default ReservationPage;
