import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import image from '../../assets/img/empty-Image.png'
import product from '../../assets/img/empty-product.png'

// import required modules
import {  Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { IoIosStar } from 'react-icons/io';
import ProductDetailPopup from './Popups/ProductDetailPopup';

const GiftProductDetails = () => {

  const [liked, setLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <Header title="쇼 핑" showHamburger={true} />
    <div className='w-full '>
        
    <div className='flex items-center justify-center w-full mt-12'>

    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='flex items-center justify-center w-full '
    >
      <SwiperSlide className='flex items-center justify-center'>
        <img src={image} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'>
      <img src={image} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'>
      <img src={image} alt="Slide 1" />
      </SwiperSlide>
    </Swiper>

  </div>
  <div className='flex items-center justify-between px-4 mt-2'>
    <div>
        <h6 className='text-xl font-extrabold'>오아 공기청정기</h6>
        <p className='text-sm text-gray-400'>가전제품</p>    
    </div>
    <div className='flex items-center gap-x-1'>
    <IoIosStar size={17} className='text-[#FED52A]'/>
    <span>5</span>
    </div>
  </div>

    <div className='flex items-center justify-center w-full mt-12 overflow-x-scroll gap-x-2'>
      <img src={product} alt="" />
      <img src={product} alt="" />
      <img src={product} alt="" />
      <img src={product} alt="" />
      <img src={product} alt="" />
    </div>

    <p className='text-[17px]' style={{ lineHeight: '25px', letterSpacing: '1px', textAlign: 'left', margin: '22px'}}>여기서는 상품에 대한 상세 소개가 있을 예정
      일반적인 상품 상세페이지라고 <br />
      생각하시면 됩니다.
    </p>

    <p className="w-full text-right px-4 mt-12 mb-3 text-[25px] font-[700] text-[#464441]">35,000원</p>

      <div className='flex items-center justify-between w-full px-3 mb-2'>
        <div className='bg-[#373535] h-[50px] flex items-center justify-center w-[50px] rounded-full' onClick={()=> setLiked(!liked)}>
          <img src={`${liked ? '/heart_filled.svg' : '/heart_outline.svg'} `} alt="" className={`${liked && 'h-6'}`} />
        </div>
        <div className='hover:no-underline w-[80%]'>
          <button className='px-14 text-sm font-bold py-3 text-black rounded-3xl bg-[#FED52A] w-full' onClick={()=> setIsOpen(true)}>
            장바구니
          </button>
        </div>
      </div>
    </div>

    {isOpen && <ProductDetailPopup setIsOpen={setIsOpen} />}
    
    <Footer address='home'/>
    </>
  )
}

export default GiftProductDetails