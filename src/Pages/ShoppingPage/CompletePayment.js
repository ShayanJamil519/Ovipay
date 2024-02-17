import React from 'react'
import Footer from './Footer';
import Header from '../Charge/Header';


const CompletePayment = () => {
  return (
    <>
        <Header title="쇼 핑" showHamburger={true} />

        <div>

            <div className="flex flex-col items-center justify-center w-full gap-y-1">
                {/* Success */}
                <div className="flex items-center justify-center flex-col w-[90%] rounded-[24px] py-4 gap-y-2 mb-2 mt-4">
                    <img src="/tick.svg" alt="" />
                    <h1 className="text-[18px] font-[700]">결제완료!</h1>
                    <p className="text-[12px] font-[400] text-[#8A8A8E]">오비페이를 이용해주셔서 감사합니다.</p>
                </div>
                
                <div className='w-[90%] rounded-xl shadow-md flex gap-x-3 p-3 mt-3 mx-3 mb-4 relative'>
                    <img src="/product.png" alt="" />
                    <div className='w-full mt-2'>
                        <p className='text-[15px] font-[700] text-[#464441]'>오아 공기청정기</p>
                        <p className='text-[12px] font-[400] text-[#928F8B] mb-2'>35,000원 · 1개</p>
                        <div to="/gift/details" className='flex flex-col items-end justify-center w-full mt-3'>
                            <button className='bg-[#F2F2F2] absolute bottom-2 right-2 w-[80px] h-[24px] text-[10px] font-[700] py-1 rounded-xl'>상세내역</button>
                        </div>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="w-[90%] border rounded-xl p-2 mb-4">
                    <h1 className="mt-2 mb-4 px-2 text-black">결제정보</h1>
                    <div className='flex flex-col items-center justify-center mb-6 w-full px-2 gap-2'>
                        <div className='flex justify-between w-full items-start font-[400]'>
                            <p className='text-[#464441]'>상품 가격</p>
                            <p>25,000 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end font-[400]'>
                            <p className='text-[#464441]'>할인금액</p>
                            <p>0 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end font-[400]'>
                            <p className='text-[#464441]'>배송비</p>
                            <p>3,000 원</p>
                        </div>
                        
                        <hr className='w-full h-[0.5px] bg-[#bdbcbc] my-2' />

                        <div className='flex justify-between w-full items-start font-[400]'>
                            <p className='text-[#464441]'>무통장입금</p>
                            <p>28,000 원</p>
                        </div>
                        <div className='flex justify-between w-full items-end'>
                            <p className='text-[16px] text-black'>총 결제금액</p>
                            <p className='font-[700]'>28,000 원</p>
                        </div>                   
                        
                    </div>
                </div>

                <div className="w-[90%] border rounded-xl p-2 mb-4 py-4" style={{boxShadow: '0px 2px 48px 0px #0000001A'}}>
                    <p className='text-center text-[#136ED8] text-[16px] font-[500]'>입금계좌 <br /> <span className='font-[700]'>오비뱅크 000000-000000</span></p>
                </div>

                <p className='text-center text-[#BD0F0F] text-[15px] font-[400]'>24시간 내에 입금 내역이 없을 시 <br/>주문이 자동 취소됩니다.</p>
                
                <div className="w-[90%] mx-3 mt-4 mb-4">
                    <button
                        className="w-full bg-[#FED52A] text-black py-3 px-3 bottom-1 rounded-[50px] font-[600] text-[18px]"
                    >
                        확 인
                    </button>
                </div>

            </div>
        </div>

        <Footer address={'account'} />
    </>
  )
}

export default CompletePayment