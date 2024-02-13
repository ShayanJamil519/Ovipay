import React, { useState, useRef } from 'react';

const SortModal = ({isOpen, setIsOpen}) => {
  
  const popupRef = useRef();

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = (item) => {
    setSelectedOption(item)
  }

  const options = ['담은순', '인기순', '최신순', '저가순'];

  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full`} onClick={handleClosePopup}>
        <div
            ref={popupRef}
            className={`fixed bottom-0 left-0 right-0 overflow-y-scroll bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-2xl border-2 ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ maxHeight: '85vh' }}
        >
        <div className='flex flex-col p-3'>
            <div className='flex justify-center flex-col mt-3 gap-3 mb-8 w-full'>
                <h1 className='mb-4 text-[#0F1121] text-[19px] font-bold'>정렬</h1>
                {
                    options.map((item, index)=> (
                        <div key={index} className='flex justify-between h-6 mb-3 w-full' onClick={()=> handleSelection(item)}>
                            <p className={`text-[17px] ${selectedOption === item ? 'text-[#EC9D05]' : 'text-[#B9B9B9]'} font-[400]`}>{item}</p>
                            {selectedOption === item && <img src="/tick.svg" alt="" className="h-8 w-8" />}
                        </div>
                    ))
                }
            </div>

            <div>
                <button
                    className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] font-bold text-[17px]"
                >
                    닫 기
                </button>
            </div>


        </div>
      </div>
    </div>
  );
};

export default SortModal;
