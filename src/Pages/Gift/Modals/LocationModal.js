import React, { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FormGroup, Input } from 'reactstrap';

const LocationModal = ({title, isOpen, setIsOpen}) => {
  const popupRef = useRef();

    const results=[
        { heading: "Home", subtitle: "서울특별시 홍길동로 삼겹살", image: '/gps_yellow.svg' },
        { heading: "서울특별시 홍길동로 삼겹살", subtitle: "서울특별시 홍길동로 삼겹살 곱창 보쌈 201호", image: '/marker.svg' },
        { heading: "서울특별시 홍길동로 삼겹살", subtitle: "서울특별시 홍길동로 삼겹살 곱창 보쌈 201호", image: '/marker.svg' }
    ];

  const handleClosePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const showHamburger = false;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full" onClick={handleClosePopup}>
      <div
        ref={popupRef}
        className={`fixed bottom-0 left-0 overflow-y-scroll right-0 bg-white z-50 transform transition-all ease-in-out duration-300 rounded-t-2xl border-2 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        <div className='flex flex-col'>
            <div className="w-full my-2">
                <nav className="w-full px-2 py-3 bg-white md:py-9 md:px-6 ">
                    <div className="container flex items-center justify-between p-0">
                        <IoIosArrowBack
                            // onClick={handleBackClick}
                            size={35}
                            className={`rounded-full p-1 bg-[#f6f6f6] ${
                                showHamburger ? "" : "invisible"
                            } cursor-pointer text-black/75`}
                        />

                        <h6 className="text-[17px] font-bold text-black">
                            {title}
                        </h6>

                        {/* menu icon */}
                        <img
                            src="/settings__cross.svg"
                            alt="logo"
                            className="cursor-pointer mr-3"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </nav>
            </div>
            
            {/* Search bar for items */}
            <Link to="/gift/location">
                <FormGroup className="flex items-center border-none justify-center w-full px-3">
                    <img
                        src="/search.svg"
                        alt=""
                        className="cursor-pointer z-10 absolute left-[10%] p-2 rounded-xl text-white"
                    />
                    <Input
                        type="text"
                        placeholder="지번, 도로명, 건물명으로 검색"
                        className="rounded-xl py-[25px] border-none pl-14 w-[95%] text-gray-400 bg-[#F5F6F8] focus:outline-none "
                    />
                    {/* <img src="/cross.svg" alt="" className="cursor-pointer z-10 absolute bg-[#D9D9D9] right-[10%] p-2 rounded-xl text-white" /> */}
                </FormGroup>
            </Link>
            
            <div className='flex justify-between px-4 mx-3 mb-3'>
                <div className='flex gap-3'>
                    <img src="/gps.svg" alt="" />
                    <p className='font-[400] text-[14px]'>현재 위치로 설정</p>
                </div>
            </div>

            <div className='bg-[#F2F3F7] h-2'></div>

            <div className='px-3'>
                {results.map((result, index) => (
                    <div key={index} className="flex border-b py-3 px-3 justify-between">
                        <div>
                            <div className='flex gap-3 items-start'>
                                <img src={result.image} alt="" className='flex items-start justify-start h-4 mt-1' />
                                <div className="">
                                    <p className={`text-[14px] ${result.heading === 'Home' ? 'font-[600]' : 'font-[400]'}`}>{result.heading}</p>
                                    <p className='text-[12px] font-[400] text-[#AAAAAA]'>{result.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="giftCheckbox"
                                class="border-[#FED52A] p-2 h-5 w-5 checked:bg-[#FED52A] checked:text-[#FED52A]"
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='bg-[#F2F3F7] h-2'></div>

            <div className='px-3'>
                    <div className="flex border-b py-3 px-3 justify-between">
                        <div>
                            <div className='flex gap-3 items-start'>
                                <img src="/gps_yellow.svg" alt="" className='flex items-start justify-start h-4 mt-1' />
                                <div className="">
                                    <p className="text-[14px] font-bold">Office</p>
                                    <p className='text-[12px] font-[400] text-[#AAAAAA]'>서울특별시 홍길동로 여기는 회사</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="giftCheckbox"
                                class="border-[#FED52A] p-2 h-5 w-5 checked:bg-[#FED52A] checked:text-[#FED52A]"
                            />
                        </div>
                    </div>

                    <button
                        className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] font-[600] text-[18px] mt-16 mb-4"
                        onClick={()=> setIsOpen(true)}
                    >
                        주소설정
                    </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default LocationModal;
