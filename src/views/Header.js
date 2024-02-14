import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Header = () => {
    const history = useHistory();

  const handleBackClick = () => {
      // Go back to the previous page
      history.goBack();
  };

  return (
    <div className="flex items-center justify-center mb-6 relative" onClick={handleBackClick}>
            <img src="/back.svg" alt="" className="absolute left-0 top-1" />
            <p className="text-[17px] font-[700] text-black">아이디ㆍ비밀번호 찾기</p>
    </div>
  )
}

export default Header