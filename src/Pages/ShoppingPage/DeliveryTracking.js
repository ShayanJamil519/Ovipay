import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import product from "../../assets/img/product-item.svg";

const DeliveryTracking = () => {
    return (
        <>
            <Header title="상세내역" showHamburger={true} />

            <div className="w-[90%] mx-auto pt-3 ">
                <h1 className="text-[16px] text-[#464441]">배송중인 상품</h1>
                <div
                    // to="/shopping/product-details"
                    style={{
                        boxShadow: "2px 2px 5px 0px #0000001A",
                    }}
                    className=" w-full rounded-[12px] relative flex justify-start items-center gap-x-3 p-3 bg-[#fff]"
                >
                    <img src={product} alt="logo" />
                    <div className="w-full mt-2">
                        <h6 className="text-[15px] font-bold  text-[#464441] mb-[2px]">
                            오아 공기청정기
                        </h6>
                        <p className="text-[12px] text-[#928F8B]">
                            35,000원 · 1개
                        </p>
                        <p className="text-[12px] text-[#928F8B]">
                            2024. 1. 20 주문
                        </p>
                    </div>
                    <p className="bottom-3 right-3 absolute text-[#FDD221] text-[14px] font-bold">
                        배송준비중
                    </p>
                </div>
                {/* ========= */}

                <div
                    style={{
                        boxShadow: "box-shadow: 0px 2px 48px 0px #0000001A",
                    }}
                    className="w-full mt-4 rounded-md"
                >
                    <div className="flex w-full  items-center justify-between">
                        <div className="relative flex justify-center items-center flex-col gap-1">
                            <div className="w-[60px] h-[60px] border-[1px] border-[#FED52A] rounded-full flex items-center justify-center">
                                <img src="/complete__payment.svg" alt="logo" />
                            </div>
                            <p className="text-[12px]  text-[#E2B700]">
                                결제완료
                            </p>
                            <div className="absolute top-[37%] left-full   bg-[#FED52A] w-[30px] h-[1px]"></div>
                        </div>
                        <div className="relative flex justify-center items-center flex-col gap-1">
                            <div className="w-[60px] h-[60px] border-[1px] border-[#FED52A] rounded-full flex items-center justify-center">
                                <img
                                    src="/preparing__delivery.svg"
                                    alt="logo"
                                />
                            </div>
                            <p className="text-[12px]  text-[#E2B700]">
                                배송준비중
                            </p>
                            <div className="absolute top-[37%] left-full   bg-[#FED52A] w-[30px] h-[1px]"></div>
                        </div>
                        <div className="relative flex justify-center items-center flex-col gap-1">
                            <div className="w-[60px] h-[60px] border-[1px] border-[#FED52A] bg-[#FED52A] rounded-full flex items-center justify-center">
                                <img src="/shipping.svg" alt="logo" />
                            </div>
                            <p className="text-[12px]  text-[#E2B700]">
                                배송중
                            </p>
                            <div className="absolute top-[37%] left-full   bg-[#FED52A] w-[30px] h-[1px]"></div>
                        </div>
                        <div className="relative flex justify-center items-center flex-col gap-1">
                            <div className="w-[60px] h-[60px] border-[1px] border-[#D6D6D6] rounded-full flex items-center justify-center">
                                <img
                                    src="/delivery__completed.svg"
                                    alt="logo"
                                />
                            </div>
                            <p className="text-[12px]  text-[#D6D6D6]">
                                배송완료
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        {/* Row 1 */}
                        <div className="grid grid-cols-5 gap-2  px-3">
                            <div className="col-span-1 ">
                                <p className="text-[14px] text-[#BABABA]">
                                    01-20
                                </p>
                                <p className="text-[14px] text-[#BABABA]">
                                    13:01
                                </p>
                            </div>
                            <div className="col-span-4 flex justify-start item-center gap-4">
                                {/* Left */}
                                <div className="flex flex-col justify-center items-center  h-full">
                                    <div className="w-[14px] h-[14px] border-[2px] border-[#FED52A] rounded-full  "></div>
                                    <div className="bg-[#FED52A]  h-[70px] w-[3px]"></div>
                                </div>
                                {/* Right */}
                                <div className="">
                                    <h1 className="text-[14px] text-[#464441] mb-1">
                                        일산4
                                    </h1>
                                    <p className="text-[#BABABA] text-[12px] ">
                                        배송중(출고)
                                    </p>
                                    <p className="text-[#BABABA] text-[12px]">
                                        택배사
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="grid grid-cols-5 gap-2  px-3">
                            <div className="col-span-1 ">
                                <p className="text-[14px] text-[#BABABA]">
                                    01-20
                                </p>
                                <p className="text-[14px] text-[#BABABA]">
                                    15:30
                                </p>
                            </div>
                            <div className="col-span-4 flex justify-start item-center gap-4">
                                {/* Left */}
                                <div className="flex flex-col justify-center items-center  h-full">
                                    <div className="w-[14px] h-[14px] border-[2px] border-[#FED52A] rounded-full  "></div>
                                    <div className="bg-[#FED52A]  h-[70px] w-[3px]"></div>
                                </div>
                                {/* Right */}
                                <div className="">
                                    <h1 className="text-[14px] text-[#464441] mb-1">
                                        일산4
                                    </h1>
                                    <p className="text-[#BABABA] text-[12px] ">
                                        배송중(입고)
                                    </p>
                                    <p className="text-[#BABABA] text-[12px]">
                                        택배사
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Row 3 */}
                        <div className="grid grid-cols-5 gap-2  px-3">
                            <div className="col-span-1 ">
                                <p className="text-[14px] text-[#BABABA]">
                                    01-21
                                </p>
                                <p className="text-[14px] text-[#BABABA]">
                                    07:45
                                </p>
                            </div>
                            <div className="col-span-4 flex justify-start item-center gap-4">
                                {/* Left */}
                                <div className="flex flex-col justify-start items-start  h-full">
                                    <div className="w-[14px] h-[14px] bg-[#FED52A] rounded-full  "></div>
                                </div>
                                {/* Right */}
                                <div className="">
                                    <h1 className="text-[14px] text-[#464441] mb-1">
                                        일산4
                                    </h1>
                                    <p className="text-[#BABABA] text-[12px] ">
                                        배송중
                                    </p>
                                    <p className="text-[#BABABA] text-[12px]">
                                        택배사
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ======== */}
            </div>

            <Footer address={"account"} />
        </>
    );
};

export default DeliveryTracking;
