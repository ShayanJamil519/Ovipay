import React, { useState, useRef } from 'react';

const FilterModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const popupRef = useRef();

  // Array of different filters
  const filters = [
    { name: '생일', value: '' },
    { name: '부모님 선물', value: '' },
    { name: '부담없는 선물', value: '' },
    { name: '먹거리', value: '' },
    { name: '명품 선물', value: '' },
    { name: '키즈', value: '' },
    { name: '감성 선물', value: '' },
    { name: '상품권', value: '' },
    { name: '집들이', value: '' },
    { name: '교환권', value: '' },
    { name: '설 선물', value: '' },
    { name: '내 주변위치', value: '' },
];

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full" onClick={handleClosePopup}>
      <div
        ref={popupRef}
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-3xl border-2 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ minHeight: '75vh' }}
      >
        <div className='flex flex-col'>
            <div className='flex flex-col mt-6 px-4'>
                <h1 className='text-[19px] font-[700]'>Filter</h1>
                <p className='text-[14px] font-[400] my-2'>카테고리당 한 가지만 선택이 가능합니다.</p>
            </div>
            <div></div>

            {/* Filter 1 */}
            <div className="my-4">
                <h1 className="px-4 py-1 font-[600]">가격대별</h1>
                <div className="overflow-x-auto whitespace-nowrap">
                    <div className="flex items-center px-3 mt-2 font-bold gap-x-4 gap-y-5">
                        {filters.map((filter, index) => (
                        <h6
                            key={index}
                            onClick={() => {
                            setSelectedCategory(filter.name);
                            handleSelectCategory(filter.name);
                            }}
                            className={`${
                            selectedCategory === filter.name
                                ? 'bg-[#FED52A]'
                                : 'bg-white text-[#AAAAAA] border border-[#DDDDDD]'
                            } cursor-pointer min-w-[110px] text-[14px] text-center py-2 rounded-[50px] border border-[#DDDDDD] mr-2`}
                        >
                            {filter.name}
                        </h6>
                        ))}
                    </div>
                </div>
            </div>


            {/* Filter 2 */}
            <div className="mt-2 mb-6">
                <h1 className="px-4 py-1 font-[600]">기간</h1>
                <div className="overflow-x-auto whitespace-nowrap">
                    <div className="flex items-center px-3 mt-2 font-bold gap-x-4 gap-y-5">
                        {filters.map((filter, index) => (
                            <h6
                                key={index}
                                onClick={() => {
                                setSelectedCategory(filter.name);
                                handleSelectCategory(filter.name);
                                }}
                                className={`${
                                selectedCategory === filter.name
                                    ? 'bg-[#FED52A]'
                                    : 'bg-white text-[#AAAAAA] border border-[#DDDDDD]'
                                } cursor-pointer min-w-[110px] text-[14px] text-center py-2 rounded-[50px] border border-[#DDDDDD] mr-2`}
                            >
                                {filter.name}
                            </h6>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filter 3 */}
            <div className=''>
                <h1 className="px-4 py-1 font-[600]">GIFT 카테고리</h1>
                <div className="flex flex-wrap items-center w-full px-3 mt-2 font-bold gap-x-4 gap-y-3">
                        {filters.map((filter, index) => (
                            <h6
                            key={index}
                            onClick={() => {
                                setSelectedCategory(filter.name);
                                handleSelectCategory(filter.name);
                            }}
                            className={`${
                                selectedCategory === filter.name
                                ? 'bg-[#FED52A]'
                                : 'bg-white text-[#AAAAAA] border border-[#DDDDDD]'
                            } cursor-pointer min-w-[110px] text-[14px] text-center py-2 rounded-[50px]`}
                            >
                            {filter.name}
                            </h6>
                        ))}
                </div>
            </div>

            <div className="w-[90%] mx-3 mt-16 absolute bottom-[5%]">
                <button
                    className="w-full bg-[#FED52A] py-2 px-3 bottom-1 rounded-[50px] font-bold text-[22px]"
                >
                    적 용
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default FilterModal;
