import React from 'react'

const GiftDetailsComponent = ({setIsOpen}) => {

  const products = [
    {
        id: 1,
        image: "/recommended__product__1.png",
    },
    {
        id: 2,
        image: "/recommended__product__1.png",
    },
    {
        id: 3,
        image: "/recommended__product__1.png",
    },
    {
        id: 4,
        image: "/recommended__product__1.png",
    },
    {
        id: 5,
        image: "/recommended__product__1.png",
    },
    {
        id: 6,
        image: "/recommended__product__1.png",
    },
  ];

  return (
    <>
        <div className="my-6 w-full">
            <h1 className=" mb-4 text-[16px] font-medium text-[#464441]">선물내역</h1>
            <div className="mb-2 flex items-center">
              <img src="/dot.svg" alt="" className="mr-2" />
              <h1 className=" mb-2 text-[16px] font-medium text-[#464441]">선물 받은 내역</h1>
            </div>
            
            <div className="flex w-full overflow-x-auto justify-start items-center gap-3">
                {products.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "0 0 70%",
                            marginRight: "0.7rem",
                            boxShadow: "0px 2px 48px 0px rgba(0, 0, 0, 0.04)",
                        }}
                        className="flex flex-col  items-center rounded-[12px] justify-center px-3 pt-4 pb-3"
                        onClick={()=> setIsOpen(true)}
                    >
                        <div className="w-full mb-2">
                            <p className="w-full text-right text-[#DC3131] text-[12px]">D-365</p>
                            <p className="text-[#8D8D8D] text-[12px]">BHC</p>
                            <p className="text-[#464441] font-[400] text-[15px] mb-3">
                              안심한우 1++등급...
                            </p>
                            <p className="text-[#464441] font-[700] text-[15px] mb-2">
                              from. 신지연
                            </p>
                        </div>
                        <div className="relative w-full">
                            <img
                                src={item.image}
                                className="h-[180px] w-full object-cover rounded-[10px]"
                                alt="Product"
                            />
                            <p className="absolute left-[30%] bottom-[-14px] font-[700] px-3 py-1 rounded-[50px] bg-[#FED52A]">사용하기</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        <div className="my-6 w-full mt-6">
          <div className="mb-2 flex items-center">
            <img src="/dot.svg" alt="" className="mr-2" />
            <h1 className="text-[16px] font-medium text-[#464441] inline">선물한 내역</h1>
          </div>
            
            <div className="flex w-full overflow-x-auto justify-start items-center gap-3">
                {products.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "0 0 70%", // 80% width for each product
                            marginRight: "0.7rem", // Adjust as needed for the gap
                            boxShadow: "0px 2px 48px 0px rgba(0, 0, 0, 0.04)",
                        }}
                        className="flex flex-col  items-center rounded-[12px] justify-center px-3 pt-4 pb-3"
                    >
                        <div className="w-full mb-2">
                            <p className="w-full text-right text-[#5966D7] text-[12px]">사용완료</p>
                            <p className="text-[#8D8D8D] text-[12px]">BHC</p>
                            <p className="text-[#464441] font-[400] text-[15px] mb-3">
                              안심한우 1++등급...
                            </p>
                            <p className="text-[#464441] font-[700] text-[15px] mb-2">
                              from. 신지연
                            </p>
                        </div>
                        <img
                            src={item.image}
                            className="h-[180px] w-full object-cover rounded-[10px]"
                            alt="Product"
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default GiftDetailsComponent