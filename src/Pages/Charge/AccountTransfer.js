import React from 'react'

const AccountTransfer = () => {
  return (
    <div className='relative h-screen'>
            {/* Header */}
            <div className="flex items-center justify-center mb-6 relative mx-4 mt-4">
                <img src="/back.svg" alt="" className="absolute left-0 top-1" />
                <p className="text-[17px] font-[700] text-black">계좌이체</p>
            </div>


            <div className="h-screen">
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

                <div className="w-[90%] mx-3 mt-16 absolute bottom-[10%]">
                    <button
                        className="w-full bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px] w-full"
                    >
                        다음
                    </button>
                </div>
            </div>
        </div>
  )
}

export default AccountTransfer