import React, { useState } from 'react';
import { PiMagnifyingGlass } from "react-icons/pi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import img from '../../assets/img/card image gift.png';
import scan from "../../assets/img/bg_bar.png";
import Footer from './Footer';
import Header from './Header';
import FilterModal from '../../components/modals/FilterModal';

export default function Shipping() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleShowPopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
    <Header/>
    <div className='px-3'>
      {/* This div is for input search-bar */}
      <div className='flex justify-between my-4 rounded-xl '>
        <div className='rounded-xl flex  gap-x-2 items-center px-3 py-2 w-full bg-[#f5f6f8]'>
          <PiMagnifyingGlass
            size={30}
            className='text-gray-300 text-start'
          />
          <input
            placeholder='주문내역 검색'
            className='bg-transparent text-[14px]'
          />
        </div>

        <button onClick={toggleOpen} className=''>
          <HiOutlineAdjustmentsHorizontal
            size={50}
            className='bg-[#fed52a] text-white p-[5px] rounded-xl ml-3'
          />
        </button>
      </div>

      {/* This div is for card */}
      <div className='flex flex-col items-center justify-center mt-5'>
        <h1 className='font-bold text-[20px] px-2 w-full'>GIFT 주문내역 </h1>

        <div className='w-[95%] rounded-xl shadow-md flex gap-x-3 p-3 mt-4'>
          <img src={img} alt="" />
          <div className='w-full mt-2'>
            <h6 className='text-lg font-bold text-black'>BHC 20,000원</h6>
            <p className='text-sm text-gray-400'>치킨</p>
            <div className='flex flex-col items-end justify-center w-full mt-3'>
              <button className='bg-[#f2f2f2] px-3 text-sm py-1 rounded-xl' onClick={handleShowPopUp}>상세내역</button>
            </div>
          </div>
        </div>

      </div>

      {/* This card is at button click */}
      {isPopUpVisible && (
        <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center w-full pb-2 text-center bg-white border-t-2 rounded-t-2xl border-[#fed52a]'>
           <div  onClick={handleShowPopUp} className='flex items-center justify-center w-full py-3 cursor-pointer'>
           <div className='w-10 h-[5px] bg-gray-400 rounded-md'></div>
           </div>
          
          <img
            src={scan}
            alt="scan code bar"
            className='w-[220px]  py-1 px-5 border-2 shadow-inner  mb-3'
            />
          <h1 className='font-bold text-[18px] py-1'>BHC 20,000 원</h1>
          <p className='py-1 font-semibold text-gray-500 text-[13px]'>구매날짜 : 2023.01.02</p>
          <p className='py-1 font-semibold text-gray-500 text-[13px]'>오비페이를 이용해주셔서 감사합니다!</p>
          <h3 className='font-bold text-[18px] my-4'>잔액 : 20,000원</h3>
          <button
            className='w-[80%] bg-[#FED52A] font-bold text-[18px] rounded-full px-5 py-3'
            onClick={handleShowPopUp}
            >
            닫 기
          </button>
        </div>
      )}
    </div>
    <FilterModal isOpen={isOpen} toggle={toggleOpen}/>
    <Footer address={'account'}/>
      </>
  );
}
