import React, { useState } from 'react'
import Header from './Header'
import { Button } from 'reactstrap'
import BankModal from './Modals/BankModal'
import SortModal from './Modals/SortModal'

const MethodThree = () => {

    const [isBankOpen, setIsBankOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <>
        <Header />

        <div className="flex flex-col p-4 gap-y-4">
            <div>
                <h1 className="text-[20px] font-[600]">GIFT 선물하기</h1>
            </div>

            {/* This div is for below the card 3 buttons */}
            <div className=''>
                <h2 className='font-bold text-[20px] py-3'>결제 방법</h2>

                {/* This div is for three buttons */}
                <div className='flex gap-x-3'>
                    {/* First Button */}
                    <button className='flex flex-col justify-start px-4 pt-3 border rounded-xl'>
                        <span className='h-[15px] w-[30px] bg-[#FED52A] pr-4 rounded-full'></span>
                        <p className='pt-3 pb-2 text-[14px] font-[400] text-black'>계좌이체</p>
                    </button>

                    {/* Second Button */}
                    <button className='flex flex-col justify-start px-4 pt-3 border rounded-xl'>
                        <span className='h-[15px] w-[30px] bg-[#DDDDDD] text-[#DDDDDD] pr-4 rounded-full'></span>
                        <p className='pt-3 pb-2 text-[14px] font-[400] text-black'>무통장 입금</p>
                    </button>

                    {/* Third Button */}
                    <button className='flex flex-col justify-start px-4 pt-3 border rounded-xl'>
                        <span className='h-[15px] w-[30px] bg-[#FED52A] pr-4 rounded-full'></span>
                        <p className='pt-3 pb-2 text-[14px] font-[400] text-black'>계좌이체</p>
                    </button>
                </div>
            </div>
            
            {/* Sort Modal Opens From here */}
            <div className="mt-4">
                <h1 className="mb-3 font-[600]">일반 결제</h1>
                <div className="flex justify-between border rounded-xl px-4 py-2" onClick={()=> setIsSortOpen(true)}>
                    <p className="text-[#A19B91]">은행 선택</p>
                    <img src="/arrow_down.svg" alt="" />
                </div>

                <div className='mt-2'>
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
            
        {/* Payment Info */}
        <div className="p-4">
            <div className='flex flex-col items-center justify-center mb-6 w-full px-2 gap-2 pt-3'>
                <div className='flex justify-between w-full items-start font-[400]'>
                    <p className='text-[#464441]'>상품명</p>
                    <p>오아 공기청정기 외 1</p>
                </div>
                <div className='flex justify-between w-full items-end font-[400]'>
                    <p className='text-[#464441]'>잔액</p>
                    <p>100,682원</p>
                </div>
                <div className='flex justify-between w-full items-end font-[400]'>
                    <p className='text-[#464441]'>총 상품금액</p>
                    <p>- 25,000원</p>
                </div>
                        
                <div className='flex justify-between w-full items-start font-[400] mt-3'>
                    <p>Total</p>
                    <p className='text-black text-[20px] font-[600]'>- 28,000원</p>
                </div>                      
            </div>

            <div className="mt-6 text-center flex flex-col">
                <Button
                    type="submit"
                    className="bg-[#FED52A] font-bold text-[18px] border-none px-24 py-[12px] rounded-full hover:bg-[#f2ce3e] text-black"
                >
                    결 제
                </Button>
            </div>
        </div>

        {isBankOpen && <BankModal isOpen={isBankOpen} setIsOpen={setIsBankOpen} />}
        {isSortOpen && <SortModal isOpen={isSortOpen} setIsOpen={setIsSortOpen} />}
    </>
  )
}

export default MethodThree