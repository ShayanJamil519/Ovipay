import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './Header';
import BankModal from '../Gift/Modals/BankModal';
import SortModal from '../Gift/Modals/SortModal';
import LocationModal from '../Gift/Modals/LocationModal';
import CardPaymentPopup from './Popups/CardPaymentPopup';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { goldenGradient, silverGradient } from '../../utils';
import { MdOutlineRadioButtonChecked } from "react-icons/md";


export default function PayWithCreditCard() {
    const [showInputs, setShowInputs] = useState(false);
    const [isBankOpen, setIsBankOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(0);

    return (
        <>
        <Header title="쇼 핑" showHamburger={true} />
        
        <div>

            {/* This div is for heading and description */}
            <div className='pt-3 pl-3 px-4'>
                <h1 className='font-semibold text-[20px]'>결제하기</h1>
                <p className='mt-3 font-semibold text-[16px]'>배달 주소</p>
            </div>

            {/* This div is for Cards */}

            <div className='mx-3'>
                {/* First Card */}
                <div className='flex items-center justify-between px-4 py-3 mt-5 shadow-md rounded-xl' onClick={() =>setIsLocationOpen(true)} style={{boxShadow: '10px 24px 54px 0px #0000000F'}}>
                    <div>
                        <p className='text-[16px] font-bold'>Home</p>
                        <p className='text-[#AAAAAA] text-[12px] font-[400]'>서울특별시 홍길동로 삼겹살</p>
                    </div>
                    
                    <MdOutlineRadioButtonChecked className='text-[#aaaaaa]' />

                    <label
                        id="homeLabel"
                        htmlFor="homeRadio"
                        className='p-1 radio-label' 
                    ></label>
                </div>

                {/* Second Card */}
                <div className='flex items-center justify-between px-4 py-3 mt-3 shadow-md rounded-xl' style={{boxShadow: '10px 24px 54px 0px #0000000F'}}>
                    <div>
                    <p className='text-[16px] font-bold'>Office</p>
                    <p className='text-[#AAAAAA] text-[12px] font-[400]'>서울특별시 홍길동로 여기는 회사</p>
                    </div>
                    <input
                    type="radio"
                    id="officeRadio"
                    name="location"
                    value="office"
                    className='p-1 sr-only' 
                    />
                    <label
                    id="officeLabel"
                    htmlFor="officeRadio"
                    className='p-1 radio-label' 
                    ></label>
                </div>
            </div>

            {/* This div is for below the card 3 buttons */}

            <div className='mx-3'>
                <h2 className='font-bold text-[16px] px-2 py-3 mt-4'>결제 방법</h2>

                {/* This div is for three buttons */}
                <div className='flex justify-between gap-x-1'>
                    {/* First Button */}
                    <button className={`flex flex-col w-[30%] justify-start px-2 pt-3 ${currentOption === 0 ? 'border-[2px] border-[#FED52A]' : 'border'} rounded-xl`} onClick={()=> setCurrentOption(0)}>
                        <span className={`h-[15px] w-[30px] pr-4 rounded-full`} style={currentOption === 0 ? goldenGradient : silverGradient}></span>
                        <p className='pt-3 pb-2 text-[13px] font-semibold'>오비페이</p>
                    </button>

                    {/* Second Button */}

                    <button className={`flex flex-col w-[30%] justify-start px-2 pt-3 ${currentOption === 1 ? 'border-[2px] border-[#FED52A]' : 'border'} rounded-xl`} onClick={()=> setCurrentOption(1)}>
                        <span className={`h-[15px] w-[30px] pr-4 rounded-full`} style={currentOption === 1 ? goldenGradient : silverGradient}></span>
                        <p className='pt-3 pb-2 text-[13px] font-semibold'>신용카드</p>
                    </button>

                    {/* Third Button */}

                    <button className={`flex flex-col w-[30%] justify-start px-2 pt-3 ${currentOption === 2 ? 'border-[2px] border-[#FED52A]' : 'border'} rounded-xl`} onClick={()=> setCurrentOption(2)}>
                        <span className={`h-[15px] w-[30px] pr-4 rounded-full`} style={currentOption === 2 ? goldenGradient : silverGradient}></span>
                        <p className='pt-3 pb-2 text-[13px] font-semibold'>무통장 입금</p>
                    </button>
                </div>

                {
                    currentOption === 0 &&
                    <div className='flex justify-between items-center w-full rounded-xl bg-[#FED52A] p-4 mt-4'>
                        <p className='flex text-[12px] text-[#171717] gap-1'> <img src="/ovipayLogo.svg" alt="" className="h-[20px]" /> OviPay</p>
                        <p className='text-[#292929] font-[700] text-[25px]'>100,682 원</p>
                    </div>
                }
                
                {
                currentOption === 1 &&
                <>
                    <h1 className="font-[600] my-4">간편 결제</h1>
                    <Swiper
                    slidesPerView={1}
                    pagination={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className=" w-full  "
                >
                    {[1, 2, 3].map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center "
                        >
                            <div className="w-full">
                                <div className="w-full flex flex-col py-14 items-center jutify-center border rounded-[20px]" onClick={()=> setIsBankOpen(true)}>
                                    <img src="/plus_circle.svg" alt="" className="rounded-full border mb-2" />
                                    <p className="text-[#A0A0A0] text-[14px] font-[400]">카드를 등록하고 간편하게 결제하세요</p>
                                </div>
                            </div>
                                </SwiperSlide>
                            ))}
                            <div className="h-[40px] "></div>
                    </Swiper>

                    <div className="mt-4">
                        <h1 className="mb-3 text-[14px] font-[600]">일반 결제</h1>
                        <div className="flex justify-between border rounded-xl px-4 py-2" onClick={()=> setIsFilterOpen(true)}>
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
                            <p className='text-[14px] font-[400] text-[#000000]'>ATM으로 입금</p>
                        </div>
                        <p className='text-[#A7A7A7] text-[14px] font-[400]'>* ATM은 동전을 입금할 수 없습니다.</p>
                        <div className='px-3 mt-3'>
                            <p className='mb-1 text-[12px] font-[400]'>입금자명을 입력해주세요.</p>
                            <input type="text" className='border w-full rounded-lg p-2 text-[12px]' placeholder="이OO" />
                        </div>
                    </div>
                </div>
            }
            </div>

            {/* Radio Options */}
            <div className='mt-4'>
              {/* First Radio Button */}
              <div className='flex items-center px-4 py-3 rounded-xl gap-3'>
                  <input
                      type="radio"
                      id="receiptRadio"
                      name="receipt"
                      value="home"
                      className='p-1 sr-only' 
                  />
                  <label
                      id="homeLabel"
                      htmlFor="receiptRadio"
                      className='p-1 radio-label' 
                  ></label>
                  <p className='font-[600]'>현금영수증 발행 안함</p>
              </div>

              {/* Second Radio Button */}
              <div>
                <div className='flex items-center px-4 py-3 rounded-xl gap-3'>
                    <input
                        type="radio"
                        id="businessRadio"
                        name="business"
                        value="home"
                        className='p-1 sr-only' 
                    />
                    <label
                        id="homeLabel"
                        htmlFor="businessRadio"
                        className='p-1 radio-label' 
                    ></label>
                    <p className='font-[600]'>현금영수증 발행 안함</p>
                </div>
                <div className="px-10">
                  <p className='font-[400] text-[12px]'>휴대폰 번호를 입력해주세요.</p>
                  <input type="text" className='w-[90%] rounded-lg border p-2 mt-2 focus:outline-[#0F9AFF]' />
                </div>
              </div>

              {/* Third Radio Button */}
              <div>
                <div className='flex items-center px-4 py-3 rounded-xl gap-3'>
                    <input
                        type="radio"
                        id="homeRadio"
                        name="email"
                        value="home"
                        className='p-1 sr-only' 
                    />
                    <label
                        id="homeLabel"
                        htmlFor="homeRadio"
                        className='p-1 radio-label' 
                    ></label>
                    <p className='font-[600]'>사업자증빙용 / 세금계산서</p>
                </div>
                <div className="px-10">
                  <p className='font-[400] text-[12px]'>사업자 상호를 기재해주세요.</p>
                  <input type="text" placeholder="사업자 상호" className='w-[90%] rounded-lg border p-2 mt-2 focus:outline-[#0F9AFF]' />
                </div>
                <div className="px-10 mt-4">
                  <p className='font-[400] text-[12px]'>휴대폰 번호를 입력해주세요.</p>
                  <input type="text" placeholder="사업자등록번호" className='w-[90%] rounded-lg border p-2 mt-2 focus:outline-[#0F9AFF]' />
                </div>
                <div className="px-10 mt-4">
                  <p className='font-[400] text-[12px]'>휴대폰 번호를 입력해주세요.</p>
                  <input type="text" placeholder="000000@naver.com" className='w-[90%] rounded-lg border p-2 mt-2 focus:outline-[#0F9AFF]' />
                </div>
              </div>
            </div>


            <div>
                {showInputs && (
                    <Form className='mx-5 mt-16'>
                        {/* First Radio Button */}
                        <div className='flex'>
                            <input
                                type="radio"
                                id="firstButtonRadio"
                                name="location"
                                value="firstbutton"
                                className='p-1'
                                />
                            <label
                                className='p-1 radio-label' 
                                htmlFor="firstButtonRadio"
                                ></label>
                            <p className='font-extrabold text-[18px] pl-2 '>서울특별시 홍길동로 삼겹살</p>
                        </div>

                        {/* Second Radio Button */}
                        <div className='flex mt-[29px]'>
                            <input
                                type="radio"
                                id="secondButtonRadio"
                                name="location"
                                value="second"
                                className='p-1'
                                />
                            <label
                                className='p-1 radio-label' 
                                htmlFor="secondButtonRadio"
                                ></label>
                            <p className='font-extrabold text-[18px] pl-2 '>개인소득공제용</p>
                        </div>

                        {/* input fields...for mobile number */}
                        <FormGroup className='mt-4'>
                            <Label for="phone" className='font-bold text-[14px]'>휴대폰 번호를 입력해주세요</Label>
                            <Input
                                type="phone"
                                id="phone"
                                placeholder="010 - 0000 - 0000"
                                required
                                className='py-4 border-blue-400 border-1'
                                />
                        </FormGroup>

                        {/* This is the third radio button */}
                        <div className='flex mt-[29px]'>
                            <input
                                type="radio"
                                id="thirdButtonRadio"
                                name="location"
                                value="second"
                                className='p-1'
                                />
                            <label
                                className='p-1 radio-label' 
                                htmlFor="thirdButtonRadio"
                            ></label>
                            <p className='font-extrabold text-[18px] pl-2 '>사업자증빙용 / 세금계산서</p>
                        </div>

                        <FormGroup className='mt-4'>
                            <Label for="business" className='font-bold text-[14px]'>사업자 상호를 기재해주세요.</Label>
                            <Input
                                type="text"
                                id="business"
                                required
                                placeholder="사업자 상호"
                                className='w-[60%] py-4'
                                />
                        </FormGroup>
                        {/* This is for business reg no */}

                        <FormGroup className='mt-4'>
                            <Label for="businessRegNo" className='font-bold text-[14px]'>사업자등록번호를 입력해주세요.</Label>
                            <Input
                                type="text"
                                id="businessRegNo"
                                required
                                placeholder="사업자등록번호"
                                className='py-4'
                            />
                        </FormGroup>
                        {/* This is for email */}

                        <FormGroup className='mt-3'>
                            <Label for="email" className='font-bold text-[14px]'>이메일 주소를 기재해주세요.</Label>
                            <Input
                                type="text"
                                id="email"
                                required
                                placeholder="00000@naver.com"
                                className='py-4'
                                />
                        </FormGroup>
                    </Form>
                )}

            </div>

            {/* Payment Info */}
            <div className="p-4 bg-white">
                <div className='flex flex-col items-center justify-center mb-6 w-full px-2 gap-2 pt-3'>
                    <div className='flex justify-between w-full items-start text-[14px] font-[400] text-[#8D8D8D]'>
                        <p className='font-[400]'>상품명</p>
                        <p className='font-bold'>오아 공기청정기 외 1</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[14px] font-[400] text-[#8D8D8D]'>
                        <p>잔액</p>
                        <p>100,682원</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[14px] font-[400] text-[#8D8D8D]'>
                        <p>총 상품금액</p>
                        <p>- 25,000원</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[14px] font-[400] text-[#8D8D8D]'>
                        <p>배송비</p>
                        <p>3,000 원</p>
                    </div>
                        
                    <hr className='w-full h-[0.5px] bg-[#bebebd] my-2' />

                    <div className='flex justify-between w-full items-start font-[400]'>
                        <p className='text-[16px] font-normal'>Total</p>
                        <p className='text-black text-[20px] font-semibold'>- 28,000원</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[#406FC9]'>
                        <p className='text-[16px] font-normal'>잔액</p>
                        <p className='font-semibold text-[20px]'>72,682원</p>
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


        </div>

        {isBankOpen && <BankModal isOpen={isBankOpen} setIsOpen={setIsBankOpen} extra={true} />}
        {isFilterOpen && <SortModal isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />}
        {isLocationOpen && <LocationModal title="주소 설정" isOpen={isLocationOpen} setIsOpen={setIsLocationOpen} />}
        {(currentOption === 1 && isPaymentOpen) && <CardPaymentPopup isOpen={isPaymentOpen} />}
        
     </>
    )
}
