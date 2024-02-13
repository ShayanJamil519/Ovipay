import React from 'react'
import Header from './Header'
import Footer from './Footer';


const OrderDetails = () => {
  return (
    <>
        <Header title="쇼 핑" />

        <div>

            <div className="flex flex-col items-center justify-center w-full gap-y-1">
                {/* Success */}
                <div className="flex items-center justify-center flex-col border-2 border-[#FED52A] w-[90%] rounded-[24px] py-4 gap-y-2 mb-4 mt-6">
                    <img src="/tick.svg" alt="" />
                    <h1 className="text-[18px] font-[700]">사용 완료</h1>
                </div>
                
                <div className="flex items-left w-full px-4">
                    <h1 className="text-left text-[#464441] mb-2">2024. 1. 20 주문</h1>
                </div>
                
                <div className='w-[90%] rounded-xl shadow-md flex gap-x-3 p-3 mt-3 mx-3 mb-4'>
                    <img src="/card_img.png" alt="" />
                    <div className='w-full mt-2'>
                         <p className='text-sm text-[#8D8D8D]'>오아 공기청정기</p>
                        <p className='text-sm text-[#464441] mb-2'>35,000원 · 1개</p>
                        <div to="/gift/details" className='flex flex-col items-end justify-center w-full mt-3'>
                            <button className='bg-[#F2F2F2] px-3 text-sm py-1 rounded-xl'>상세내역</button>
                        </div>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="w-[90%] border rounded-xl p-2 mb-4">
                    <h1 className="mt-2 mb-4 px-2 text-black">결제정보</h1>
                    <div className='flex flex-col items-center justify-center mb-6 w-full px-2 gap-2'>
                        <div className='flex justify-between w-full items-start font-[400]'>
                            <p className='text-[#464441]'>상품 가격</p>
                            <p>35,000 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end font-[400]'>
                            <p className='text-[#464441]'>할인금액</p>
                            <p>0 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end font-[400]'>
                            <p className='text-[#464441]'>배송비</p>
                            <p>3,000 원</p>
                        </div>
                        
                        <hr className='w-full h-[1px] bg-[#464441] my-2' />

                        <div className='flex justify-between w-full items-start font-[400]'>
                            <p className='text-[#464441]'>신용카드결제</p>
                            <p>35,000 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end'>
                            <p className='text-[16px] text-black'>총 결제금액</p>
                            <p className='font-[700]'>35,000 원</p>
                        </div>                   
                        
                    </div>

                    <div className="w-[90%] mx-3 mt-8 mb-4">
                        <button
                            className="w-full bg-[#000000] text-white py-3 px-3 bottom-1 rounded-[50px] font-[700] text-[12px]"
                        >
                            교환, 반품 신청
                        </button>
                    </div>

                </div>

            </div>
        </div>

        <Footer address={'account'} />
    </>
  )
}

export default OrderDetails