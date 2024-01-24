import React, { useState } from 'react';
import Header from './Header';

import medium from '../../assets/img/medium.png';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { IoIosStar } from 'react-icons/io';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';
const Home = () => {
  const products = [
    {
      id: 1,
      title: '세인트존스 호텔',
      description: '강원도 강릉시',
      rating: '4.8',
      reviews: '1283',
    },
    {
      id: 2,
      title: '루나 호텔',
      description: '서울 강남구',
      rating: '4.5',
      reviews: '978',
    },
    {
      id: 3,
      title: '블루웨이브 리조트',
      description: '제주도 서귀포시',
      rating: '4.2',
      reviews: '754',
    },
    {
      id: 4,
      title: '에버그린 펜션',
      description: '경기도 양평군',
      rating: '4.6',
      reviews: '1092',
    },
    {
      id: 5,
      title: '선샤인 비치 리조트',
      description: '부산 해운대구',
      rating: '4.9',
      reviews: '1437',
    },
    {
      id: 6,
      title: '모닝 라이즈 호텔',
      description: '대구 중구',
      rating: '4.3',
      reviews: '821',
    },
    {
      id: 7,
      title: '골든 스피릿 펜션',
      description: '강원도 춘천시',
      rating: '4.7',
      reviews: '1156',
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full py-4 bg-[#f9f9f9]">
        <div className="flex flex-col items-center justify-center w-full ">
          <h5 className="w-full px-4 mb-3 text-2xl text-black">최근 본 숙소</h5>

          {/* product */}
          {products.map((item) => (
            <Link to="/listing/listingProduct-details" className="w-full hover:no-underline">
              <div
                className="w-[95%] rounded-[20px] mx-auto bg-white  flex gap-x-3 p-3 my-3"
                style={{
                  boxShadow: '0px 2px 150px 0px #CACACA21',
                }}
              >
                <img src={medium} alt="" />
                <div className="w-full mt-2">
                  <h6 className="text-lg font-bold text-black">{item.title}</h6>
                  <p className="text-sm text-gray-400">{item.description}</p>
                  <div className="flex gap-3  w-full mt-2 ">
                    <p className="flex items-center gap-x-1 ">
                      <span className="text-[#3E3E3E] font-semibold flex items-center gap-x-1">
                        <IoIosStar size={17} className="text-[#FD9942]" /> {item.rating}
                      </span>
                    </p>
                    <p className="text-[#CACACA] font-normal text-[11px] mt-1">({item.reviews} Reviews)</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer address={'home'} />
    </>
  );
};

export default Home;
