import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import product from '../../assets/img/product-item.png'
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Cart = () => {
    const [number, setNumber] = useState(0)
    const increase = () => {
        
        setNumber(number + 1);
    }
    const decrease = () => {
        if(number > 0)
        {
            setNumber(number - 1);
        }
    }
  return (
    <>
     <Header/>
    <div className='flex flex-col items-center justify-center w-full px-4 py-4'>
        <h1 className='w-full text-2xl font-semibold'>My Cart</h1>
        <div className='flex flex-col items-center justify-center w-full'>
        
            {/* Product */}
            <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3 bg-white' style={{boxShadow: '10px 24px 54px 0px #0000000A'}}>
            <img src={product} alt="" />
            <div className=''>
                <h6 className="text-[14px] font-[600] text-black" style={{lineHeight: '19.07px'}}>
                    오아 공기청정기
                </h6>
                <p className="text-[14px] font-[400] text-[#AAAAAA]" style={{lineHeight: '19.07px'}}>
                    가전제품 / 49,900원
                </p>
            </div>
            <div className='flex items-center gap-x-2'>
            <FaCircleMinus onClick={decrease} role='button' size={26} className='text-gray-400 cursor-pointer'/>
            {number}
            <FaPlusCircle onClick={increase} role='button' size={26} className='text-[#FED52A] cursor-pointer'/>
            </div>  
            </div>
            <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3 bg-white' style={{boxShadow: '10px 24px 54px 0px #0000000A'}}>
            <img src={product} alt="" />
            <div className=''>
                <h6 className="text-[14px] font-[600] text-black" style={{lineHeight: '19.07px'}}>
                    오아 공기청정기
                </h6>
                <p className="text-[14px] font-[400] text-[#AAAAAA]" style={{lineHeight: '19.07px'}}>
                    가전제품 / 49,900원
                </p>
            </div>
            <div className='flex items-center gap-x-2'>
            <FaCircleMinus onClick={decrease} role='button' size={26} className='text-gray-400 cursor-pointer'/>
            {number}
            <FaPlusCircle onClick={increase} role='button' size={26} className='text-[#FED52A] cursor-pointer'/>
            </div>  
            </div>
            <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3 bg-white' style={{boxShadow: '10px 24px 54px 0px #0000000A'}}>
            <img src={product} alt="" />
            <div className=''>
                <h6 className="text-[14px] font-[600] text-black" style={{lineHeight: '19.07px'}}>
                    오아 공기청정기
                </h6>
                <p className="text-[14px] font-[400] text-[#AAAAAA]" style={{lineHeight: '19.07px'}}>
                    가전제품 / 49,900원
                </p>
            </div>
            <div className='flex items-center gap-x-2'>
            <FaCircleMinus onClick={decrease} role='button' size={26} className='text-gray-400 cursor-pointer'/>
            {number}
            <FaPlusCircle onClick={increase} role='button' size={26} className='text-[#FED52A] cursor-pointer'/>
            </div>  
            </div>
            <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3 bg-white' style={{boxShadow: '10px 24px 54px 0px #0000000A'}}>
            <img src={product} alt="" />
            <div className=''>
                <h6 className='text-lg font-bold text-black'>오아 공기청정기</h6>
                <p className='text-sm text-gray-400'>가전제품 / 49,900원</p>
            </div>
            <div className='flex items-center gap-x-2'>
            <FaCircleMinus onClick={decrease} role='button' size={26} className='text-gray-400 cursor-pointer'/>
            {number}
            <FaPlusCircle onClick={increase} role='button' size={26} className='text-[#FED52A] cursor-pointer'/>
            </div>  
            </div>
            </div>

        <h6 className='w-full mt-5 text-[14px]'>4 개의 상품</h6>

        {/* Checkout Details */}
        <div className="w-full mt-4">
            <div className='flex flex-col items-center justify-center mb-6 w-full gap-2'>
                <div className='flex justify-between w-full items-start'>
                    <p className='text-[#afaeac]'>상품 가격</p>
                    <p>199,600 원</p>
                </div>
                <div className='flex justify-between w-full items-end'>
                    <p className='text-[#afaeac]'>할인금액</p>
                    <p>3,000 원</p>
                </div>
                <div className='flex justify-between w-full items-end border-b pb-3'>
                    <p className='text-[#afafac]'>배송비</p>
                    <p>0 원</p>
                </div>
                <div className='flex justify-between w-full items-end pt-3'>
                    <p>Total</p>
                    <p className='text-[20px] font-[600]'>196,600원</p>
                </div>
            </div>

            <Link to='/shopping/confirm-payment'>
              <button
                  className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] font-[600] text-[18px]"
              >
                  저 장
              </button>
            </Link>
        </div>

    </div>
    <Footer address='shopping'/>
    </>
  )
}

export default Cart