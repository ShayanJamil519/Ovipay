import React, { useState } from 'react';
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
import CouponModal from './Modals/CouponModal';

// import required modules
import {  Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { IoIosStar } from 'react-icons/io';

const ProductDetails = () => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Header/>
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
            <IoIosStar size={17} className='text-[#FED52A]'/>
            <IoIosStar size={17} className='text-[#FED52A]'/>
            <IoIosStar size={17} className='text-[#FED52A]'/>
            <IoIosStar size={17} className='text-[#FED52A]'/>
          </div>
        </div>

        <div className='flex items-center justify-center mt-12 overflow-scroll gap-4'>
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
        </div>

        <p className='mt-4 text-xl w-[87%] px-4 '>여기서는 상품에 대한 상세 소개가 있을 예정 일반적인 상품 상세페이지라고 생각하시면 됩니다.</p>

        <div className='flex items-center justify-between w-full px-3 mb-2 mt-14 gap-4'>
          <img src="/heart_outline.svg" alt="" />
          <button className='w-full px-14 text-sm font-bold py-3 text-black rounded-3xl bg-[#FED52A]' onClick={togglePopup}>장바구니</button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <CouponModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      
      <Footer address='home'/>
    </>
  )
}

export default ProductDetails