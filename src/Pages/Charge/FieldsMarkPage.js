import React, { useState } from "react";
import { Input, Label } from "reactstrap";
import ConfirmationDone from "../../components/modals/ConfirmationDone";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import Header from "./Header";
import { IoChevronDownSharp } from "react-icons/io5";

export default function FieldsMarkPage() {
    const [confirm, setConfirm] = useState(false);
    const [done, setDone] = useState(false);

    return (
        <>
            <Header title="포인트 선물하기" showHamburger={true} />
            <div className="h-screen">
                {/* Card */}
                <div className="rounded-[20px] bg-[#fed52a] shadow pb-3 pt-4 px-6 w-[90%] mx-auto">
                    <div className="flex justify-center items-center py-2 px-3 w-fit rounded-full bg-[#fff]">
                        <p className="text-[10px] text-[#525252] font-bold">
                            MY Ovipay
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full  mt-6 text-black/75">
                        <div className="flex items-center ">
                            <p className="font-medium text-[14px]">잔 액</p>
                        </div>
                        <h5 className="text-[25px] text-[#292929] font-bold">
                            100,682 원
                        </h5>
                    </div>
                </div>

                {/* Middle of the page */}

                <div className=" mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">
                        선물 포인트 금액
                    </p>

                    <div className="relative">
                        <input
                            placeholder="선물 포인트 금액"
                            value="100,000"
                            className="rounded-[12px] text-[18px]  w-full py-[13px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                        />
                        <p className=" text-[14px] text-[#949494] absolute right-4 top-[18px]">
                            원
                        </p>
                    </div>
                </div>

                <div className=" mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">받는사람 성함</p>

                    <input
                        placeholder="이름을 입력해주세요."
                        value=""
                        name="이름을 입력해주세요."
                        className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                    />
                </div>

                <div className=" mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">
                        받는사람 전화번호
                    </p>

                    <input
                        placeholder="전화번호를 입력해주세요."
                        value=""
                        name="전화번호를 입력해주세요."
                        className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                    />
                </div>

                <div className=" mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">선물 메세지</p>

                    <input
                        placeholder="새해 복 많이받으3"
                        value=""
                        name="새해 복 많이받으3"
                        className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                    />
                </div>

                {/* This div is for Check Box */}

                {/* <div className="mt-[70px]">
                    <label
                        for="giftCheckbox"
                        className="pl-4 pr-2 font-semibold text-blue-400"
                    >
                        이 사람에게 포인트 선물하기
                    </label>
                    <input
                        type="checkbox"
                        id="giftCheckbox"
                        class="border-2 border-blue-300 p-2"
                    />
                </div> */}

                {/* The last button of the page */}
                <div className="mx-3 mt-5 ">
                    <button
                        onClick={() => setConfirm(true)}
                        className="bg-[#FED52A] py-3 px-3 mb-[50px] rounded-full font-bold text-[16px] w-full"
                    >
                        선물하기
                    </button>
                </div>
            </div>
            {done && <ConfirmationDone setDone={setDone} />}

            {confirm && (
                <ConfirmationModal setConfirm={setConfirm} setDone={setDone} />
            )}
        </>
    );
}
