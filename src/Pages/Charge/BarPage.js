import React, { useState } from "react";
import ConfirmationDone from "../../components/modals/ConfirmationDone";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import Header from "./Header";

export default function BarPage() {
    const [confirm, setConfirm] = useState(false);
    const [done, setDone] = useState(false);
    const [balance, setBalance] = useState(100682);

    const handleBalanceChange = (event) => {
        setBalance(parseInt(event.target.value, 10));
    };

    const toggleConfirm = () => {
        setConfirm(!confirm);
    };
    const toggleDone = () => {
        setConfirm(false);
        setDone(!done);
    };
    return (
        // This is the outer div of the bar page
        <>
            <Header />
            <div className="h-screen">
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
                <div className="items-center justify-center w-full px-4 my-4 text-black mt-10">
                    <div className="flex justify-between">
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
                <div className="flex justify-between px-3 py-2 mx-4 mt-5 mb-4 border-2 border-blue-300 rounded-md">
                    <input
                        placeholder="100,000"
                        className="flex-grow border-none focus:border-none focus:outline-none" 
                    />
                    {/* <p className="font bold text-[22px]">100,000</p> */}
                    <p className="font-bold text-[18px]">원</p>
                </div>


                {/* This div is for below the card 3 buttons */}
                <div className='mx-3'>
                    <h2 className='font-bold text-[20px] px-2 py-3 mt-4'>결제 방법</h2>

                    {/* This div is for three buttons */}
                    <div className='flex gap-x-3'>
                        {/* First Button */}
                        <button className='flex flex-col justify-start px-4 pt-3 border rounded-xl'>
                            <span className='h-[15px] w-[30px] bg-[#FED52A] pr-4 rounded-full'></span>
                            <p className='pt-3 pb-2 text-[13px] font-semibold'>계좌이체</p>
                        </button>

                        {/* Second Button */}

                        <button className='flex flex-col justify-start px-4 pt-3 border rounded-xl'>
                            <span className='h-[15px] w-[30px] bg-[#DDDDDD] text-[#DDDDDD] pr-4 rounded-full'></span>
                            <p className='pt-3 pb-2 text-[13px] font-semibold'>무통장 입금</p>
                        </button>

                    </div>
                </div>


                <div className="flex mx-3 flex-col my-4">
                    <div className="font-[600]">계좌</div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-[#676767] text-[14px]">충전계좌</p>
                        <div className="flex  gap-2 text-[#676767] text-[14px]">없음 <img src="/downarrow.svg" alt="" /></div>
                    </div>
                </div>

                <div className="flex mx-3 flex-col my-4">
                    <div className="font-[600]">계좌 연결</div>
                    <div className="flex flex-col mt-2">
                        <p className="text-[#DE2F2F] text-[12px]">연결된 계좌가 없으면</p>
                        <p className="text-[#DE2F2F] text-[12px]">필수로 입력하셔야 하는 항목입니다.</p>
                    </div>
                </div>

                <div className="flex mx-3 flex-col my-4 gap-y-3">
                    <div className="w-full font-[600]">
                        <select className="min-w-full text-[#A19B91] h-[45px] border border-[#ECECEA] px-2 rounded-xl" placeholder="은행 선택">
                            <option disabled>은행 선택</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-2">
                        <input
                            placeholder="계좌번호 입력"
                            className="flex-grow border border-[#ECECEA] px-2 h-[45px] rounded-xl" 
                        />
                    </div>
                </div>

                
                {/* The last button of the page */}

                <div className="mx-3 mt-16 bot">
                    <button
                        onClick={toggleConfirm}
                        className="bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px] w-full"
                    >
                        충전하기
                    </button>
                </div>
            </div>

            <ConfirmationDone isOpen={done} toggle={toggleDone} />
            <ConfirmationModal
                isOpen={confirm}
                toggle={toggleConfirm}
                toggleConfirm={toggleDone}
            />
        </>
    );
}
