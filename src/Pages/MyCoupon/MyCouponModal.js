import React, { useRef } from "react";

const MyCouponModal = ({ isOpen, setIsOpen }) => {
    // const [isOpen, setIsOpen] = useState(true);
    const popupRef = useRef();

    const handleClosePopup = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div
            className={`${
                isOpen ? "fixed" : "hidden"
            } bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full`}
            onClick={handleClosePopup}
        >
            <div
                ref={popupRef}
                className={`fixed overflow-y-scroll bottom-0 left-0 right-0 bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-3xl border-2 ${
                    isOpen ? "translate-y-0" : "translate-y-full"
                }`}
                style={{ maxHeight: "90vh" }}
            >
                <img
                    onClick={() => setIsOpen(false)}
                    src="/mycoupon__model__bar.svg"
                    alt="logo"
                    className="absolute top-2 left-[45%] cursor-pointer"
                />

                <div className="flex flex-col mb-6">
                    <div className="flex items-center w-full justify-center flex-col mt-10">
                        <div
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040 inset",
                            }}
                            className="rounded-[5px] py-4 px-3 "
                        >
                            <img
                                src="/mycoupon__barcode.svg"
                                alt="logo"
                                // className="w-full h-[40px] object-cover"
                            />
                        </div>
                        <img src="/mycoupon__dish.svg" alt="" />
                        <p className="text-[17px] text-[#696969] text-center my-2">
                            허니콤보세트
                        </p>
                        <h1 className="text-[50px] font-bold text-[#464441] text-center">
                            5%
                        </h1>
                        <p className="text-[25px] font-bold text-[#464441] text-center">
                            할인쿠폰
                        </p>
                    </div>
                    <div></div>

                    <div className="w-[90%] mx-3 mt-10">
                        <div className="flex flex-col items-center justify-center text-[15px] mb-6 w-full px-2 gap-1">
                            <div className="flex justify-between w-full items-start text-[#67697A]">
                                <p>저장날짜</p>
                                <p>2023. 01. 02</p>
                            </div>
                            <div className="flex justify-between w-full items-end text-[#CA1C1C]">
                                <p>만료기한</p>
                                <p>2024. 01. 02 까지</p>
                            </div>
                            <div className="flex justify-between w-full items-end text-[#406FC9]">
                                <p>잔액</p>
                                <p>20,000원</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] text-[#292929] font-bold text-[17px]"
                        >
                            닫 기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCouponModal;
