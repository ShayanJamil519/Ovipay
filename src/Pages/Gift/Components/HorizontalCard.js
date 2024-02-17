import React, { useState } from 'react'

const HorizontalCard = ({product}) => {
    const [liked, setLiked] = useState(false);

  return (
        <div className="relative flex-shrink-0 w-36">
                <img src={product.image} alt={product.title} className="w-full h-36 object-cover rounded-lg" />
                <div className="absolute top-2 left-2 bg-[#FFB800] text-white px-2 rounded-[5px]">
                        <span className="text-[14px] font-[900]">{product.id}</span>
                </div>
                <div className="absolute top-2 right-2" onClick={() => setLiked(!liked)}>
                    <img src={`${liked ? '/heart_filled.svg' : '/heart.svg'}`} alt="Heart" className="w-6 h-6" />
                </div>
                <div className="p-2">
                    <p className="text-[14px] font-semibold mb-1"><span className="text-[#F6C700] mr-2">{product.discount}</span>{product.price}</p>
                    <p className="text-[11px] text-[#8D8D8D] font-[400]">{product.title}</p>
                    <p className="text-[11px] text-[#464441] font-[400]">{product.description}</p>
                </div>
        </div>
  )
}

export default HorizontalCard