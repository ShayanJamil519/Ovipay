import React, { useState } from "react";
import { Input, Label } from "reactstrap";
import ConfirmationDone from "../../components/modals/ConfirmationDone";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import Header from "./Header";
import { IoChevronDownSharp } from "react-icons/io5";

export default function FieldsPage() {
    const [options, setOptions] = useState("");
    const [name, setName] = useState("");

    const [confirm, setConfirm] = useState(false);
    const [done, setDone] = useState(false);

    return (
        <>
            <Header title="오비페이 출금" showHamburger={true} />
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
                    <p className="font-bold text-[14px] mb-2">출금 금액</p>

                    <div className="relative">
                        <input
                            placeholder="출금 금액"
                            value="100,000"
                            className="rounded-[12px] text-[18px]  w-full py-[13px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                        />
                        <p className=" text-[14px] text-[#949494] absolute right-4 top-[18px]">
                            원
                        </p>
                    </div>
                </div>

                <div className="mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">은행선택</p>

                    <div className="relative">
                        <select
                            placeholder="은행선택"
                            value="은행 선택"
                            className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px] appearance-none bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                        >
                            <option value="South Korea">우리은행</option>
                            <option value="United States">우리은행</option>
                            <option value="United Kingdom">우리은행</option>
                        </select>
                        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                            <IoChevronDownSharp className="text-[#7D7D7D] text-[16px] " />
                        </span>
                    </div>
                </div>

                <div className=" mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">계좌번호</p>

                    <input
                        placeholder="계좌번호 입력"
                        value="계좌번호 입력"
                        name="계좌번호 입력"
                        className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                    />
                </div>

                <div className=" mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">예금주</p>

                    <input
                        placeholder="예금주명"
                        value="예금주명"
                        name="예금주명"
                        className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                    />
                </div>

                {/* The last button of the page */}
                <div className="mx-3 mt-[70px]  bot">
                    <button
                        onClick={() => setConfirm(true)}
                        className="bg-[#FED52A] py-3 px-3 mb-[40px] rounded-full font-bold text-[16px] w-full"
                    >
                        출금하기
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
