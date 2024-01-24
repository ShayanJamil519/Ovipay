import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { IoIosStar } from 'react-icons/io'
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
    <div className='flex flex-col items-center justify-center w-full px-4 py-5'>
        <h1 className='w-full text-2xl font-semibold'>My Cart</h1>
        <div className='flex flex-col items-center justify-center w-full'>
        
        {/* Product */}
        <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3'>
         <img src={product} alt="" />
         <div className=''>
             <h6 className='text-lg font-bold text-black'>오아 공기청정기</h6>
             <p className='text-sm text-gray-400'>가전제품 / 49,900원</p>
         </div>
         <div className='flex items-center gap-x-2'>
           <FaCircleMinus onClick={decrease} role='button' size={30} className='text-gray-400 cursor-pointer'/>
           {number}
           <FaPlusCircle onClick={increase} role='button' size={30} className='text-[#FED52A] cursor-pointer'/>
         </div>  
        </div>
        <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3'>
         <img src={product} alt="" />
         <div className=''>
             <h6 className='text-lg font-bold text-black'>오아 공기청정기</h6>
             <p className='text-sm text-gray-400'>가전제품 / 49,900원</p>
         </div>
         <div className='flex items-center gap-x-2'>
           <FaCircleMinus onClick={decrease} role='button' size={30} className='text-gray-400 cursor-pointer'/>
           {number}
           <FaPlusCircle onClick={increase} role='button' size={30} className='text-[#FED52A] cursor-pointer'/>
         </div>  
        </div>
        <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3'>
         <img src={product} alt="" />
         <div className=''>
             <h6 className='text-lg font-bold text-black'>오아 공기청정기</h6>
             <p className='text-sm text-gray-400'>가전제품 / 49,900원</p>
         </div>
         <div className='flex items-center gap-x-2'>
           <FaCircleMinus onClick={decrease} role='button' size={30} className='text-gray-400 cursor-pointer'/>
           {number}
           <FaPlusCircle onClick={increase} role='button' size={30} className='text-[#FED52A] cursor-pointer'/>
         </div>  
        </div>
        <div className='flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3'>
         <img src={product} alt="" />
         <div className=''>
             <h6 className='text-lg font-bold text-black'>오아 공기청정기</h6>
             <p className='text-sm text-gray-400'>가전제품 / 49,900원</p>
         </div>
         <div className='flex items-center gap-x-2'>
           <FaCircleMinus onClick={decrease} role='button' size={30} className='text-gray-400 cursor-pointer'/>
           {number}
           <FaPlusCircle onClick={increase} role='button' size={30} className='text-[#FED52A] cursor-pointer'/>
         </div>  
        </div>
        </div>

        <h6 className='w-full mt-5 text-lg'>4 개의 상품</h6>

        <div className='flex items-center justify-between w-full mt-3'>
            <h6 className='text-lg font-semibold'>Total</h6>
            <p className='text-2xl font-bold'>675,000원</p>
        </div>

        <Link to='/shopping/confirm-payment' className='flex items-center justify-center w-full hover:no-underline'><button className='w-[90%] rounded-3xl bg-[#FED52A] py-3 mt-5 text-lg text-black font-extrabold'>결 제</button></Link> 
    </div>
    <Footer address='shopping'/>
    </>
  )
}

export default Cart