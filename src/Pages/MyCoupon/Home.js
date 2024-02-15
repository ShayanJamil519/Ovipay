import React, { useState } from "react";
import Header from "./Header";
import verified from "../../assets/img/coupon-form-verified.png";
import form from "../../assets/img/coupon-form.png";
import { IoCopyOutline } from "react-icons/io5";
import product from "../../assets/img/card image gift.png";
import MyCouponModal from "./MyCouponModal";
import ConfirmMyCouponModal from "./ConfirmMyCouponModal.js";
import DoneMyCouponModal from "./DoneMyCouponModal.js";

const couponsData = [
    {
        imgSrc: product,
        title: "BHC",
        desc: "허니콤보세트",
        discount: "5% 할인",
        expired: false,
    },
    {
        imgSrc: product,
        title: "BHC",
        desc: "허니콤보세트",
        discount: "5% 할인",
        expired: true,
    },
    {
        imgSrc: product,
        title: "오비페이",
        desc: "이벤트 참여",
        discount: "10,000원",
        expired: false,
    },
];

export default function MyCouponPage() {
    const [activeButton, setActiveButton] = useState("used");
    const [isAffliateCouponModalOpen, setIsAffliateCouponModalOpen] =
        useState(false);
    const [confirm, setConfirm] = useState(false);
    const [done, setDone] = useState(false);
    const [isPopUpVisible1, setIsPopUpVisible1] = useState(false);
    const [isPopUpVisible2, setIsPopUpVisible2] = useState(false);

    const handleShowPopUp1 = () => {
        setIsPopUpVisible1(!isPopUpVisible1);
    };
    const handleShowPopUp2 = () => {
        setIsPopUpVisible2(!isPopUpVisible2);
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText("ND81KW92MD1281JDOW1");
    };
    return (
        <>
            <Header title="MY COUPON" showHamburger={true} />
            <div className="py-4 bg-[#FCFCFC] min-h-[100vh]">
                <div className="flex flex-col mx-3 mb-4 bg-white shadow-sm rounded-xl">
                    <p className="pt-3 pl-3 text-[14px] text-[#0F1121]">
                        쿠폰 코드로 등록하기
                    </p>

                    <div className="flex justify-between items-center py-3 mt-2 mb-4 mx-3 px-3 border-[1px] border-[#F3F3FA] rounded-[8px] ">
                        <p className="text-[12px] text-[#ACACAC] ">
                            쿠폰번호를 입력하세요.
                        </p>
                        <button
                            onClick={() => setConfirm(true)}
                            className="bg-[#F6F6F6] rounded-[8px] px-[30px] py-2 text-[10px] text-[#525252] font-bold"
                        >
                            등록하기
                        </button>
                    </div>
                </div>

                <div className="flex justify-between text-[14px] px-1 py-1 mx-3  rounded-full bg-[#f1f1f8]">
                    <button
                        onClick={() => setActiveButton("used")}
                        className={
                            activeButton === "used"
                                ? "active-button bg-white w-1/2 text-[#0F1121]  py-3 rounded-full"
                                : "pl-5"
                        }
                    >
                        사용한 쿠폰
                    </button>
                    <button
                        onClick={() => setActiveButton("unused")}
                        className={
                            activeButton === "unused"
                                ? "active-button bg-white w-1/2 py-3 text-[#67697A] rounded-full"
                                : "pr-5"
                        }
                    >
                        미 사용 쿠폰
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center mx-3 mb-5 mt-5 gap-y-4">
                    {couponsData.map((item, index) => (
                        <div
                            // onClick={handleTrue}

                            style={{
                                boxShadow: "0px 2px 48px 0px #0000000A",
                            }}
                            className="cursor-pointer relative rounded-xl w-full  flex justify-start items-center gap-x-3 py-3 pl-3 pr-2  "
                        >
                            <p
                                className={`absolute top-3 right-3 ${
                                    activeButton === "used" && item.expired
                                        ? "text-[#C5C5C5]"
                                        : activeButton === "used"
                                        ? "text-[#5966D7]"
                                        : "text-[#DC3131]"
                                } font-semibold text-[11px] cursor-pointer`}
                            >
                                {activeButton === "used"
                                    ? " 사용완료"
                                    : "기간 만료 30일 남음"}
                            </p>

                            <div
                                onClick={() => {
                                    if (activeButton === "unused") {
                                        setIsAffliateCouponModalOpen(true);
                                    }
                                }}
                                className={`absolute bottom-3 right-3 rounded-full ${
                                    activeButton === "used"
                                        ? "bg-[#F2F2F2]"
                                        : "bg-[#FED52A]"
                                }  px-3 py-1`}
                            >
                                <p className=" text-[12px] text-[#272727]">
                                    {activeButton === "used"
                                        ? " 상세내역"
                                        : "쿠폰보기"}
                                </p>
                            </div>

                            <img
                                src={item.imgSrc}
                                alt="logo"
                                className="w-[94px]"
                            />
                            <div className="my-3">
                                <p className="text-[#8D8D8D] text-[11px]">
                                    {item.title}
                                </p>
                                <h6 className="text-[14px] text-[#464441] mt-1">
                                    {item.desc}
                                </h6>
                                <p className="text-[18px] font-extrabold mt-[5px]">
                                    {item.discount}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* This is for onclick first button */}
                {/* {activeButton === "used" && (
                    <div className="flex justify-between px-2 mt-5">
                        <div className="w-full mx-3 shadow-lg cursor-pointer bg-slate-200">
                            <div
                                onClick={handleShowPopUp1}
                                className="bg-[#FED52A] pt-4 pl-3 rounded-t-xl text-white "
                            >
                                <p>이벤트 참여</p>
                                <p>10,000원</p>
                            </div>
                            <p
                                onClick={handleShowPopUp2}
                                className="pt-2 pb-3 pl-3 bg-white rounded-b-xl"
                            >
                                사용완료
                            </p>
                        </div>

                        <div className="w-full mx-3 shadow-lg cursor-pointer bg-slate-200">
                            <div
                                onClick={handleShowPopUp1}
                                className="bg-[#FED52A] pt-4 pl-3 rounded-t-xl text-white "
                            >
                                <p>후기 작성</p>
                                <p>500원</p>
                            </div>

                            <p
                                onClick={handleShowPopUp2}
                                className="pt-2 pb-3 pl-3 bg-white rounded-b-xl"
                            >
                                기간초과
                            </p>
                        </div>
                    </div>
                )} */}

                {/* This is for onclick second button */}

                {/* {activeButton === "unused" && (
                    <div className="flex justify-between px-2 mt-5 cursor-pointer">
                        <div className="w-full mx-3 shadow-lg bg-slate-200">
                            <div
                                onClick={handleShowPopUp1}
                                className="bg-[#FED52A]  pt-4 pl-3 rounded-t-xl text-white "
                            >
                                <p>이벤트 참여</p>
                                <p>10,000원</p>
                            </div>
                            <p
                                onClick={handleShowPopUp2}
                                className="pt-2 pb-3 pl-3 bg-white rounded-b-xl"
                            >
                                남은기간 15일
                            </p>
                        </div>

                        <div className="w-full mx-3 shadow-lg cursor-pointer bg-slate-200">
                            <div
                                onClick={handleShowPopUp1}
                                className="bg-[#FED52A]  pt-4 pl-3 rounded-t-xl text-white "
                            >
                                <p>후기 작성</p>
                                <p>500원</p>
                            </div>

                            <p
                                onClick={handleShowPopUp2}
                                className="pt-2 pb-3 pl-3 bg-white rounded-b-xl"
                            >
                                남은기간 7일
                            </p>
                        </div>
                    </div>
                )} */}

                {/* {isPopUpVisible1 && (
                    <div className="fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center w-full pb-2 text-center bg-white border-t-2 rounded-t-2xl border-[#fed52a]">
                        <div
                            onClick={handleShowPopUp1}
                            className="flex items-center justify-center w-full py-3 mb-3 cursor-pointer"
                        >
                            <div className="w-10 h-[5px] bg-gray-400 rounded-md"></div>
                        </div>

                        <img src={form} alt="scan code bar" className="mb-3" />
                        <h1 className="font-bold text-[18px] py-1">
                            이벤트 참여 쿠폰 🎉
                        </h1>
                        <p className="py-1 font-semibold text-gray-500 text-[13px]">
                            10,000원
                        </p>
                        <p className="py-1 font-semibold text-gray-500 text-[13px]">
                            이벤트에 참여해주셔서 감사합니다!
                        </p>
                        <h3 className="font-bold text-[18px] my-4">
                            남은기간 : 사용완료
                        </h3>
                        <button
                            className="w-[80%] bg-[#FED52A] font-bold text-[18px] rounded-full px-5 py-3"
                            onClick={handleShowPopUp1}
                        >
                            닫 기
                        </button>
                    </div>
                )} */}

                {/* {isPopUpVisible2 && (
                    <div className="fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center w-full pb-2 text-center bg-white border-t-2 rounded-t-2xl border-[#fed52a]">
                        <div
                            onClick={handleShowPopUp2}
                            className="flex items-center justify-center w-full py-3 mb-3 cursor-pointer"
                        >
                            <div className="w-10 h-[5px] bg-gray-400 rounded-md"></div>
                        </div>

                        <img
                            src={verified}
                            alt="scan code bar"
                            className="mb-3"
                        />
                        <h1 className="font-bold text-[18px] py-1">
                            이벤트 참여 쿠폰 🎉
                        </h1>
                        <p className="py-1 font-semibold text-gray-500 text-[13px]">
                            10,000원
                        </p>
                        <p className="py-1 font-semibold text-gray-500 text-[13px]">
                            이벤트에 참여해주셔서 감사합니다!
                        </p>
                        <h3 className="font-bold text-[18px] my-4">
                            남은기간 : 15일
                        </h3>
                        <div className="w-[80%] bg-gray-200 rounded-xl px-3 py-3 my-3 items-center flex justify-between">
                            <p>ND81KW92MD1281JDOW1</p>
                            <IoCopyOutline
                                size={25}
                                // onClick={handleCopyCode}
                                className="cursor-pointer"
                            />
                        </div>
                        <button
                            className="w-[80%] bg-[#FED52A] font-bold text-[18px] rounded-xl px-5 py-3"
                            onClick={handleShowPopUp2}
                        >
                            닫 기
                        </button>
                    </div>
                )} */}
            </div>

            {isAffliateCouponModalOpen && (
                <MyCouponModal
                    isOpen={isAffliateCouponModalOpen}
                    setIsOpen={setIsAffliateCouponModalOpen}
                />
            )}

            {confirm && (
                <ConfirmMyCouponModal
                    setConfirm={setConfirm}
                    setDone={setDone}
                />
            )}

            {done && <DoneMyCouponModal setDone={setDone} />}
        </>
    );
}
