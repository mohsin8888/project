import React from 'react'

const MainWrapper = ({
  id,
    children,
    CustomClass
}) => {
  return (
    <div 
    id={id}
    className={` abc bg-white   py-16 px-16 ${CustomClass}`}>
        {children}
    </div>
  )
}

export default MainWrapper