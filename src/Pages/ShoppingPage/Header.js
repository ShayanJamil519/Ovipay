import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import SidebarContain from "../../components/Global/SidebarContain";

export default function Header({ title, showHamburger }) {
    const history = useHistory();

    const handleBackClick = () => {
        // Go back to the previous page
        history.goBack();
    };
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenu = () => {
        setMenuToggle(!menuToggle);
    };

    const handleMouseDown = (event) => {
        // Check if the clicked element is inside the sidebar or the menu icon
        if (
            !event.target.closest(".sidebar-container") &&
            !event.target.closest(".menu-icon")
        ) {
            setMenuToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 z-40 w-full ">
                <nav className="w-full px-3 py-3 bg-white md:py-9 md:px-6 ">
                    <div className="container flex items-center justify-between p-0">
                        <IoIosArrowBack
                            onClick={handleBackClick}
                            size={35}
                            className="rounded-full p-1 text-[#AEAEB2] cursor-pointer "
                        />

                        <h6 className="text-[17px] font-bold text-black">
                            {title}
                        </h6>

                        {/* menu icon */}
                        <IoMenu
                            onClick={handleMenu}
                            size={35}
                            className={`rounded-full p-1  ${
                                showHamburger ? "" : "invisible"
                            } cursor-pointer text-black/75`}
                        />
                    </div>
                </nav>
            </div>

            {/* Menu Sidebar */}
            <SidebarContain
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
            />
            <div className="mb-[66px]"></div>
        </>
    );
}
