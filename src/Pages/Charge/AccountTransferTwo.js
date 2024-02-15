import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom/cjs/react-router-dom";

const AccountTransferTwo = () => {
    return (
        <div className="relative min-h-[80vh] ">
            {/* Header */}
            <Header title="계좌이체" showHamburger={false} />

            <div className=" flex justify-center items-center pt-10  ">
                <div>
                    <div className="flex items-center justify-center mx-4 flex-col mb-12">
                        <p className="text-[16px] font-semibold mb-2">
                            자동이체 출금동의
                        </p>
                        <p className="text-[#A19B91]">신*연 010-0101-0101</p>
                    </div>

                    <div className="flex items-center justify-center flex-col">
                        <p className="text-[#666666] text-[14px]">
                            ARS 인증번호
                        </p>
                        <h1 className="text-[70px] font-[700]">63</h1>
                    </div>

                    <div className="mt-40">
                        <p className="text-[#D61919] font-[700] text-center text-[14px] mb-16">
                            이 정보가 아니예요! {">"}
                        </p>
                    </div>
                </div>

                <Link
                    to="/charge/account-transfer-three"
                    className="w-[90%] mx-3 absolute bottom-[5%]"
                >
                    <button className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] font-bold text-[16px]">
                        인증 전화 요청
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AccountTransferTwo;
