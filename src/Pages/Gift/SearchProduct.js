import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { MdOutlineMyLocation } from "react-icons/md";
import { ImSearch } from "react-icons/im";
const SearchProduct = () => {
    const history = useHistory();

  const handleBackClick = () => {
      // Go back to the previous page
      history.goBack();
  };
  return (
    <>
    <div className="fixed top-0 z-40 w-full ">

<nav className='w-full px-2 py-3 bg-white md:py-9 md:px-6 '>
<div  className="container flex items-center justify-between p-0">
<IoIosArrowBack onClick={handleBackClick} size={35} className='rounded-full p-1 bg-[#f6f6f6] cursor-pointer text-black/75'/>




</div>
</nav>

</div>



<div className="mb-[66px]"></div>
    <div className='flex flex-col items-center justify-center w-full '>
        <div className='flex items-center justify-between w-full px-3 mt-3'>
        <div className='flex items-center gap-x-2'>
        <MdOutlineMyLocation size={30} className='text-red-600' />   
        <h6 className='text-lg font-semibold'>위치</h6>
        </div>
        <IoIosArrowBack onClick={handleBackClick} size={25} className='rotate-180 rounded-full cursor-pointer text-black/50'/>
        </div>
        
        <Link to='/gift-home' className='hover:no-underline '><div className='relative cursor-pointer top-28'>
        <ImSearch size={130} className='text-black/30' />
        <p className='font-extrabold text-center text-black/30'>제품 검색...</p>
        </div></Link>
    </div>
    </>
  )
}

export default SearchProduct