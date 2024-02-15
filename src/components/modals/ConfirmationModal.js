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
import logo from "../../assets/img/authentication-logo.png";

const ConfirmationModal = ({ setConfirm, setDone }) => {
    return (
        <div className="w-full  flex items-center justify-center fixed top-0 left-0 right-0 h-screen z-50 bg-black bg-opacity-60 ">
            <div className=" w-[90%] sm:w-fit rounded-[8px] py-4 px-6 sm:rounded-lg bg-[#fff] ">
                <ModalHeader className=" mb-1 w-fit mx-auto border-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="img-fluid w-[60px] mx-auto"
                    />
                </ModalHeader>
                <ModalBody className="py-0 text-center border-0">
                    <p className="mb-2 text-[12px]">
                        실시간 계좌이체로 충전됩니다.
                    </p>
                    <h5 className="font-bold text-[18px]">
                        결제창으로 이동됩니다.
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
                        네!
                    </button>
                    <button
                        className="bg-[#292929] text-[#fff] text-[16px] font-bold  w-1/2 py-3  border-0 rounded-[50px]"
                        onClick={() => setConfirm(false)}
                    >
                        취 소
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
