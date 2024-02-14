import React, { useState } from 'react'

const FavouriteProducts = ({product}) => {
    const [checked, setChecked] = useState(false)
  
    return (
        <div
            className="relative flex-shrink-0 w-[30%] mb-4"
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-28 object-cover rounded-xl"
                />
                <div className="absolute top-1 right-2">
                    <input
                        type="checkbox"
                        className="h-4 w-4 border border-[#f6c700] text-[#F6C700] checkbox"
                    />
                </div>
                <div className="p-2">
                    <p className="text-[14px] font-semibold mb-1">
                         <span className="text-[#F6C700] mr-2">
                            {product.discount}
                        </span>
                        {product.price}
                    </p>
                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                        {product.title}
                    </p>
                    <p className="text-[12px] text-[#8D8D8D] font-[400]">
                        {product.description}
                    </p>
                </div>
        </div>
  )
}

export default FavouriteProducts