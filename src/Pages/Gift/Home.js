import React, { useState } from 'react'
import { FormGroup, Input } from 'reactstrap'
import Footer from './Footer'
import Header from './Header'
import { CiSearch } from 'react-icons/ci'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const cards = 
  [
    {
      id: 0,
      
    },
    {
      id: 1,
      
    },
    {
      id: 2,
      
    },
    {
      id: 3,
      
    },
    {
      id: 4,
      
    },
    {
      id: 5,
      
    },
    {
      id: 6,
      
    },
    {
      id: 7,
      
    },
  ]

  return (
    <>
     <Header/> 
     <div className='flex flex-col items-center w-full py-4'>
    <Link to='/gift/search-product' className='flex items-center justify-center w-full hover:no-underline'><button className='w-[95%] flex items-center text-center font-bold text-sm rounded-xl text-black py-2.5 px-3 shadow-md mb-3 bg-[#FED52A] gap-x-1'><FaLocationDot size={18} className='text-black'/> 이 곳을 터치하여 주소를 설정하세요!</button></Link>
    {/* Search bar for items */}
     <FormGroup className="flex items-center justify-center w-full">
         <CiSearch size={40} type='submit' className='cursor-pointer bg-[#FED52A] z-10 absolute left-[3.8%] p-2 rounded-xl text-white'/>
         <Input
             type="text"
             placeholder="GIFT로 마음을 나누세요...."
             className="rounded-xl py-[25px] pl-14 border-[#FED52A] w-[95%] text-gray-400 bg-[#ffffff] focus:outline-none "
         />
     </FormGroup>

    {/* Filters */}
     <div className='flex flex-wrap items-center w-full px-3 mt-2 font-bold gap-x-4 gap-y-5'>
        {/* home appliance */}
        <h6 onClick={() => setSelectedCategory('Appliances')} className={`${selectedCategory === 'Appliances' ? 'bg-[#FED52A]' : 'bg-white'} cursor-pointer text-sm min-w-[110px] text-center py-2 rounded-xl  shadow-md`}>치킨</h6>
        {/* Gifts */}
        <h6 onClick={() => setSelectedCategory('Gift')} className={`${selectedCategory === 'Gift' ? 'bg-[#FED52A]' : 'bg-white'} cursor-pointer min-w-[110px] text-sm text-center py-2 rounded-xl  shadow-md`}>부모님 선물</h6>
        {/* Furniture */}
        <h6 onClick={() => setSelectedCategory('Furniture')} className={`${selectedCategory === 'Furniture' ? 'bg-[#FED52A]' : 'bg-white'} cursor-pointer min-w-[110px] text-sm text-center py-2 rounded-xl  shadow-md`}>내 위치 주변</h6>
     </div>

     <div className='flex flex-col items-center justify-center w-full px-3 mt-4 gap-y-12'>
      <h6 className='w-full text-xl font-semibold'>금주의 인기 GIFT</h6>
      
      <div className='flex flex-wrap items-center justify-around gap-y-4 gap-x-2'>
      {cards.map((item)=>(<div key={item.id} className={`${item.id%2 === 0 ? ' ' : '' } flex flex-col px-4 justify-end py-3 shadow-inner gap-y-2 bg-gray-500/70 rounded-3xl h-[210px] w-[160px]`}> 
          <h1 className='text-lg font-bold text-white'>기프티콘 테스트</h1>
          <p className='text-gray-100 '>치킨</p>
          <h1 className='text-lg font-semibold text-white '>50,000원</h1>
        </div>))}
      </div>
      
     </div>
     
     </div>
    <Footer address={'home'}/>
    </>
  )
}

export default Home