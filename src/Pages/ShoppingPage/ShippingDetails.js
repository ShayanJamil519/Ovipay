import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { FormGroup, Input } from 'reactstrap'
import { CiSearch } from 'react-icons/ci'
import { IoOptionsOutline } from "react-icons/io5";
import product from '../../assets/img/product-item.png'
import ConfirmationModal from '../../components/modals/ConfirmationModal'
import FilterModal from '../../components/modals/FilterModal'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ShippingDetails = () => {
    const [isOpen, setIsOpen] = useState(false)

 

    const toggleOpen = () =>
    {
        setIsOpen(!isOpen)
    }
      
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center justify-center w-full px-4 '>
     {/* Search bar for items */}
     <FormGroup className="flex items-center justify-center w-full gap-x-2">
         <CiSearch size={40} type='submit' className='cursor-pointer bg-[#FED52A] z-10 absolute left-[6.6%] p-2 rounded-xl text-white'/>
         <Input
             type="text"
             placeholder="배송내역 검색..."
             className="rounded-xl py-[25px] pl-14 border-[#FED52A] w-[95%] text-gray-400 bg-[#ffffff] focus:outline-none "
         />
         <Link to='/shopping/filter' className='hover:no-underline'><IoOptionsOutline onClick={toggleOpen} size={47} className='cursor-pointer p-2 rounded-xl text-white bg-[#FED52A]'/> </Link>
     </FormGroup>

     <h1 className='w-full text-xl font-semibold'>배송내역</h1>

     <div className='flex flex-col items-center justify-center w-full gap-y-2'>
        
       <div className='w-[95%] rounded-xl shadow-md flex gap-x-3 p-3 mt-4'>
         <img src={product} alt="" />
         <div className='w-full mt-2'>
             <h6 className='text-lg font-bold text-black'>테스트 상품</h6>
             <p className='text-sm text-gray-400'>가전제품</p>
             <div className='flex flex-col items-end justify-center w-full mt-3'>
             <button className='bg-[#f2f2f2] px-3 text-sm py-1 rounded-xl'>상세내역</button>
             </div>
         </div>    
       </div>
       <div className='w-[95%] rounded-xl shadow-md flex gap-x-3 p-3 mt-4'>
         <img src={product} alt="" />
         <div className='w-full mt-2'>
             <h6 className='text-lg font-bold text-black'>테스트 상품</h6>
             <p className='text-sm text-gray-400'>가전제품</p>
             <div className='flex flex-col items-end justify-center w-full mt-3'>
             <button className='bg-[#f2f2f2] px-3 text-sm py-1 rounded-xl'>상세내역</button>
             </div>
         </div>    
       </div>
        
     </div>
    </div>
    <Footer address='account'/>
    {/* <FilterModal toggle={toggleOpen} isOpen={isOpen}/> */}
    </>
  )
}

export default ShippingDetails