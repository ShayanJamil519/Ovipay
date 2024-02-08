import React from 'react'

const AccountTransferFour = () => {
  return (
    <>
            {/* Header */}
            <div className="flex items-center justify-center mb-6 relative mx-4 mt-4">
                <img src="/back.svg" alt="" className="absolute left-0 top-1" />
                <p className="text-[17px] font-[700] text-black">계좌이체</p>
            </div>


            <div className="h-custom flex items-center justify-center flex-col px-4">
                <div className="flex items-center justify-center flex-col my-12">
                    <img src="/tick.svg" alt="" className='mb-4' />
                    <h1 className='text-[24px] font-[700] mb-2'>무통장 입금 신청 완료!</h1>
                    <p>입금 후 확인 절차 후에 충전이 완료됩니다.</p>
                </div>

                <div className='w-full bg-white shadow-sm border px-6 py-3 flex flex-col items-center justify-center text-[#136ED8]'>
                    <p>입금계좌</p>
                    <p>오비뱅크 000000-000000</p>
                </div>

                <p className='text-center text-[#BD0F0F] mt-12 mb-[20vh]'>24시간 내에 입금 내역이 없을 시 <br />주문이 자동 취소됩니다.</p>
                
                <div className="w-[90%] mx-3 mt-16 absolute bottom-[10%]">
                    <button
                        className="w-full bg-[#373535] py-2 px-3 bottom-1 rounded-[50px] font-bold text-white text-[22px] w-full"
                    >
                        충전하기
                    </button>
                </div>
            </div>
    </>
  )
}

export default AccountTransferFour