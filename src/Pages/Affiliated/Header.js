import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import logo from '../../assets/img/sidebar_logo.svg'
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SidebarContain from "../../components/Global/SidebarContain";

export default function Header() {
  const history = useHistory();

  const handleBackClick = () => {
      // Go back to the previous page
      history.goBack();
  };
    const [menuToggle, setMenuToggle] = useState(false);
  
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

            <nav className='w-full px-2 py-3 bg-white md:py-9 md:px-6 '>
            <div  className="container flex items-center justify-between p-0">
            <IoIosArrowBack onClick={handleBackClick} size={35} className='p-1 cursor-pointer text-black/75'/>
        

            <h6 className="text-xl font-bold text-black">OVI 가맹점</h6>

            

            {/* menu icon */}
            <img src="/coupon.svg" alt="" size={35} className='cursor-pointer text-black/75'/>
        </div>

        
        </nav>

        </div>
    


        {/* Menu Sidebar */}
        <SidebarContain menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <div className="mb-[66px]"></div>
    </>
  );
}