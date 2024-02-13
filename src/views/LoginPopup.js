import React, { useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LoginPopup = ({isOpen, setIsOpen}) => {
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
        className={`fixed overflow-y-scroll bottom-0 left-0 right-0 bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-3xl border-2 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        <div className='flex flex-col mb-8'>
            <div className='flex items-center justify-center flex-col mt-12'>
                <img src="/logo.svg" alt="" className='h-28' />
                <p className='text-[24px] font-[700] text-center my-2'>자동 로그인을 <br />사용하시겠습니까?</p>
                <p className='text-[12px] font-[400] text-[#8A8A8E] text-center'>기기에 저장되어 있는 생체 인증으로 로그인이 가능합니다. </p>
            </div>

            <div className="w-[90%] mx-3 mt-24">
                <Link to="/verify">
                    <button
                        className="w-full bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-[600] text-[18px]"
                    >
                        좋아요
                    </button>
                </Link>
                <button
                    className="w-full bg-[#292929] text-white py-2 px-3 bottom-1 rounded-[50px] font-[600] text-[18px] mt-3 mb-4"
                >
                    다음에 할게요
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
