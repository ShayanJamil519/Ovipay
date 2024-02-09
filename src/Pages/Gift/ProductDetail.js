import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
// import CouponModal from './Modals/CouponModal'
import FilterModal from './Modals/FilterModal'

const ProductDetail = () => {
  
  return (
    <>
        <Header />

        {/* <CouponModal /> */}
        <FilterModal />

        <Footer />
    </>
  )
}

export default ProductDetail