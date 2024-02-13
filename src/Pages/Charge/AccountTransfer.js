import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const AccountTransfer = () => {
  return (
    <div className='relative h-screen'>
            {/* Header */}
            <Header />


            <div className="">
                <div className="flex mx-4 flex-col mb-4 mt-12">
                    <div className="font-[600]">계좌인증</div>
                    <div className="flex flex-col mt-2">
                        <p className="text-[#A19B91] text-[12px]">계좌로 입금된 1원의 입금자명(숫자)을 찾아 <br/>입력해주세요.</p>
                    </div>
                </div>

                <div className="flex justify-between px-3 py-2 mx-4 mt-2 mb-4 border-2 border-blue-300 rounded-xl">
                    <input
                        placeholder="입금자명 입력"
                        className="flex-grow border-none focus:border-none focus:outline-none" 
                    />
                </div>

                
                {/* The last button of the page */}

                <Link to="/charge/account-transfer-two" className="w-[90%] mx-3 absolute bottom-[20%]">
                    <button
                        className="w-full bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px]"
                    >
                        다음
                    </button>
                </Link>
            </div>
        </div>
  )
}

export default AccountTransfer