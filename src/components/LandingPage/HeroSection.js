import { React, useState } from 'react'
import img1 from '../../assets/img/hero_swiper_image1.png'
import img2 from '../../assets/img/sidebar_logo.png'

import { GiRotaryPhone } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdShoppingBag } from 'react-icons/md'
import { BiSolidGift } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbCash } from 'react-icons/tb'
import { RiCoupon3Line } from "react-icons/ri";

import { AiOutlineShop } from 'react-icons/ai'
import { HiGiftTop } from 'react-icons/hi2'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const HeroSection = () => {



  return (
    <>
      <div className='flex flex-col items-center justify-center w-full px-2 pt-3 text-black rounded-t-3xl '>
        <div className='flex items-center justify-center w-full'>
          <div className='relative px-[15%] py-3 bg-white border rounded-lg shadow-inner top-4'>
            <div className='px-4 py-2 bg_barcode'>
              <button className='bg-[#fed52a] py-3 px-4 font-extrabold rounded-lg '>바코드 보기</button>
            </div>
          </div>
        </div>
        <div className='rounded-2xl bg-[#fed52a] shadow pt-10 pb-3 w-[98%]'>
          <div className='flex items-center justify-end w-full px-2 gap-x-2'>
            <Link to='/charge/bar-input' className='hover:no-underline hover:text-[#fed52a]'> <div className='flex items-center px-3 py-1 bg-white rounded-xl gap-x-1'>
              <AiFillPlusSquare size={16} className='text-[#fed52a]' />
              <p className='text-[12px] font-extrabold'>충 전</p>
            </div></Link>
            <Link to='/charge/input-form' className='hover:no-underline hover:text-[#fed52a]'> <div className='flex items-center px-3 py-1 bg-white rounded-xl gap-x-1'>
              <GiRotaryPhone size={16} className='text-[#fed52a]' />
              <p className='text-[12px] font-extrabold'>출 금</p>
            </div></Link>
            <Link to='/charge/confirm-form' className='hover:no-underline hover:text-[#fed52a]'><div className='flex items-center px-3 py-1 bg-white rounded-xl gap-x-1'>
              <FaGift size={15} className='text-[#fed52a]' />
              <p className='text-[12px] font-bold'>포인트 선물</p>
            </div></Link>
          </div>

          <div className='flex items-center justify-between w-full px-4 mt-3 text-black/75'>
            <div className='flex items-center gap-x-2'>
              <p className='font-bold'>잔 액</p>
              <FaRegEyeSlash size={17} className='' />

            </div>
            <h5 className='text-[25px] font-bold'>100,682 원</h5>
          </div>

        </div>
        <div className='flex items-center justify-around w-full mt-12 '>
          <Link to='/shopping-home' className='hover:no-underline '><div >
            <MdShoppingBag size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center text-black'>쇼 핑</p>
          </div></Link>
          <Link to='/shopping-home' className='hover:no-underline '>
            <TbCash size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center'>숙박 예약</p>
          </Link>
          <Link to='/gift-home' className='hover:no-underline '> <div ><HiGiftTop size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center text-black'>GIFT</p>
          </div></Link>
          <div >
            <AiOutlineShop size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center'>OVI가맹점</p>
          </div>

        </div>
        
        <div className='flex items-center justify-around w-full mt-12 '>
          <Link to='' className='hover:no-underline '><div >
            <CiWallet size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center text-black'>MyOvipay</p>
          </div></Link>
          <div >
            <RiCoupon3Line size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center'>MyCoupon</p>
          </div>
          <Link to='' className='hover:no-underline '> <div ><HiGiftTop size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center text-black'>MyGift</p>
          </div></Link>
          <div >
            <RiShoppingBagLine size={70} className='p-3 rounded-full bg-[#fed52a] text-white ' />
            <p className='mt-1 text-[15px] font-semibold text-center'>MyShopping</p>
          </div>

        </div>
        <div className='flex items-center justify-center w-full mt-12 '>

          <Swiper
            slidesPerView={1}
            pagination={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className='flex items-center justify-center w-full mb-[60px] '
          >
            <SwiperSlide className='flex items-center justify-center'>
              <img src={img1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
              <img src={img1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
              <img src={img1} alt="Slide 1" />
            </SwiperSlide>
          </Swiper>

        </div>


      </div>
    </>
  )
}

export default HeroSection