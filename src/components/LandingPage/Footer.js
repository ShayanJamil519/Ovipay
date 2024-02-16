import React from "react";
import { CiBarcode } from "react-icons/ci";
const Footer = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`fixed bottom-0 right-0 left-0 ${
                isOpen ? "z-50" : "z-40"
            } flex items-center justify-center w-full py-1 bg-white`}
        >
            {isOpen ? (
                <div className=" relative -top-8">
                    <img
                        alt="logo"
                        src="/footer__cross.svg"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            ) : (
                <>
                    <div className="w-[41%] h-[2px] border"></div>

                    <CiBarcode
                        onClick={() => setIsOpen(!isOpen)}
                        size={65}
                        className="p-3 rounded-full cursor-pointer bg-[#fed52a] text-white "
                    />

                    <div className="w-[41%] h-[2px] border"></div>
                </>
            )}
        </div>
    );
};

export default Footer;
