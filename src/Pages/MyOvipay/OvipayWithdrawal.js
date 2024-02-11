import React, { useState } from "react";
import ConfirmationDone from "../../components/modals/ConfirmationDone";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import Header from "./Header";
import { IoChevronDownSharp } from "react-icons/io5";
import WithDrawModalOne from "./WithDrawModalOne";
import WithDrawModalTwo from "./WithDrawModalTwo";

export default function OvipayWithdrawal() {
    const [confirm, setConfirm] = useState(false);
    const [done, setDone] = useState(false);
    const [balance, setBalance] = useState(100682);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        // This is the outer div of the bar page
        <>
            <Header title="오비페이 출금" showHamburger={true} />
            <div className="w-[90%] mx-auto pt-3 pb-10">
                {/* Bar Code Container */}
                <div className="rounded-[20px] bg-[#fed52a] w-full shadow pb-3 pt-4 px-6">
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

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="pt-8 min-h-[70vh] relative  flex flex-col gap-6 "
                >
                    {/* 1 Div */}
                    <div className="">
                        <p className="font-bold text-[16px] mb-1">출금 금액</p>
                        <div className="flex justify-between items-center relative">
                            <input
                                placeholder="출금 금액"
                                value="100,000"
                                className="rounded-[12px] text-[14px]  w-full py-[13px] pl-3 pr-5 border-[1px]   focus:outline-[#0F9AFF] focus:border-[1px]"
                            />
                            <p className="font-semibold text-[14px] text-[#949494] absolute right-3">
                                원
                            </p>
                        </div>
                    </div>
                    {/* 2 Div */}
                    <div className="">
                        <p className="font-bold text-[14px] mb-1">은행선택</p>

                        <div className="relative">
                            <select
                                placeholder="출금 금액"
                                value="100,000"
                                className="rounded-[12px] text-[14px]  w-full py-[13px] px-3 border-[1px] appearance-none bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                            >
                                <option>은행 선택</option>
                                <option>은행 선택</option>
                            </select>
                            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                                <IoChevronDownSharp className="text-[#7D7D7D] text-[16px] " />
                            </span>
                        </div>
                    </div>
                    {/* 3 Div */}
                    <div className="">
                        <p className="font-bold text-[14px] mb-1">계좌번호</p>

                        <input
                            placeholder="계좌번호 입력"
                            value=""
                            className="rounded-[12px] text-[14px]  w-full py-[13px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                        />
                    </div>
                    {/* 4 Div */}
                    <div className="">
                        <p className="font-bold text-[14px] mb-1">예금주</p>

                        <input
                            placeholder="예금주명"
                            value=""
                            className="rounded-[12px] text-[14px]  w-full py-[13px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                        />
                    </div>

                    <div className="absolute w-full bottom-0 ">
                        <button
                            onClick={() => setConfirm(true)}
                            className="bg-[#FED52A] py-3 px-3 text-[#292929] rounded-[50px] font-bold text-[16px] w-full"
                        >
                            출금하기
                        </button>
                    </div>
                </form>
            </div>

            {confirm && (
                <WithDrawModalOne setConfirm={setConfirm} setDone={setDone} />
            )}

            {done && <WithDrawModalTwo setDone={setDone} />}
        </>
    );
}
