import React from 'react'
import Header from './Header'

const TransferConfirmation = () => {
  return (
    <>
            {/* Header */}
            <Header />


            <div className="h-custom flex items-center flex-col">
                <div className="flex items-center justify-center mx-4 flex-col mt-16">
                    <img src="/tick.svg" alt="" className='mb-4' />
                    <h1 className='text-[35px] font-[700] mb-2'>100,000원</h1>
                    <p className='text-[20px]'>충전완료</p>
                    <p className='text-[#A19B91] text-[12px] text-center mt-8'>MY Ovipay에서 충전내역을 확인해 보실 수 있습니다.</p>
                </div>
                
                <div className="w-[90%] mx-3 mt-16 absolute bottom-[8%]">
                    <div className='flex flex-col items-center justify-center mb-10 w-full px-2 gap-4'>
                        <div className='flex justify-between w-full items-start'>
                            <p className='text-[#676767] text-[14px]'>충전계좌</p>
                            <p className='text-[#676767] text-[14px]'>국민000</p>
                        </div>
                        <div className='flex justify-between w-full items-end'>
                            <p className='text-[#676767] text-[14px]'>거래 후 잔액</p>
                            <p className='text-[#676767] text-[14px]'>200,683원</p>
                        </div>
                    </div>
                    <button
                        className="w-full bg-[#373535] text-white py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px]"
                    >
                        돌아가기
                    </button>
                </div>
            </div>
    </>
  )
}

export default TransferConfirmation