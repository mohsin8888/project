import React, { useState } from "react";
import { Logo } from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
export const Header = () => {
  const [visible,setVisible] = useState(false)
  return (
    <div className="w-full">
      <div className="flex flex-col  w-[90%]  sm:w-[85%] mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className=" hidden sm:flex gap-8 text-base text-gray-700">
            <NavLink
              to="/"
              className=" poppins font-[600] flex flex-col items-center gap-1"
            >
              <p>Home</p>
              <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              to="/collection"
              className=" poppins font-[600] flex flex-col items-center gap-1"
            >
              <p>Collection</p>
              <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              to="/about"
              className=" poppins font-[600] flex flex-col items-center gap-1"
            >
              <p>About</p>
              <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              to="/contact-us"
              className="  poppins font-[600] flex flex-col items-center gap-1"
            >
              <p>Contact_Us</p>
              <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </nav>
          <div className=" flex items-center gap-4">
            <img
              src={assets.search_icon}
              className="w-4 cursor-pointer"
              alt=""
            />
             <div className="group relative">
              <img src={assets.profile_icon} className="w-4" alt=""/>
              <div className="hidden gap-2 group-hover:block absolute dropdown-menu top-6 right-0 ">
               <div className=" flex flex-col w-36 py-4 px-5 bg-slate-100 text-gray-700">
                <p className=" cursor-pointer hover:text-black"> My Profile</p>
                <p className=" cursor-pointer hover:text-black">Order</p>
                <p className=" cursor-pointer hover:text-black">Logout</p>

               </div>
              </div>
             
             </div>
             <Link to="#" className=" relative">
             <img src={assets.cart_icon} className="w-4 min-w-5" alt = "" />
             <p className="absolute  right-[-5px] bottom-[-5px]  w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
             </Link>
             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-4 cursor-pointer sm:hidden" />
          </div>
          <div className={`absolute top-12 bottom-0 right-0 transition-all overflow-hidden bg-slate-50 ${visible ? 'w-full' :'w-0'}`} >
            <div className="flex flex-col text-gray-600">
              {/* <div onClick={()=> setVisible(false)} className="flex items-center py-3 gap-4 cursor-pointer">
                <img src={assets.dropdown_icon}className="h-4 rotate-180" alt=""/>
                <p>Back</p>
              </div> */}
              <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border'>
                <p className="poppins font-[600] text-lg">  Home</p>
              </NavLink>
              <NavLink  onClick={()=>setVisible(false)} to='/collection' className='py-2 pl-6 border '>
                 <p className="poppins font-[600] text-lg"> Collection</p>
              </NavLink>
              <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border'>
                <p className="poppins font-[600] text-lg"> About</p> 
              </NavLink>
              <NavLink onClick={()=>setVisible(false)} to='/contact-us' className='py-2 pl-6 border'>
                <p className="poppins font-[600] text-lg"> Contact_Us</p> 
              </NavLink>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
