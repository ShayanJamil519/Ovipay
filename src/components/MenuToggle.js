import React, { useState } from "react";

const MenuToggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleMenu = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div
            className={`w-full bg-[#f2f2f9] p-1 rounded-full flex ${
                isToggled ? "menu-open" : ""
            }`}
        >
            <div
                onClick={toggleMenu}
                className={`w-1/2 rounded-full  py-3 ${
                    isToggled ? "bg-[#fff] text-[#000]  " : "text-[#67697A]"
                }`}
            >
                <p className="text-[14px] text-center">사용한 쿠폰</p>
            </div>
            <div
                onClick={toggleMenu}
                className={`w-1/2 rounded-full py-3 ${
                    isToggled ? "  text-[#67697A]" : "bg-[#fff] text-[#000]"
                }`}
            >
                <p className="text-[14px] text-center ">사용 가능 쿠폰</p>
            </div>
        </div>
    );
};

export default MenuToggle;
