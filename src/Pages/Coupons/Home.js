import React, { useState } from 'react';
import Header from './Header';
import ConfirmationDone from '../../components/modals/ConfirmationDone';
import ConfirmationModal from '../../components/modals/ConfirmationModal';
import verified from '../../assets/img/coupon-form-verified.png';
import form from '../../assets/img/coupon-form.png';
import { IoCopyOutline } from "react-icons/io5";


export default function Home() {
  const [activeButton, setActiveButton] = useState('used');
  const [code, setCode] = useState('ND81KW92MD1281JDOW1')
  const [confirm, setConfirm] = useState(false)
  const [done, setDone] = useState(false)
  const [isPopUpVisible1, setIsPopUpVisible1] = useState(false);
  const [isPopUpVisible2, setIsPopUpVisible2] = useState(false);

  const handleShowPopUp1 = () => {
    setIsPopUpVisible1(!isPopUpVisible1);
  };
  const handleShowPopUp2 = () => {
    setIsPopUpVisible2(!isPopUpVisible2);
  };
  const toggleConfirm = () =>
  {
      setConfirm(!confirm)
  }
  const toggleDone = () =>
  {
      setConfirm(false)
      setDone(!done)
  }
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code).then(
      function () {
        // console.log('Code copied to clipboard');
      },
      function (err) {
        console.error('Unable to copy to clipboard', err);
      }
    );
  };
  return (
    <>
    <Header/>
    <div className='py-4 bg-gray-100 min-h-[100vh]'>
      <div className='flex flex-col mx-3 mb-3 bg-white shadow-sm rounded-xl'>
        <p className='pt-3 pl-3 font-bold'>쿠폰 코드로 등록하기</p>
        <div className='flex justify-between items-center py-3 mt-3 mb-3 mx-3 px-3 border rounded-[13px] '>
          <p className='font-bold '>MFSL08122</p>
          <button onClick={toggleConfirm} className='h-[30px] bg-gray-200 rounded-[12px] px-3 font-bold'>등록하기</button>
        </div>
      </div>

      <div className='flex justify-between px-1 py-1 mx-3 border rounded-full bg-slate-200'>
        <button
          onClick={() => setActiveButton('used')}
          className={activeButton === 'used' ? 'active-button bg-white px-[22px]  py-2 rounded-full' : 'pl-5'}
          >
          사용한 쿠폰
        </button>
        <button
          onClick={() => setActiveButton('unused')}
          className={activeButton === 'unused' ? 'active-button bg-white px-[22px] py-2 rounded-full' : 'pr-5'}
          >
          미 사용 쿠폰
        </button>
      </div>

 {/* This is for onclick first button */}
      {activeButton === 'used' && (
        <div className='flex justify-between px-2 mt-5'>
          <div className='w-full mx-3 shadow-lg cursor-pointer bg-slate-200'>
            <div onClick={handleShowPopUp1} className='bg-[#FED52A] pt-4 pl-3 rounded-t-xl text-white '>
              <p>이벤트 참여</p>
              <p>10,000원</p>
            </div>
            <p onClick={handleShowPopUp2} className='pt-2 pb-3 pl-3 bg-white rounded-b-xl'>사용완료</p>
          </div>

          <div className='w-full mx-3 shadow-lg cursor-pointer bg-slate-200'>
            <div onClick={handleShowPopUp1} className='bg-[#FED52A] pt-4 pl-3 rounded-t-xl text-white '>
              <p>후기 작성</p>
              <p>500원</p>
            </div>

            <p onClick={handleShowPopUp2} className='pt-2 pb-3 pl-3 bg-white rounded-b-xl'>기간초과</p>
          </div>
        </div>

)}

      {/* This is for onclick second button */}

      {activeButton === 'unused' && (
        <div className='flex justify-between px-2 mt-5 cursor-pointer'>
          <div className='w-full mx-3 shadow-lg bg-slate-200'>
            <div onClick={handleShowPopUp1} className='bg-[#FED52A]  pt-4 pl-3 rounded-t-xl text-white '>
              <p>이벤트 참여</p>
              <p>10,000원</p>
            </div>
            <p onClick={handleShowPopUp2} className='pt-2 pb-3 pl-3 bg-white rounded-b-xl'>남은기간 15일</p>
          </div>

          <div className='w-full mx-3 shadow-lg cursor-pointer bg-slate-200'>
            <div onClick={handleShowPopUp1} className='bg-[#FED52A]  pt-4 pl-3 rounded-t-xl text-white '>
              <p>후기 작성</p>
              <p>500원</p>
            </div>

            <p onClick={handleShowPopUp2} className='pt-2 pb-3 pl-3 bg-white rounded-b-xl'>남은기간 7일</p>
          </div>
        </div>

)}
 {isPopUpVisible1 && (
        <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center w-full pb-2 text-center bg-white border-t-2 rounded-t-2xl border-[#fed52a]'>
           <div  onClick={handleShowPopUp1} className='flex items-center justify-center w-full py-3 mb-3 cursor-pointer'>
           <div className='w-10 h-[5px] bg-gray-400 rounded-md'></div>
           </div>
          
          <img
            src={form}
            alt="scan code bar"
            className='mb-3'
            />
          <h1 className='font-bold text-[18px] py-1'>이벤트 참여 쿠폰  🎉</h1>
          <p className='py-1 font-semibold text-gray-500 text-[13px]'>10,000원</p>
          <p className='py-1 font-semibold text-gray-500 text-[13px]'>이벤트에 참여해주셔서 감사합니다!</p>
          <h3 className='font-bold text-[18px] my-4'>남은기간 : 사용완료</h3>
          <button
            className='w-[80%] bg-[#FED52A] font-bold text-[18px] rounded-full px-5 py-3'
            onClick={handleShowPopUp1}
            >
            닫 기
          </button>
        </div>
      )}

{isPopUpVisible2 && (
        <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center w-full pb-2 text-center bg-white border-t-2 rounded-t-2xl border-[#fed52a]'>
           <div  onClick={handleShowPopUp2} className='flex items-center justify-center w-full py-3 mb-3 cursor-pointer'>
           <div className='w-10 h-[5px] bg-gray-400 rounded-md'></div>
           </div>
          
          <img
            src={verified}
            alt="scan code bar"
            className='mb-3'
            />
          <h1 className='font-bold text-[18px] py-1'>이벤트 참여 쿠폰  🎉</h1>
          <p className='py-1 font-semibold text-gray-500 text-[13px]'>10,000원</p>
          <p className='py-1 font-semibold text-gray-500 text-[13px]'>이벤트에 참여해주셔서 감사합니다!</p>
          <h3 className='font-bold text-[18px] my-4'>남은기간 : 15일</h3>
          <div className='w-[80%] bg-gray-200 rounded-xl px-3 py-3 my-3 items-center flex justify-between'>
            <p>{code}</p>
            <IoCopyOutline size={25} onClick={handleCopyCode} className='cursor-pointer'/>
          </div>
          <button
            className='w-[80%] bg-[#FED52A] font-bold text-[18px] rounded-xl px-5 py-3'
            onClick={handleShowPopUp2}
            >
            닫 기
          </button>
        </div>
      )}

    </div>
    <ConfirmationDone isOpen={done} toggle={toggleDone} />
    <ConfirmationModal isOpen={confirm} toggle={toggleConfirm} toggleConfirm={toggleDone} />
</>
  );
}
