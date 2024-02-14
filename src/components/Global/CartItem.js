import React, { useState } from 'react'
import product from "../../assets/img/product-item.png";
import { FaPlusCircle } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";
import { FaCircleMinus } from "react-icons/fa6";

const CartItem = () => {
    const [number, setNumber] = useState(0);
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

  return (
    <div className="flex items-center justify-between w-full p-2 mt-4 shadow-md rounded-xl gap-x-3 bg-white" style={{boxShadow: '10px 24px 54px 0px #0000000A'}}>
                        <img src={product} alt="" />
                        <div className="">
                            <h6 className="text-[14px] font-[600] text-black mb-1" style={{lineHeight: '19.07px'}}>
                                오아 공기청정기
                            </h6>
                            <p className="text-[14px] font-[400] text-[#AAAAAA]" style={{lineHeight: '19.07px'}}>
                                가전제품 / 49,900원
                            </p>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <FaCircleMinus
                                onClick={decrease}
                                role="button"
                                size={26}
                                className="text-[#E1E1E1] cursor-pointer"
                            />
                            {number}
                            <BiSolidPlusCircle 
                                onClick={increase}
                                role="button"
                                size={30}
                                className="text-[#FED52A] cursor-pointer"
                            />
                        </div>
                    </div>
  )
}

export default CartItem