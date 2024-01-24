import React from 'react'
import { CiBarcode } from "react-icons/ci";
const Footer = () => {
  return (
    <>
    <div className='fixed bottom-0 z-10 flex items-center justify-center w-full py-2 bg-white'>
        <div className='w-[41%] h-[2px] border'></div>
        <CiBarcode size={80} className='p-3 rounded-full cursor-pointer bg-[#fed52a] text-white ' />
        <div className='w-[41%] h-[2px] border'></div>
    </div>
    </>
  )
}

export default Footer