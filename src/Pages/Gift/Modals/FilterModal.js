import React, { useState, useRef } from 'react';

const FilterModal = ({isOpen, setIsOpen}) => {
  
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryTwo, setSelectedCategoryTwo] = useState(null);
    const [selectedCategoryThree, setSelectedCategoryThree] = useState(null);
  const popupRef = useRef();

  // Array of different filters
  const filters = [
    { name: '생일', value: '' },
    { name: '가전제품', value: '가전제품' },
    { name: '반려동물', value: '반려동물' },
    { name: '욕실', value: '욕실' },
    { name: '전자기기', value: '전자기기' },
    { name: '가구', value: '가구' },
    { name: '의류', value: '의류' },
    { name: '생활용품', value: '생활용품' },
    { name: '식품', value: '식품' },
    { name: '유아ㆍ아동', value: '유아ㆍ아동' },
    { name: '뷰티', value: '뷰티' },
    { name: '데코ㆍ식물', value: '데코ㆍ식물' },
    { name: '캠핑ㆍ레저', value: '캠핑ㆍ레저' },
];

const filterOne = [
    { name: '전체', value: '전체' },
    { name: '1만원 이하', value: '1만원 이하' },
    { name: '1~2만원대', value: '1~2만원대' },
    { name: '3~4만원대', value: '3~4만원대' },
    { name: '5만원 이상', value: '5만원 이상' },
];

const filterTwo = [
    { name: '전체', value: '전체' },
    { name: '1주일', value: '1주일' },
    { name: '1개월', value: '1개월' },
    { name: '1년', value: '1년' },
    { name: '1년이상', value: '1년이상' },
];



  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full`} onClick={handleClosePopup}>
      <div
        ref={popupRef}
        className={`fixed bottom-0 overflow-y-scroll left-0 right-0 bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-2xl border-2 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        <div className='flex flex-col'>
            <div className='flex flex-col mt-4 px-4'>
                <h1 className='text-[19px] font-[700]'>Filter</h1>
                <p className='text-[14px] font-[400] my-2 text-[#8A8A8E]'>카테고리당 한 가지만 선택이 가능합니다.</p>
            </div>

            {/* Filter 1 */}
            <div className="my-4">
                <h1 className="px-4 py-1 font-[600]">가격대별</h1>
                <div className="overflow-x-auto whitespace-nowrap">
                    <div className="flex items-center px-3 mt-2 font-bold gap-y-5">
                        {filterOne.map((filter, index) => (
                        <h6
                            key={index}
                            onClick={() => {
                            setSelectedCategory(filter.name);
                            }}
                            className={`${
                            selectedCategory === filter.name
                                ? 'bg-[#FED52A]'
                                : 'bg-white text-[#AAAAAA] border border-[#DDDDDD]'
                            } cursor-pointer min-w-[110px] text-[14px] font-[400] text-center py-2 rounded-[50px] border border-[#DDDDDD] mr-2`}
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
                    <div className="flex items-center px-3 mt-2 font-bold gap-y-5">
                        {filterTwo.map((filter, index) => (
                            <h6
                                key={index}
                                onClick={() => {
                                setSelectedCategoryTwo(filter.name);
                                }}
                                className={`${
                                selectedCategoryTwo === filter.name
                                    ? 'bg-[#FED52A]'
                                    : 'bg-white text-[#AAAAAA] border border-[#DDDDDD]'
                                } cursor-pointer min-w-[110px] text-[14px] font-[400] text-center py-2 rounded-[50px] border border-[#DDDDDD] mr-2`}
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
                <div className="flex flex-wrap items-center w-full px-3 mt-2 font-bold gap-x-2 gap-y-3">
                    {filters.map((filter, index) => (
                        <h6
                            key={index}
                            onClick={() => {
                                setSelectedCategoryThree(filter.name);
                            }}
                            className={`${
                                selectedCategoryThree === filter.name
                                ? 'bg-[#FED52A]'
                                : 'bg-white text-[#AAAAAA] border border-[#DDDDDD]'
                            } cursor-pointer min-w-[100px] font-[400] text-[14px] text-center px-2 py-2 rounded-[50px]`}
                        >
                            {filter.name}
                        </h6>
                    ))}
                </div>
            </div>

            <div className="w-[90%] mx-3 mt-12 mb-4">
                <button
                    className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] font-bold text-[17px]"
                    onClick={()=>setIsOpen(false)}
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
