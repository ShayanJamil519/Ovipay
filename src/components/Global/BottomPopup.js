import React from 'react'

const BottomPopup = ({toggle, togglehandler}) => {
  return (
    <div className={`${toggle ? '' : 'hidden'} fixed bottom-0 z-50 flex flex-col items-center justify-center w-full pb-10 bg-white border-t-2 border-[#062275] rounded-t-2xl`}>
    <div onClick={togglehandler} className='flex items-center justify-center w-full py-3 cursor-pointer'>
        <div className='w-10 h-[5px] bg-[#062275] rounded-md'></div>
    </div>
            <div className='bg-[#334067] flex flex-col items-center justify-center w-full py-10'>

             <h1 className='text-white text-[18px] font-bold pb-4'>현재 동네가 검색되지 않고 있어요 :)</h1>
            <div className='flex items-center justify-around w-full px-2'>
                <button className='bg-white w-[47%] text-[#062275] font-bold rounded-lg py-1'>내 위치로 검색</button>
                <button className='bg-white w-[47%] text-[#062275] font-bold rounded-lg py-1'>지역으로 검색</button>
            </div>
            </div>
            
            <div className='flex items-center justify-between w-full px-3 pt-2 pb-1'>
                <h2 className='font-bold'>우리동네 범위 설정</h2>
                <button className='px-2 py-1 text-sm border rounded-md'>다이아몬드</button>
            </div>
            <h1 className='w-full px-3 text-[#062275] font-semibold text-sm pb-4'>우리동네 : 미 활성화</h1>

            <input
              type="range"
              min="0"
              max="200"
              step="1"
              className="h-1 mt-3 transition-all duration-500 ease-in-out bg-gray-300 rounded-full appearance-none w-72"
            />
            <div className='flex justify-between mt-3 text-gray-400 w-72 text-[14px]'>
                <h6>100M</h6>
                <h6>전국</h6>
            </div>
            <span className="relative bottom-[70px] text-[#062275] font-bold">2<span className='text-[10px]'>KM</span></span>
            <div className='flex items-center justify-center text-sm text-gray-500 gap-x-4'>
                <div className='flex flex-col items-start justify-center gap-y-1'>
                    <h6>전국 최고시세</h6>
                    <div className='py-3 pl-16 pr-3 text-black border rounded-lg'>
                    330,239
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-y-1'>
                    <h6 >전국 최고시세  <span className='text-[#062275] font-bold ml-2.5'>전국</span></h6>
                    <div className='py-3 pl-16 pr-3 text-black border rounded-lg'>
                    330,239
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-full text-[13px]'>

            <button className='w-[80%] bg-[#062275] py-3 rounded-xl mt-3 text-white font-bold'>우리 동네 설정 완료</button>
            </div>


</div>
  )
}

export default BottomPopup