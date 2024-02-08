import React, { useState, useRef } from 'react';
import img from '../assets/img/authentication-logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const popupRef = useRef();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full" onClick={handleClosePopup}>
      <div
        ref={popupRef}
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-3xl border-2 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '75vh' }}
      >
        <div className='flex flex-col'>
            <div className='flex items-center justify-center flex-col mt-16'>
                <img src={img} alt="" />
                <h1 className='text-[24px] text-[700] text-center my-4'>자동 로그인을<br />사용하시겠습니까?</h1>
                <p className='text-[12px] text-[400] text-center'>기기에 저장되어 있는 생체 인증으로 로그인이 가능합니다.</p>
            </div>
            <div></div>
            <div className='flex flex-col pt-32'>
                <Link to='/login'  className='text-black hover:no-underline hover:text-black mb-2'><button className='flex justify-center text-[18px] font-[600] py-3 mx-auto mb-2 bg-[#FED52A] rounded-[50px] w-75'>좋아요</button></Link> 
                <Link to='/signup' className='text-white hover:no-underline hover:text-white'> <button className='flex justify-center text-[18px] font-[600] mb-2 py-3 bg-[#353737]  w-75 mx-auto rounded-[50px]'>다음에 할게요</button></Link> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
