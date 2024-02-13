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
// import CouponModal from './Modals/CouponModal';

// import required modules
import {  Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { IoIosStar } from 'react-icons/io';
import Card from './components/Card';
import CouponModal from './Modals/CouponModal'

const StoreDetails = () => {

  const [isOpen, setIsOpen] = useState(false);

  const cardData = [
    { id: 1, category: "허니콤보세트", description: "5% 할인쿠폰", price: "최소주문금액 10,000원" },
    { id: 2, category: "허니콤보세트", description: "5% 할인쿠폰", price: "최소주문금액 10,000원" },
  ];

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
              <h6 className='text-[20px] font-bold mt-2'>교촌치킨 마곡점</h6>
              <p className='text-sm text-[#928F8B] font-normal'>치킨</p>    
          </div>
          <div className='flex items-center gap-x-1'>
            <IoIosStar size={17} className='text-[#FED52A]'/>
            <span>5</span>
          </div>
        </div>

        {/* This div is for card */}
        <div className='flex flex-col items-center justify-center mt-6'>
            <div className='w-full flex items-center flex-col px-3'>
                {cardData.map((card) => (
                    <Card card={card} setIsOpen={setIsOpen} />
                ))}
            </div>
        </div>

      </div>

      {/* Modal */}
      {isOpen && <CouponModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      
      <Footer address='home'/>
    </>
  )
}

export default StoreDetails