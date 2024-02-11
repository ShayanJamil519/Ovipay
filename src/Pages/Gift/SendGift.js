import React from 'react'
import Header from './Header'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const SendGift = () => {
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
            
            {/* Form start from here */}
            <Form className="py-1 w-full">
                        {/* Input fields one by one */}

                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="email"
                                className="font-extrabold text-[18px]"
                            >
                                받는사람 성함
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="박정호"
                                className="rounded-md py-4 focus:outline-none"
                                // value={formData.email}
                                // onChange={handleChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="username"
                                className="font-extrabold text-[18px]"
                            >
                                받는사람 전화번호
                            </Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="010-2241-2223"
                                className="rounded-md py-4 focus:outline-none"
                                // value={formData.username}
                                // onChange={handleChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="username"
                                className="font-extrabold text-[18px]"
                            >
                                선물 메세지
                            </Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="새해 복 많으받으3"
                                className="rounded-md py-4 focus:outline-none"
                                // value={formData.username}
                                // onChange={handleChange}
                                required
                            />
                </FormGroup>
            </Form>

            <div>
                <h1 className="text-[#0F9AFF] font-[700] mb-4 px-2">1명을 찾았습니다!</h1>
                <div className="flex gap-4 mt-2 px-2">
                    <img src="/logo.svg" alt="" className="h-12 bg-gray-300 rounded-md" />
                    <div className="flex flex-col justify-center">
                        <h1 className='font-[700]'>박정호</h1>
                        <p className='text-[12px] font-[400]'>010-2241-2223</p>
                    </div>
                </div>
                <div className="flex mt-4 items-center gap-2">
                    <h1 className='text-[#0F9AFF] text-[14px]'>이 사람에게 GIFT 선물하기</h1>
                    <img src="/check.svg" alt="" />
                </div>
            </div>

            {/* Add Card */}
            <div className="w-full">
                <h1 className="font-[600] my-4">간편 결제</h1>
                <div className="w-full flex flex-col py-14 items-center jutify-center border rounded-[20px]">
                    <img src="/plus_circle.svg" alt="" className="rounded-full border mb-2" />
                    <p className="text-[#A0A0A0] text-[14px] font-[400]">카드를 등록하고 간편하게 결제하세요</p>
                </div>
            </div>

            {/* Dropdown */}
            <div className="w-full">
                <h1 className="font-[600] mt-4 mb-3">일반 결제</h1>
                <select className='w-full border p-2 rounded-[10px] text-[#A19B91]'>
                    <option>은행 선택</option>
                </select>
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

export default SendGift