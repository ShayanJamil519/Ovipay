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
import logo from "../../assets/img/Group 950.png";

const ShutdownModal = ({ toggle, isOpen }) => {
    return (
        <div className="w-full  flex items-center justify-center fixed top-0 left-0 right-0 h-screen z-50 bg-black bg-opacity-60 ">
            <div className=" w-[90%] sm:w-fit rounded-[8px] sm:rounded-lg bg-[#fff] ">
                <ModalHeader className="pt-4 pb-1 w-fit mx-auto border-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="img-fluid w-[80px] mx-auto"
                    />
                </ModalHeader>
                <ModalBody className="py-0 text-center border-0">
                    <p className="mb-2 text-[12px]">
                        정말 로그아웃 하실 건가요?
                    </p>
                    <h5 className="font-bold text-[22px]">로그아웃 됩니다.</h5>
                </ModalBody>
                <ModalFooter className="flex justify-center gap-2 pt-3 pb-3 border-0">
                    <Button
                        className="bg-[#FED52A] text-black px-4 py-2 border-0 rounded-md"
                        onClick={toggle}
                    >
                        로그아웃
                    </Button>
                    <Button
                        className="bg-[#292929]  px-4 py-2 border-0 rounded-md"
                        onClick={toggle}
                    >
                        돌아가기
                    </Button>
                </ModalFooter>
            </div>
        </div>
    );
};

export default ShutdownModal;
