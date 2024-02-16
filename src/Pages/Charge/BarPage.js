import React, { useState } from "react";
import ConfirmationDone from "../../components/modals/ConfirmationDone";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import Header from "./Header";
import { Link } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";
import { goldenGradient, silverGradient } from "../../utils";
import { useHistory } from "react-router-dom";

export default function BarPage() {
    const history = useHistory();
    const [confirm, setConfirm] = useState(false);
    const [currentOption, setCurrentOption] = useState(0);
    const [done, setDone] = useState(false);
    const [balance, setBalance] = useState(100682);

    const handleBalanceChange = (event) => {
        setBalance(parseInt(event.target.value, 10));
    };

    return (
        // This is the outer div of the bar page
        <>
            <Header title="오비페이 충전" showHamburger={true} />
            <div className="min-h-screen">
                {/* This dic is for Card */}

                <div className="bg-[#FED52A] rounded-xl mt-5 mx-4 shadow-xl border-b-3">
                    <div className="flex justify-center w-full pt-3 gap-x-1">
                        {/* Inner div for 3 buttons */}
                        <button className="bg-white font-bold text-[11px] rounded-[10px] px-[20px] py-[8px] m-1 ">
                            충 전 내 역
                        </button>
                        <button className="bg-white font-bold text-[11px] rounded-[10px] px-[20px] py-[8px] m-1">
                            출 금 내 역
                        </button>
                        <button className="bg-white font-bold text-[11px] rounded-[10px] px-[20px] py-[8px] m-1">
                            선 물 내 역
                        </button>
                    </div>

                    {/* Last div for the cash */}

                    <div className="flex items-center justify-around w-full px-1 pt-4 pb-2">
                        <p className="font-bold">잔 액</p>
                        <p className="font-bold text-[24px]">100,682 원</p>
                    </div>
                </div>

                {/* Bar */}
                <div className="items-center justify-center w-full px-4 mb-4 text-black mt-10">
                    <div className="flex justify-between items-center text-[10px] text-[#8A8A8E]">
                        <p>10,000 원</p>
                        <p>500,000 원</p>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="200000"
                        step="100"
                        value={balance}
                        onChange={handleBalanceChange}
                        className="w-full"
                    />

                    {/* <p className="text-[18px] font-bold">{balance.toLocaleString()} 원</p> */}
                </div>

                {/* middle of the page */}

                <div className=" mx-4 my-4">
                    <p className="font-bold text-[14px] mb-2">직접 입력</p>

                    <div className="relative">
                        <input
                            placeholder="직접 입력"
                            value="100,000"
                            className="rounded-[12px] text-[18px]  w-full py-[13px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                        />
                        <p className=" text-[14px] text-[#949494] absolute right-4 top-[18px]">
                            원
                        </p>
                    </div>
                </div>

                {/* This div is for below the card 3 buttons */}
                <div className="mx-3">
                    <h2 className="font-bold text-[20px] px-2 py-3 mt-4">
                        결제 방법
                    </h2>

                    {/* This div is for three buttons */}
                    <div className="flex gap-x-3">
                        {/* First Button */}
                        <button
                            className={`flex min-w-[98px] flex-col justify-start px-3 pt-3 ${
                                currentOption === 0
                                    ? "border-[1px] border-[#FED52A]"
                                    : "border"
                            } rounded-xl`}
                            onClick={() => setCurrentOption(0)}
                        >
                            <span
                                className={`h-[15px] w-[30px] pr-4 rounded-full`}
                                style={
                                    currentOption === 0
                                        ? goldenGradient
                                        : silverGradient
                                }
                            ></span>
                            <p className="pt-3 pb-2 text-[14px] font-[400] text-black">
                                계좌이체
                            </p>
                        </button>

                        {/* Second Button */}

                        <button
                            className={`flex flex-col justify-start px-3 pt-3 ${
                                currentOption === 1
                                    ? "border-[1px] border-[#FED52A]"
                                    : "border"
                            } rounded-xl`}
                            onClick={() => setCurrentOption(1)}
                        >
                            <span
                                className={`h-[15px] w-[30px] pr-4 rounded-full`}
                                style={
                                    currentOption === 1
                                        ? goldenGradient
                                        : silverGradient
                                }
                            ></span>
                            <p className="pt-3 pb-2 text-[14px] font-[400] text-black">
                                무통장 입금
                            </p>
                        </button>
                    </div>
                </div>

                {
                    currentOption === 0 ?
                    <>
                        <div className="flex mx-3 flex-col my-4">
                            <div className="font-[600]">계좌</div>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-[#676767] text-[14px]">충전계좌</p>
                                <Link
                                    to="/charge/confirmation"
                                    className="flex  gap-2 text-[#676767] text-[14px]"
                                >
                                    없음 <img src="/downarrow.svg" alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex mx-3 flex-col my-4">
                            <div className="font-[600]">계좌 연결</div>
                            <div className="flex flex-col mt-2">
                                <p className="text-[#DE2F2F] text-[12px]">
                                    연결된 계좌가 없으면
                                </p>
                                <p className="text-[#DE2F2F] text-[12px]">
                                    필수로 입력하셔야 하는 항목입니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex mx-3 flex-col my-4 gap-y-3">
                            <div className="relative">
                                <select
                                    placeholder="은행 선택"
                                    value="100,000"
                                    className="rounded-[12px] text-[#A19B91] text-[14px]  w-full py-[13px] px-3 border-[1px] appearance-none bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                                >
                                    <option>은행 선택</option>
                                    <option>은행 선택</option>
                                </select>
                                <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                                    <IoChevronDownSharp className="text-[#A19B91] text-[16px] " />
                                </span>
                            </div>

                            <div className="flex mt-2">
                                <input
                                    placeholder="계좌번호 입력"
                                    value=""
                                    name="계좌번호 입력"
                                    className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                                />
                                <button className="bg-[#FED52A] w-[150px] ml-3 text-[14px] font-bold rounded-full">등록</button>
                            </div>
                        </div>
                    </>
                    :
                    <div className="px-3">
                        <div className="mt-4">
                            <h1 className="mb-3 font-[600]">입금은행</h1>
                            <div className="relative">
                                <select
                                    placeholder="은행 선택"
                                    value="100,000"
                                    className="rounded-[12px] text-[#A19B91] text-[14px]  w-full py-[13px] px-3 border-[1px] appearance-none bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                                >
                                    <option>NH 농협</option>
                                    <option>카카오뱅크</option>
                                    <option>KB국민</option>
                                    <option>신한</option>
                                    <option>토스뱅크</option>
                                    <option>우리</option>
                                    <option>IBK기업</option>
                                    <option>하나</option>
                                    <option>새마을</option>
                                    <option>부산</option>
                                    <option>대구</option>
                                    <option>케이뱅크</option>
                                </select>
                                <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                                    <IoChevronDownSharp className="text-[#A19B91] text-[16px] " />
                                </span>
                            </div>

                            <div className='mt-4'>
                                <div className="flex gap-3 items-center mb-1">
                                    <input type="checkbox" className='h-4 w-4' />
                                    <p className='text-[14px] font-[700]'>ATM으로 입금</p>
                                </div>
                                <p className='text-[#A7A7A7]'>* ATM은 동전을 입금할 수 없습니다.</p>
                                <div className='px-3 mt-3'>
                                    <p className='mb-1'>입금자명을 입력해주세요.</p>
                                    <input type="text" className='border w-full rounded-lg p-2' placeholder="이OO" />
                                </div>
                            </div>
                        </div>
                    </div>
                }


                {/* The last button of the page */}
                <div className="w-[90%] mx-auto mb-10 mt-16">
                    <button
                        onClick={() => history.push(currentOption === 0 ? '/charge/account-transfer' : '/charge/account-transfer-four')}                        className=" bg-[#FED52A] py-3 px-3 rounded-[50px] font-bold text-[16px] w-full"
                    >
                        충전하기
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
