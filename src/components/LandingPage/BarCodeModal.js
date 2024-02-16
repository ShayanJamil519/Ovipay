import React, { useEffect, useRef, useState } from "react";
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
import logo from "../../assets/img/Vector.png";
import { Link, useHistory } from "react-router-dom";

const BarCodeModal = ({ isOpen, setIsOpen }) => {
    const popupRef = useRef();

    const handleClosePopup = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div
            onClick={handleClosePopup}
            className="w-full  flex items-end justify-center fixed top-0 left-0 right-0 h-screen z-40 bg-black bg-opacity-60 "
        >
            <div
                ref={popupRef}
                className=" w-[90%] sm:w-fit rounded-[8px] mb-40 "
            >
                <div className="rounded-[20px] bg-[#fed52a] w-full shadow pb-3 pt-5 px-6">
                    <div className="relative w-full  py-1 bg-white border rounded-lg">
                        <img
                            src="/footer__barcode.svg"
                            alt="logo"
                            className="mx-auto h-[60px]"
                        />
                    </div>

                    <div className="flex items-center justify-between w-full  mt-3 text-black/75">
                        <div className="flex items-center ">
                            <img src="/ovipay__logo__small.svg" alt="logo" />
                            <p className="font-medium text-[14px]">OviPay</p>
                        </div>
                        <h5 className="text-[25px] text-[#292929] font-bold">
                            100,682 P
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarCodeModal;
