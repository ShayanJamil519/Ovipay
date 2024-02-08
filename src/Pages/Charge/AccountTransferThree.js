import React from 'react'

const AccountTransferThree = () => {
  return (
    <>
            {/* Header */}
            <div className="flex items-center justify-center mb-6 relative mx-4 mt-4">
                <img src="/back.svg" alt="" className="absolute left-0 top-1" />
                <p className="text-[17px] font-[700] text-black">계좌이체</p>
            </div>


            <div className="h-custom flex items-center flex-col">
                <div className="flex items-center justify-center mx-4 flex-col my-12">
                    <img src="/tick.svg" alt="" className='mb-4' />
                    <h1 className='text-[24px] font-[700] mb-2'>계좌 연결 완료!</h1>
                    <p>계좌는 설정에서 언제든지 바꾸실 수 있습니다.</p>
                    <p className='text-[#A19B91] mt-8'>KB국민 000000-00-000000</p>
                </div>
                
                <div className="w-[90%] mx-3 mt-16 absolute bottom-[10%]">
                    <div className='flex items-center justify-center mb-10'>
                        <p className='text-center'>다음에도 이 계좌를 사용할게요.</p>
                        <img src="/tick.svg" alt="" className='ml-2 h-6' />
                    </div>
                    <button
                        className="w-full bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px] w-full"
                    >
                        충전하기
                    </button>
                </div>
            </div>
    </>
  )
}

export default AccountTransferThree