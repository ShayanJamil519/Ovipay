import React from 'react'

const TransferConfirmation = () => {
  return (
    <>
            {/* Header */}
            <div className="flex items-center justify-center mb-6 relative mx-4 mt-4">
                <img src="/back.svg" alt="" className="absolute left-0 top-1" />
                <p className="text-[17px] font-[700] text-black">계좌이체</p>
            </div>


            <div className="h-custom flex items-center flex-col">
                <div className="flex items-center justify-center mx-4 flex-col mt-16">
                    <img src="/tick.svg" alt="" className='mb-4' />
                    <h1 className='text-[35px] font-[700] mb-2'>100,000원</h1>
                    <p className='text-[20px]'>충전완료</p>
                    <p className='text-[#A19B91] text-[12px] text-center mt-8'>MY Ovipay에서 충전내역을 확인해 보실 수 있습니다.</p>
                </div>
                
                <div className="w-[90%] mx-3 mt-16 absolute bottom-[10%]">
                    <div className='flex flex-col items-center justify-center mb-10 w-full px-2 gap-4'>
                        <div className='flex justify-between w-full items-start'>
                            <p>충전계좌</p>
                            <p>국민000</p>
                        </div>
                        <div className='flex justify-between w-full items-end'>
                            <p>거래 후 잔액</p>
                            <p>200,683원</p>
                        </div>
                    </div>
                    <button
                        className="w-full bg-[#373535] text-white py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px] w-full"
                    >
                        돌아가기
                    </button>
                </div>
            </div>
    </>
  )
}

export default TransferConfirmation