import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const DoneMyCouponModal = ({ setDone }) => {
    const history = useHistory();
    return (
        <div className="w-full  flex items-center justify-center fixed top-0 left-0 right-0 h-screen z-50 bg-black bg-opacity-60 ">
            <div className=" w-[90%] sm:w-fit rounded-[8px] py-3 px-3 sm:rounded-lg bg-[#fff] ">
                <ModalHeader className=" mb-1 w-fit mx-auto border-0">
                    <img
                        src="/myovipay__success.svg"
                        alt="Logo"
                        className="img-fluid w-[60px] mx-auto"
                    />
                </ModalHeader>
                <ModalBody className="py-0 text-center border-0">
                    <p className="mb-1 text-[#8A8A8E] text-[12px]">
                        오늘도 오비페이와 행복한 하루 보내세요!
                    </p>
                    <h5 className="font-bold text-[21px]">등록완료!</h5>
                </ModalBody>
                <div className="flex mt-4 items-center justify-between gap-x-2 w-full ">
                    <button
                        className="bg-[#FED52A] text-[16px] font-bold text-[#000] w-[70%] mx-auto py-3  border-0 rounded-[50px]"
                        onClick={() => {
                            setDone(false);
                        }}
                    >
                        닫 기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoneMyCouponModal;
