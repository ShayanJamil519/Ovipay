import React, { useRef } from 'react';

const CheckoutModal = ({isOpen, setIsOpen}) => {
  
  const popupRef = useRef();

  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };


  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full`} onClick={handleClosePopup}>
      <div
        ref={popupRef}
        className={`fixed bottom-0 left-0 right-0 overflow-y-scroll bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-3xl border-2 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        <div className='flex flex-col'>
            <div className='flex items-center justify-center flex-col mt-16'>
                <img src="/barcode.svg" alt="" style={{height: '10%'}} />
                <img src="/dish.png" alt="" style={{height: '20vh'}} />
                <p className='text-[17px] text-center my-2'>온가족이 즐기는 <br /> 따뜻하고 오붓한 set!</p>
                <h1 className='text-[35px] font-[700] text-center'>38,000원</h1>
            </div>
            <div></div>

            <div className="w-[90%] mx-3 mt-16 mb-8">
                <div className='flex flex-col items-center justify-center mb-6 w-full px-2 gap-2'>
                    <div className='flex justify-between w-full items-start'>
                        <p>저장날짜</p>
                        <p>2023. 01. 02</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[#CA1C1C]'>
                        <p>만료기한</p>
                        <p>2024. 01. 02 까지</p>
                    </div>
                    <div className='flex justify-between w-full items-end text-[#406FC9]'>
                        <p>거래 후 잔액</p>
                        <p>200,683원</p>
                    </div>
                </div>
                <button
                    className="w-full bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px]"
                >
                    저 장
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
