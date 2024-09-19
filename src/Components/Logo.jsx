import React from 'react'
 import {assets} from "../assets/assets"
 import { Link } from "react-router-dom";
export const Logo = ({
 CustomClass,
 imageClass,
 url,
 src,

}) => {
  return (
    <div className={`${CustomClass}`}>
        <Link to={url} className="">
          <img src={assets.logo} alt="Logo" className={`w-[140px] ${imageClass}`} />
        </Link>
      </div>
    
  )
}
