import React from 'react'
import { Outlet } from "react-router-dom";
 import { Header } from '../Components/Header';
 import { Footer } from '../Components/Footer';
export const DashboardLayout = () => {
  return (
  <>
  <div className="flex min-h-screen w-screen flex-col">
        <div className=' h-[26vh] sm:h-[14vh] flex items-center '>
          <Header />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
        <div>
           <Footer /> 
        </div>
      </div>
  </>
  )
}
export default DashboardLayout;