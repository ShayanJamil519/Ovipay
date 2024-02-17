import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SaveHistory = ({setIsOpen}) => {

    const cardData = [
        { id: 1, expiry: "기간 만료 30일 남음", category: "매장명", description: "안심한우 1++등급 ‘투뿔 스...", price: "149,000" },
        { id: 2, expiry: "기간 만료 30일 남음", category: "매장명", description: "안심한우 1++등급 ‘투뿔 스...", price: "149,000" },
    ];

  return (
    <>
        {/* <div> */}
            {/* This div is for card */}
            <div className='flex flex-col items-center justify-center mt-4'>
                <h1 className='px-2 w-full text-[#464441]'>저장내역</h1>
                <div className="mb-2 flex items-center w-full mt-3">
                    <img src="/dot.svg" alt="" className="mr-2" />
                    <h1 className='text-[#303030] w-full'>GIFT</h1>
                </div>

                <div className='w-full'>
                    {cardData.map((card) => (
                        <div key={card.id} className='w-[99%] rounded-xl shadow-md flex gap-x-3 px-3 py-2 mt-3' style={{boxShadow: '0px 2px 48px 0px #0000000A'}}>
                            <img src="/card_img.png" alt="" />
                            <div className='w-full mt-2'>
                                <p className='flex flex-col items-end justify-center w-full text-[#DC3131] font-[500] text-[11px]'>{card.expiry}</p>
                                <p className='text-[11px] text-[#8D8D8D]'>{card.category}</p>
                                <p className='text-[14px] text-[#464441] mb-2'>{card.description}</p>
                                <h6 className='text-[18px] font-[900] text-black'>{card.price}<span className='font-[300]'>원</span></h6>
                                <div className='flex flex-col items-end justify-center w-full mt-3'>
                                    <button className='bg-[#FED52A] text-[10px] font-bold w-[80px] h-[24px] py-1 rounded-[50px]' onClick={()=> setIsOpen(true)}>쿠폰보기</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* See More */}
            <div className="w-full mt-4">
                <div className="flex gap-2 border border-[#C8C8C8] items-center justify-center py-3 rounded-[10px]">
                    <p className="text-[#737373] text-[14px]">더보기</p>
                    <img src="/arrow_down.svg" alt="" />
                </div>
            </div>

            {/* This div is for card */}
            <div className='flex flex-col items-center justify-center mt-6'>
                <div className="mb-2 flex items-center w-full">
                    <img src="/dot.svg" alt="" className="mr-2" />
                    <h1 className='w-full text-[#464441]'>GIFT 사용내역</h1>
                </div>
                <h1 className='text-[#E3BB17] w-full mt-3 font-[600] text-[15px]'>2024. 01. 20</h1>

                <div className='w-full'>
                    {cardData.map((card) => (
                        <div key={card.id} className='w-[99%] rounded-xl shadow-md flex gap-x-3 px-3 py-2 mt-3' style={{boxShadow: '0px 2px 48px 0px #0000000A'}}>
                            <img src="/card_img.png" alt="" />
                            <div className='w-full mt-2'>
                                <p className='flex flex-col items-end justify-center w-full text-[#5966D7] text-[12px]'>사용완료</p>
                                <p className='text-sm text-[#8D8D8D]'>{card.category}</p>
                                <p className='text-sm text-[#464441] mb-2'>{card.description}</p>
                                <h6 className='text-[18px] font-[900] text-black'>{card.price}<span className='font-[300]'>원</span></h6>
                                <Link to="/gift/details" className='flex flex-col items-end justify-center w-full mt-3'>
                                    <button className='bg-[#F2F2F2] w-[80px] h-[24px] text-[10px] font-bold py-1 rounded-[50px]'>상세내역</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* See More */}
            <div className="w-full mt-4">
                <div className="flex gap-2 border border-[#C8C8C8] items-center justify-center py-3 rounded-[10px]">
                    <p className="text-[#737373] text-[14px]">더보기</p>
                    <img src="/arrow_down.svg" alt="" />
                </div>
            </div>
        {/* </div> */}
    </>
  )
}

export default SaveHistory