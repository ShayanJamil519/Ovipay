import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = ({address}) => {
  return (
  <>
  <div className='mt-[100px]'></div>
    <div className='fixed bottom-0 z-10 flex items-center justify-center w-full bg-white border-t shadow '>

    <div className='flex items-center justify-around py-3 w-[90%] w md:w-full md:justify-center md:gap-x-7'>
    <Link to='/affiliate'>
        <div className={`${address === 'home' ? 'bg-[#FED52A] rounded-xl  text-white' : 'text-gray-400 hover:text-[#FED52A] bg-white'} flex flex-col items-center justify-center  gap-y-1`}>
            <IoHomeOutline size={45} className='p-2 cursor-pointer'/>
        </div>
    </Link>

    </div>
    </div>
  </>
  )
}

export default Footer