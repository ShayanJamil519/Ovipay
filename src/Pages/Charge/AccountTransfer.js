import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom/cjs/react-router-dom";

const AccountTransfer = () => {
    return (
        <div className="relative min-h-[90vh]">
            {/* Header */}
            <Header title="계좌이체" showHamburger={false} />

            <div className="">
                <div className="flex mx-4 flex-col mb-4 mt-12">
                    <div className="font-[600] text-[16px]">계좌인증</div>
                    <div className="flex flex-col mt-2">
                        <p className="text-[#A19B91] text-[14px]">
                            계좌로 입금된 1원의 입금자명(숫자)을 찾아 <br />
                            입력해주세요.
                        </p>
                    </div>
                </div>

                <div className="mt-2 mx-4 ">
                    <input
                        placeholder="입금자명 입력"
                        value=""
                        name="입금자명 입력"
                        className="rounded-[12px] text-[14px]  w-full py-[15px] px-3 border-[1px]  bg-transparent  focus:outline-[#0F9AFF] focus:border-[1px]"
                    />
                </div>

                {/* The last button of the page */}

                <Link
                    to="/charge/account-transfer-two"
                    className="w-[90%] mx-3 absolute bottom-[5%]"
                >
                    <button className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] font-bold text-[16px]">
                        다음
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AccountTransfer;
