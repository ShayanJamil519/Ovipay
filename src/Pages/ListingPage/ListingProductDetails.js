import React from 'react';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import medium from '../../assets/img/medium.png';
import DetailsHeader from './Details-header';
import { IoIosStar } from 'react-icons/io';
import PriceFooter from './PriceFooter';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
];

const ListingProductDetails = () => {
  return (
    <>
      <DetailsHeader />
      <div className="w-full bg-[#f9f9f9] min-h-[100vh] pb-[120px] ">
        <div className="w-full py-3 flex justify-center">
          <img src={medium} alt="" style={{ width: '350px', height: 'auto' }} />
        </div>
        <div className="title flex justify-between px-4">
          <h5 className="w-full mb-3 text-2xl text-black">세인트존스 호텔</h5>
          <p className="flex items-center gap-x-1 ">
            <span className="text-[#3E3E3E] font-semibold flex items-center gap-x-1">
              <IoIosStar size={17} className="text-[#FD9942]" /> 4.8
            </span>
          </p>
        </div>
        <div className="p-4">
          {products.map((item) => (
            <div
              className=" rounded-[20px] mx-auto bg-white  flex gap-x-3 p-3 my-3"
              style={{
                boxShadow: '0px 2px 150px 0px #CACACA21',
              }}
            >
              <img src={medium} alt="" />
              <div className="w-full mt-2">
                <h6 className="text-lg font-bold text-black">{item.title}</h6>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4  flex flex-col gap-2">
          <p className="text-[#3E3E3E] font-normal text-[14px] leading-[25px]">
            이 곳은 숙박 업소에 대한 설명이 들어갈 예정입니다.
          </p>
          <p className="text-[#FED52A] font-normal text-[14px] leading-[25px]">Read more...</p>
        </div>
        <div className="py-2 px-4">
          <div className="title">
            <h2 className="text-[#3E3E3E] font-bold text-[16px] leading-[21.82px]">Photos</h2>
          </div>
          <div className="py-3 flex gap-3" style={{ overflow: 'hidden', overflowX: 'auto' }}>
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
            <img src={medium} alt="" style={{ width: '95px', height: 'auto' }} />
          </div>
        </div>
        <div className="py-2 px-4">
          <div className="title flex justify-between">
            <h2 className="text-[#3E3E3E] font-bold text-[16px] leading-[21.82px]">Reviews</h2>
            <Link to="/listing/reviews" className=" hover:no-underline">
              <p className="text-[#CACACA] cursor-pointer font-normal text-[14px] leading-[25px]">See All</p>
            </Link>
          </div>

          <div className="py-2">
            <div className="my-4 flex justify-between ">
              <div className="flex gap-3">
                <img src={medium} alt="" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
                <div className=" mt-2">
                  <h6 className="text-lg font-bold text-black">유으머어</h6>
                  <p className="text-sm text-gray-400">이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.</p>
                </div>
              </div>
              <p className="flex items-center gap-x-1 ">
                <span className="text-[#3E3E3E] font-semibold flex items-center gap-x-1">
                  <IoIosStar size={17} className="text-[#FD9942]" /> 4.8
                </span>
              </p>
            </div>
            <div className="my-4 flex justify-between ">
              <div className="flex gap-3">
                <img src={medium} alt="" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
                <div className=" mt-2">
                  <h6 className="text-lg font-bold text-black">테스트으</h6>
                  <p className="text-sm text-gray-400">이곳에는 리뷰가 작성이 될 예정입니다. 감사합니다.</p>
                </div>
              </div>
              <p className="flex items-center gap-x-1 ">
                <span className="text-[#3E3E3E] font-semibold flex items-center gap-x-1">
                  <IoIosStar size={17} className="text-[#FD9942]" /> 4.8
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-3  flex flex-col gap-2">
          <p className="text-[#FED52A] font-normal text-[14px] leading-[25px]">See more reviews</p>
        </div>
      </div>
      <PriceFooter />
    </>
  );
};

export default ListingProductDetails;
