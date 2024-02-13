import React from 'react'
import Header from './Header'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from './Footer';


const GiftDetails = () => {
  return (
    <>
        <Header title="상세내역" />

        <div>

            <div className="flex flex-col items-center justify-center w-full gap-y-1">
                {/* Success */}
                <div className="flex items-center justify-center flex-col border-2 border-[#FED52A] w-[90%] rounded-[24px] py-4 gap-y-2 mb-4 mt-6">
                    <img src="/tick.svg" alt="" />
                    <h1 className="text-[18px] font-bold">사용 완료</h1>
                </div>
                
                <div className="flex items-left w-full px-4">
                    <h1 className="text-left text-[#464441] mb-2">2024. 1. 20 주문</h1>
                </div>
                <div
                    className="cursor-pointer w-[90%] rounded-xl shadow-md flex gap-x-3 p-3 mb-3"
                >
                    <img src="/dish.png" alt="" className="h-32" />
                    <div className="w-[95%] flex flex-col justify-center">
                        <h6 className="text-[11px] font-bold text-[#8D8D8D]">
                                BHC
                        </h6>
                        <p className="text-[14px] text-[#464441]">온 가족이 즐기는 따뜻하고 오붓 한 set!</p>
                    </div>
                </div>

                {/* Form start from here */}
                <Form className="px-3 py-3 w-full">
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
                                className="rounded-md py-4 bg-[#E9E9E9] focus:outline-none"
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
                                className="rounded-md py-4 bg-[#E9E9E9] focus:outline-none"
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
                                className="rounded-md py-4 bg-[#E9E9E9] focus:outline-none"
                                // value={formData.username}
                                // onChange={handleChange}
                                required
                            />
                        </FormGroup>
                </Form>

                <div className="w-full px-6 mb-4">
                    <div className="flex gap-4 mt-2 px-2">
                        <img src="/logo.png" alt="" className="h-14 bg-gray-300 rounded-md" />
                        <div className="flex flex-col justify-center">
                            <h1 className='font-[700]'>박정호</h1>
                            <p className='text-[12px] font-[400]'>010-2241-2223</p>
                        </div>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="w-[90%] border rounded-xl p-2 mb-4">
                    <h1 className="mt-2 mb-4 px-2 text-black font-bold">결제정보</h1>
                    <div className='flex flex-col items-center justify-center mb-6 w-full px-2 gap-2'>
                        <div className='flex justify-between w-full items-start font-[400]'>
                            <p className='text-[#464441]'>상품 가격</p>
                            <p>35,000 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end font-[400]'>
                            <p className='text-[#464441]'>할인금액</p>
                            <p>0 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end font-[400]'>
                            <p className='text-[#464441]'>배송비</p>
                            <p>3,000 원</p>
                        </div>
                        
                        <hr className='w-full h-[1px] bg-[#464441] my-2' />

                        <div className='flex justify-between w-full items-start font-[400]'>
                            <p className='text-[#464441]'>신용카드결제</p>
                            <p>35,000 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end'>
                            <p className='text-[16px] text-black'>총 결제금액</p>
                            <p className='font-[700]'>35,000 원</p>
                        </div>                   
                        
                    </div>
                </div>

            </div>
        </div>

        <Footer address={'mygift'} />
    </>
  )
}

export default GiftDetails