import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = ({address}) => {
  return (
  <>
  <div className='mt-[100px]'></div>
    <div className='fixed bottom-0 z-10 flex items-center justify-center w-full bg-white border-t shadow '>

    <div className='flex items-center justify-around py-3   w-[90%] w md:w-full md:justify-center md:gap-x-7'>
    <Link to='/shopping-home'><div className={`${address === 'home' ? 'bg-[#FED52A] rounded-xl  text-white' : 'text-gray-400 hover:text-[#FED52A] bg-white'} flex flex-col items-center justify-center  gap-y-1`}>
        <IoHomeOutline size={45} className='p-2 cursor-pointer'/>
      </div></Link>
      
      <Link to='/shopping/favourte'><div className={`${address === 'favourite' ? 'bg-[#FED52A]  rounded-xl text-white' : 'text-gray-400 hover:text-[#FED52A] bg-white'} flex flex-col items-center justify-center  gap-y-1`}>
        <FaRegHeart size={45} className='p-2 cursor-pointer'/>
      </div></Link>
      
      <Link to='/shopping/mycart'>
        <div className={`${address === 'shopping' ? 'bg-[#FED52A] rounded-xl text-white' : 'text-gray-400 hover:text-[#FED52A] bg-white'} relative flex items-center justify-center gap-y-1`}>
          <TiShoppingCart size={45} className='p-2 cursor-pointer'/>
            <span className="absolute top-[-8px] right-[-6px] bg-[#292929] text-white rounded-full px-2 py-1 text-xs">4</span>
        </div>
      </Link>
      
      <Link to='/shopping/delivery-details'> <div className={`${address === 'account' ? 'bg-[#FED52A]  rounded-xl text-white' : 'text-gray-400 hover:text-[#FED52A] bg-white'} flex flex-col items-center justify-center  gap-y-1`}>
        <VscAccount size={45} className='p-2 cursor-pointer'/>
      </div></Link>

    </div>
    </div>
  </>
  )
}

export default Footer