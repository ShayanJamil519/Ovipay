import React, { useRef, useState } from 'react';
import CheckoutPopup from './Popups/CheckoutPopup';

const CheckoutModal = ({isOpen, setIsOpen}) => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef();

  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };


  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full`} onClick={handleClosePopup}>
      <div
        ref={popupRef}
        className={`fixed bottom-0 left-0 right-0 overflow-y-scroll bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-3xl border-2 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        <div className='flex flex-col'>
            <div className='flex items-center justify-center flex-col mt-16'>
                <img src="/barcode.svg" alt="" style={{height: '10%'}} />
                <img src="/dish.png" alt="" style={{height: '20vh'}} />
                <p className='text-[17px] text-center my-2'>온가족이 즐기는 <br /> 따뜻하고 오붓한 set!</p>
                <h1 className='text-[35px] font-[700] text-center'>38,000원</h1>
            </div>

            {/* Radio Options */}
            <div>
              {/* First Radio Button */}
              <div className='flex items-center px-4 py-3 rounded-xl gap-3'>
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
                  <p className='font-[600]'>현금영수증 발행 안함</p>
              </div>

              {/* Second Radio Button */}
              <div>
                <div className='flex items-center px-4 py-3 rounded-xl gap-3'>
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


            <div className="w-[90%] mx-3 mt-16 mb-8">
                <div className='flex flex-col items-center justify-center mb-6 w-full px-2 gap-2'>
                    <div className='flex justify-between w-full items-start'>
                        <p>저장날짜</p>
                        <p>2023. 01. 02</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[#CA1C1C]'>
                        <p>만료기한</p>
                        <p>2024. 01. 02 까지</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[#406FC9]'>
                        <p>거래 후 잔액</p>
                        <p>200,683원</p>
                    </div>
                </div>
                <button
                    className="w-full bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px]"
                    onClick={()=> setIsPopupOpen(true)}
                >
                    저 장
                </button>
            </div>

        </div>
      </div>

      {isPopupOpen && <CheckoutPopup isOpen={isPopupOpen} toggle={setIsPopupOpen}/>}
    </div>
  );
};

export default CheckoutModal;
