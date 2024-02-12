import React, { useState } from 'react'
import Header from './Header'
import { Button } from 'reactstrap'
import BankModal from './Modals/BankModal'
import SortModal from './Modals/SortModal'

const Payment = () => {

    const [currentOption, setCurrentOption] = useState(0);
    const [isBankModalOpen, setIsBankModalOpen] = useState(false);
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);

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
                        <button className='flex flex-col justify-start px-3 pt-3 border rounded-xl' onClick={()=> setCurrentOption(0)}>
                            <span className={`h-[15px] w-[30px] ${currentOption === 0 ? 'bg-[#FED52A]' : 'bg-[#DDDDDD]'} pr-4 rounded-full`}></span>
                            <p className='pt-3 pb-2 text-[14px] font-[400] text-black'>오비페이</p>
                        </button>

                        {/* Second Button */}
                        <button className='flex flex-col justify-start px-3 pt-3 border rounded-xl' onClick={()=> setCurrentOption(1)}>
                            <span className={`h-[15px] w-[30px] ${currentOption === 1 ? 'bg-[#FED52A]' : 'bg-[#DDDDDD]'} pr-4 rounded-full`}></span>
                            <p className='pt-3 pb-2 text-[14px] font-[400] text-black'>신용카드</p>
                        </button>

                        {/* Third Button */}
                        <button className='flex flex-col justify-start px-3 pt-3 border rounded-xl' onClick={()=> setCurrentOption(2)}>
                            <span className={`h-[15px] w-[30px] ${currentOption === 2 ? 'bg-[#FED52A]' : 'bg-[#DDDDDD]'} pr-4 rounded-full`}></span>
                            <p className='pt-3 pb-2 text-[14px] font-[400] text-black'>무통장 입금</p>
                        </button>

                    </div>
            </div>

            {
                currentOption === 0 &&
                <div className='flex justify-between items-center w-full rounded-xl bg-[#FED52A] p-4 mt-2'>
                    <p className='flex text-[12px] text-[#171717]'> <img src="/logo.svg" alt="" /> OviPay</p>
                    <p className='text-[#292929] font-[700] text-[25px]'>100,682 원</p>
                </div>
            }

            {
                currentOption === 1 &&
                <>
                    <div className="w-full">
                        <h1 className="font-[600] my-4">간편 결제</h1>
                        <div className="w-full flex flex-col py-14 items-center jutify-center border rounded-[20px]" onClick={()=> setIsBankModalOpen(true)}>
                            <img src="/plus_circle.svg" alt="" className="rounded-full border mb-2" />
                            <p className="text-[#A0A0A0] text-[14px] font-[400]">카드를 등록하고 간편하게 결제하세요</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h1 className="mb-3 font-[600]">일반 결제</h1>
                        <div className="flex justify-between border rounded-xl px-4 py-2" onClick={()=> setIsSortModalOpen(true)}>
                            <p className="text-[#A19B91]">은행 선택</p>
                            <img src="/arrow_down.svg" alt="" />
                        </div>
                    </div>
                </>
            }

            {
                currentOption === 2 &&
                <div className="mt-4">
                    <h1 className="mb-3 font-[600]">입금은행</h1>
                    <div className="flex justify-between border rounded-xl px-4 py-2">
                        <p className="text-[#A19B91]">은행 선택</p>
                        <img src="/arrow_down.svg" alt="" />
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
            }

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
                    <div className='flex justify-between w-full items-end font-[400]'>
                        <p className='text-[#464441]'>배송비</p>
                        <p>3,000 원</p>
                    </div>
                        
                    <hr className='w-full h-[1px] bg-[#464441] my-2' />

                    <div className='flex justify-between w-full items-start font-[400]'>
                        <p>Total</p>
                        <p className='text-black text-[20px] font-600'>- 28,000원</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[#406FC9]'>
                        <p className='text-[16px]'>총 결제금액</p>
                        <p className='font-[600] text-[20px]'>72,682원</p>
                    </div>                       
                </div>

                {/* Sign in button */}
                <div className="mt-6 text-center flex flex-col">
                        <Button
                            type="submit"
                            className="bg-[#FED52A] font-bold text-[18px] border-none px-24 py-[12px] rounded-full hover:bg-[#f2ce3e] text-black"
                        >
                            결 제
                        </Button>
                </div>
            </div>

            {isBankModalOpen && <BankModal isOpen={isBankModalOpen} setIsOpen={setIsBankModalOpen} />}
            {isSortModalOpen && <SortModal isOpen={isSortModalOpen} setIsOpen={setIsSortModalOpen}/>}
    </>
  )
}

export default Payment