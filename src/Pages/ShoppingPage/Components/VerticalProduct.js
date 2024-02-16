import React, { useState } from 'react'

const VerticalProduct = ({product}) => {
    const [liked, setLiked] = useState(false)
  
    return (
        <div
            className="flex border-b pb-3"
        >
            {/* Product Image */}
            <div className="flex-shrink-0 w-36 mr-4 relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-36 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-[#FED52A] text-white px-2 rounded-[5px]">
                    <span className="text-[14px] font-[900]">
                        {product.id}
                    </span>
                </div>
                <div className="absolute top-2 right-2" onClick={() => setLiked(!liked)}>
                    <img
                        src={`${liked ? '/heart_filled.svg' : '/heart.svg'}`}
                        alt="Heart"
                        className="w-5 h-5"
                    />
                </div>
            </div>
                {/* Product Information */}
                    <div className="flex items-start flex-col justify-start w-full h-full">
                    <p className="text-[11px] text-[#8D8D8D] font-[400] mb-1">
                        {product.title}
                    </p>
                    <p className="text-[14px] text-[#464441] font-[400]">
                        {product.description}
                    </p>
                    <p className="text-[18px] font-[900] mt-2">
                        {product.price}원
                    </p>
                </div>
        </div>
  )
}

export default VerticalProduct