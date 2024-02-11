import React from 'react'
import { FormGroup, Input } from "reactstrap";
import BankModal from './Modals/BankModal';
import SortModal from './Modals/SortModal';

const LocationSettings = () => {
    
    const results = [
        { heading: "강서구 강서로", type: "도로명", subtitle: "서울 강서구 강서로" },
        { heading: "강서구 강서로", type: "도로명", subtitle: "서울 강서구 강서로" },
        { heading: "강서구 강서로", type: "도로명", subtitle: "서울 강서구 강서로" },
        { heading: "강서구 강서로", type: "도로명", subtitle: "서울 강서구 강서로" },
        { heading: "강서구 강서로", type: "도로명", subtitle: "서울 강서구 강서로" },
        { heading: "강서구 강서로", type: "도로명", subtitle: "서울 강서구 강서로" },
    ];

    const initialData = [
        { heading: "강서구 강서로", subtitle: "서울 강서구 강서로" },
        { heading: "강서구 강서로", subtitle: "서울 강서구 강서로" },
        { heading: "강서구 강서로", subtitle: "서울 강서구 강서로" },
    ];

  return (
    <div className="py-4">
        <div className="flex items-center justify-center mb-6 relative mx-4">
            <img src="/back.svg" alt="" className="absolute left-0 top-1" />
            <p className="text-[17px] font-[700] text-black">위치 설정</p>
        </div>

        {/* Search bar for items */}
        <FormGroup className="flex items-center justify-center w-full px-3">
            <img
                src="/search.svg"
                alt=""
                className="cursor-pointer z-10 absolute left-[10%] p-2 rounded-xl text-white"
            />
            <Input
                type="text"
                placeholder="지번, 도로명, 건물명으로 검색"
                className="rounded-xl py-[25px] pl-14 w-[95%] text-gray-400 bg-[#F5F6F8] focus:outline-none "
            />
            <img src="/cross.svg" alt="" className="cursor-pointer z-10 absolute bg-[#D9D9D9] right-[10%] p-2 rounded-xl text-white" />

        </FormGroup>
        
        <div className='flex justify-between px-4 mx-3 mb-3'>
            <div className='flex gap-3'>
                <img src="/gps.svg" alt="" />
                <p className='font-[400] text-[14px]'>현재 위치로 설정</p>
            </div>
            <img src="/forward.svg" alt="" />
        </div>

        {/* <div className='bg-[#F2F3F7] h-2'></div> */}

        <div className='p-4 bg-[#FAFAFA]'>
            <h1 className='text-[14px] font-[700]'>이렇게 검색해 보세요</h1>
            <ul className='list-disc py-3 px-4'>
                {initialData.map((result, index) => (
                    <div className='mb-3'>
                        <li key={index} className="">
                            <p className='text-[#444444] text-[14px] font-[400]'>{result.heading}</p>
                        </li>
                        <p className="px-2 text-[#A9A9A9] text-[14px]">{result.subtitle}</p>
                    </div>
                ))}
            </ul>
        </div>

        {/* <div>
            {results.map((result, index) => (
                <div key={index} className="border-b py-3 px-3">
                    <h2 className="text-[14px] text-[#444444] font-[400] mb-1">{result.heading}</h2>
                    <div className="flex gap-3 text-[10px] items-center">
                        <span className="text-[#A9A9A9] bg-[#F2F3F7] p-1 rounded-[5px]">{result.type}</span>
                        <span className="text-[#A9A9A9]">{result.subtitle}</span>
                    </div>
                </div>
            ))}
        </div> */}

    </div>
  )
}

export default LocationSettings