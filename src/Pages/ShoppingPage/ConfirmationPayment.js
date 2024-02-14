import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import BankModal from '../Gift/Modals/BankModal';
import SortModal from '../Gift/Modals/SortModal';
import LocationModal from '../Gift/Modals/LocationModal';
import CardPaymentPopup from './Popups/CardPaymentPopup';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default function ConfirmationPayment() {
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
            <div className='pt-3 pl-3'>
                <h1 className='font-bold text-[22px]'>결제하기</h1>
                <p className='mt-3 font-semibold'>배달 주소</p>
            </div>

            {/* This div is for Cards */}

            <div className='mx-3'>
                {/* First Card */}
                <div className='flex items-center justify-between px-4 py-3 mt-5 shadow-md rounded-xl' onClick={() =>setIsLocationOpen(true)}>
                    <div>
                        <p className='text-lg font-bold'>Home</p>
                        <p>서울특별시 홍길동로 삼겹살</p>
                    </div>
                <input
                    type="radio"
                    id="homeRadio"
                    name="location"
                    value="home"
                    className='p-1 sr-only' 
                />
                <label
                    id="homeLabel"
                    htmlFor="homeRadio"
                    className='p-1 radio-label' 
                ></label>
            </div>

      {/* Second Card */}
      <div className='flex items-center justify-between px-4 py-3 mt-3 shadow-md rounded-xl'>
        <div>
          <p className='text-lg font-bold'>Office</p>
          <p>서울특별시 홍길동로 삼겹살</p>
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
                <h2 className='font-bold text-[20px] px-2 py-3 mt-4'>결제 방법</h2>

                {/* This div is for three buttons */}
                <div className='flex justify-between gap-x-1'>
                    {/* First Button */}
                    <button className={`flex flex-col justify-start px-4 pt-3 ${currentOption === 0 ? 'border-[2px] border-[#FED52A]' : 'border'} rounded-xl`} onClick={()=> setCurrentOption(0)}>
                        <span className={`h-[15px] w-[30px] ${currentOption === 0 ? 'bg-[#FED52A] border-solid border-2 border-[#FED52A]' : 'bg-[#DDDDDD]'} pr-4 rounded-full`}></span>
                        <p className='pt-3 pb-2 text-[13px] font-semibold'>오비페이</p>
                    </button>

                    {/* Second Button */}

                    <button className={`flex flex-col justify-start px-4 pt-3 ${currentOption === 1 ? 'border-[2px] border-[#FED52A]' : 'border'} rounded-xl`} onClick={()=> setCurrentOption(1)}>
                        <span className={`h-[15px] w-[30px] ${currentOption === 1 ? 'bg-[#FED52A]' : 'bg-[#DDDDDD]'} pr-4 rounded-full`}></span>
                        <p className='pt-3 pb-2 text-[13px] font-semibold'>신용카드</p>
                    </button>

                    {/* Third Button */}

                    <button className={`flex flex-col justify-start px-4 pt-3 ${currentOption === 2 ? 'border-[2px] border-[#FED52A]' : 'border'} rounded-xl`} onClick={()=> setCurrentOption(2)}>
                        <span className={`h-[15px] w-[30px] ${currentOption === 2 ? 'bg-[#FED52A]' : 'bg-[#DDDDDD]'} pr-4 rounded-full`}></span>
                        <p className='pt-3 pb-2 text-[13px] font-semibold'>무통장 입금</p>
                    </button>
                </div>

                {
                    currentOption === 0 &&
                    <div className='flex justify-between items-center w-full rounded-xl bg-[#FED52A] p-4 mt-4'>
                        <p className='flex text-[12px] text-[#171717]'> <img src="/logo.svg" alt="" /> OviPay</p>
                        <p className='text-[#292929] font-[700] text-[25px]'>100,682 원</p>
                    </div>
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

            <div className='px-3'>
                    <div className="w-full">
                        <h1 className="font-[600] my-4">간편 결제</h1>
                        <div className="w-full flex flex-col py-14 items-center jutify-center border rounded-[20px]" onClick={()=> setIsBankOpen(true)}>
                            <img src="/plus_circle.svg" alt="" className="rounded-full border mb-2" />
                            <p className="text-[#A0A0A0] text-[14px] font-[400]">카드를 등록하고 간편하게 결제하세요</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h1 className="mb-3 font-[600]">일반 결제</h1>
                        <div className="flex justify-between border rounded-xl px-4 py-2" onClick={()=> setIsFilterOpen(true)}>
                            <p className="text-[#A19B91]">은행 선택</p>
                            <img src="/arrow_down.svg" alt="" />
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

            {/* This div is for payment calculation */}

            <div className='mx-4 mt-5'>
                {/* First Row */}
                <div className='flex justify-between font-semibold text-gray-400'>
                    <p>총 상품금액</p>
                    <p>25,000원</p>
                </div>
                {/* Second Row */}
                <div className='flex justify-between font-semibold text-gray-400'>
                    <p>배송비</p>
                    <p>3,000원</p>
                </div>
                {/* Third Row */}
                <div className='flex justify-between font-semibold mt-3'>
                    <p className='font-bold'>Total</p>
                    <p className='font-bold text-[18px]'>28,000원</p>
                </div>
            </div>

            {/* Payment Button */}
            <div className='mx-3 mt-4'>
                    {
                        (currentOption === 0 || 1 )
                        ?
                        <Link to={`${currentOption === 0 ? '/shopping/complete-payment-one' : currentOption === 2 ? '/shopping/complete-payment' : '/shopping/complete-payment' }`}>
                            <button className='w-full bg-[#FED52A] py-3 font-[600] text-[18px] rounded-[50px]' onClick={()=> setIsPaymentOpen(true)}>결 제</button>
                        </Link>
                        :
                        <button className='w-full bg-[#FED52A] py-3 font-[600] text-[18px] rounded-[50px]' onClick={()=> setIsPaymentOpen(true)}>결 제</button>
                    }
            </div>


        </div>

        {isBankOpen && <BankModal isOpen={isBankOpen} setIsOpen={setIsBankOpen} />}
        {isFilterOpen && <SortModal isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />}
        {isLocationOpen && <LocationModal isOpen={isLocationOpen} setIsOpen={setIsLocationOpen} />}
        {(currentOption === 1 && isPaymentOpen) && <CardPaymentPopup isOpen={isPaymentOpen} />}
        
        <Footer address={'none'}/>
     </>
    )
}
