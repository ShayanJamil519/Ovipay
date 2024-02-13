import React, { useState, useRef } from 'react';

const FingerPopup = ({isOpen, setIsOpen}) => {
  
  const popupRef = useRef();

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = (item) => {
    setSelectedOption(item)
  }

  const options = ['담은순', '인기순', '최신순', '저가순'];

  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full`} onClick={handleClosePopup}>
        <div
            ref={popupRef}
            className={`fixed bottom-0 left-0 right-0 overflow-y-scroll bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-xl border-2 ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ maxHeight: '85vh' }}
        >
        <div className='flex flex-col p-3 items-center justify-center my-4'>
            <h1 className='text-[24px] font-[700] mb-2'>생체인증을 로그인</h1>
            <p className='text-[12px] font-[400] text-[#8A8A8E]'>기기에 저장되어 있는 생체인증으로 로그인합니다.</p>
            <img src="/fingerprint.svg" alt="" className="h-[88px] mt-12" />
        </div>
      </div>
    </div>
  );
};

export default FingerPopup;
