import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Col,
} from "reactstrap";

import logo from "../../assets/img/logo.svg";

const CouponPopup = ({ setConfirm, setDone }) => {
    return (
        <div className="w-full  flex items-center justify-center fixed top-0 left-0 right-0 h-screen z-50 bg-black bg-opacity-60 ">
            <div className=" w-[90%] sm:w-fit rounded-[8px] py-3 px-3 sm:rounded-lg bg-[#fff] ">
                <ModalHeader className=" mb-1 w-fit mx-auto border-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="img-fluid w-[50px] mx-auto"
                    />
                </ModalHeader>
                <ModalBody className="py-0 text-center border-0">
                    <p className="mb-1 text-[#8A8A8E] text-[12px]">
                        신중하게 결정해주세요 !
                    </p>
                    <h5 className="font-bold text-[21px]">
                        금액이 출금됩니다.
                    </h5>
                </ModalBody>
                <div className="flex mt-4 items-center justify-between gap-x-2 w-full ">
                    <button
                        className="bg-[#FED52A] text-black text-[16px] font-bold w-1/2 py-3 border-0 rounded-[50px]"
                        onClick={() => {
                            setConfirm(false);
                            setDone(true);
                        }}
                    >
                        출 금
                    </button>
                    <button
                        className="bg-[#292929] text-[#fff] text-[16px] font-bold  w-1/2 py-3  border-0 rounded-[50px]"
                        onClick={() => setConfirm(false)}
                    >
                        돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CouponPopup;
