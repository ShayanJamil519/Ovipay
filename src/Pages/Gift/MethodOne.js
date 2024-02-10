import React from 'react'
import Header from './Header'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const MethodOne = () => {
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

            <div className='flex justify-between items-center w-full rounded-xl bg-[#FED52A] p-4 mt-2'>
                <p className='flex text-[12px] text-[#171717]'> <img src="/logo.svg" alt="" /> OviPay</p>
                <p className='text-[#292929] font-[700] text-[25px]'>100,682 원</p>
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
    </>
  )
}

export default MethodOne