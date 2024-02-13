import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const CodeVerifier = () => {
  const [pins, setPins] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    // Move focus to the next input field
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <>
    <div className="max-w-md mx-auto mt-12 p-6 h-full">
      <div className='flex items-center justify-center flex-col'>
        <h1 className="text-[24px] font-[700] mb-3">최초 간편 로그인 설정</h1>
        <h2 className="text-[12px] font-[400] text-[#8A8A8E] mb-12">설정하실 6자리 비밀번호를 입력해주세요.</h2>
      </div>
      <div className="flex justify-center items-center space-x-3">
        {pins.map((pin, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-[15%] h-12 text-center border-2 border-[#FED52A] rounded-md focus:outline-none outline-[#FED52A]"
            value={pin}
            onChange={(e) => handleChange(index, e.target.value)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>

      <div className='flex flex-col pt-48'>
        <Link to='/login'  className='font-[600] hover:no-underline mb-2'><button className='flex justify-center py-3 mx-auto mb-2 bg-[#FED52A] text-[#272727] rounded-[50px] w-full text-[18px]'>로그인</button></Link> 
      </div>   

    </div>
    </>
  );
};

export default CodeVerifier;
