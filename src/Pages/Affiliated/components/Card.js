import React, { useState } from 'react'

const Card = ({card, setIsOpen}) => {

    const [isBarcode, setIsBarcode] = useState(false)
  return (
    <>
        {
            isBarcode ? 
            <div className='w-[98%] rounded-xl shadow-md flex gap-x-3 p-3 mt-3 border-[1px] border-[#FED52A]' onClick={()=> setIsOpen(true)}>
                <img src="/card_img.png" alt="" className='border px-2 rounded-xl py-1' />
                <div className='w-full mt-2 flex justify-between'>
                    <div className='border-r pr-3'>
                        <p className='text-[13px] text-[#696969] font-[500]'>허니콤보세트</p>
                        <p className='text-[18] text-[#464441] font-[700] mb-2'>5% 할인쿠폰</p>
                        <h6 className='text-[10px] font-[500] text-[#ACACAC]'>최소주문금액 10,000원</h6>
                        <p className='mt-4 text-[#C81E1E] text-[14px] font-normal'>2024. 02. 19 까지</p>
                    </div>
                    <div className='flex items-center justify-end w-[20%]'>
                        <img src="/vertical_barcode.svg" alt="Barcode" />
                    </div>
                </div>
            </div>
            :
            <div key={card.id} className='w-[98%] rounded-xl shadow-md flex gap-x-3 p-3 mt-3 mx-3 border'>
                <img src="/card_img.png" alt="" className='border px-2 rounded-xl py-1' />
                <div className='w-full mt-2'>
                    <p className='text-[13px] text-[#696969] font-[500]'>{card.category}</p>
                    <p className='text-[18px] text-[#464441] font-[700] mb-2'>{card.description}</p>
                    <h6 className='text-[10px] font-[500] text-[#ACACAC]'>{card.price}</h6>
                    <div to="/gift/details" className='flex flex-col items-end justify-center w-full mt-3' onClick={()=> setIsBarcode(true)}>
                        <button className='bg-[#FED52A] px-3 text-[10px] font-[700] w-[80px] py-[8px] rounded-[50px]'>쿠폰받기</button>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Card