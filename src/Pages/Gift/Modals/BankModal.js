import React, { useRef } from 'react';

const BankModal = ({isOpen, setIsOpen, extra}) => {

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
            className={`fixed bottom-0 left-0 right-0 overflow-y-scroll bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-2xl border-[1px] ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ maxHeight: '85vh' }}
        >

          <div className="bg-white rounded-t-xl px-6 py-4 shadow-xl">
            <h1 className="mb-4 font-[600] text-[16px]">카드 추가</h1>

            {
              extra && 
              <div className="mb-4">
                <label className="block text-[#444444] text-[14px] font-[400] mb-1">카드 별명</label>
                <input
                  className="bg-[#F4F4F4] appearance-none border rounded-[12px] w-full py-2 px-3 text-[#B9B9B9] focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="영문 및 한글을 입력해주세요."
                />
              </div>
            }
            
            <div className="mb-4">
              <label className="block text-[#444444] text-[14px] font-[400] mb-1">카드번호</label>
              <div className="flex justify-between gap-3">
                <input
                  className="bg-[#F4F4F4] appearance-none border-[1px] border-[#FED52A] rounded-[12px] w-full py-2 px-3 focus:outline-none"
                  id="firstName"
                  type="number"
                  placeholder="0000"
                />
                <input
                  className="bg-[#F4F4F4] appearance-none border-[1px] border-[#FED52A] rounded-[12px] w-full py-2 px-3 focus:outline-none"
                  id="lastName"
                  type="number"
                  placeholder="0000"
                />
                <input
                  className="bg-[#F4F4F4] appearance-none border-[1px] border-[#FED52A] rounded-[12px] w-full py-2 px-3 focus:outline-none"
                  id="lastName"
                  type="text"
                  placeholder="0000"
                />
                <input
                  className="bg-[#F4F4F4] appearance-none border-[1px] border-[#FED52A] rounded-[12px] w-full py-2 px-3 focus:outline-none"
                  id="lastName"
                  type="text"
                  placeholder="0000"
                />
              </div>
            </div>
            
            <div className="flex mb-4 gap-3">
                <div>
                    <label className="block text-[#444444] text-[14px] font-[400] mb-1">유효기간</label>
                    <input
                        className="bg-[#F4F4F4] appearance-none border-[1px] border-[#FED52A] rounded-[12px] w-full py-2 px-3 text-[#B9B9B9] focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="MMYY"
                    />
                </div>
                <div>
                    <label className="block text-[#444444] text-[14px] font-[400] mb-1">CVC</label>
                    <input
                        className="bg-[#F4F4F4] appearance-none border-[1px] border-[#FED52A] rounded-[12px] w-full py-2 px-3 text-[#B9B9B9] focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="카드 뒷면 3자리 숫자"
                    />
                </div>
            </div>
            
            <div className="mb-12">
              <label className="block text-[#444444] text-[14px] font-[400] mb-1">카드 비밀번호</label>
              <input
                className="bg-[#F4F4F4] appearance-none border-[1px] border-[#FED52A] rounded-[12px] w-full py-2 px-3 text-[#B9B9B9] focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="비밀번호 앞 2자리 숫자"
              />
            </div>
              <button
                  className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[30px] font-bold text-[18px]"
              >
                  카드추가
              </button>
          </div>   
        </div>
    </div>
  );
}

export default BankModal