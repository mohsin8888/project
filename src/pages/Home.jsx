import React from 'react'
import { Herosection } from '../Components/Homecomponent/Herosection'
import LatestCollection from '../Components/Homecomponent/LatestCollection'
import BestSeller from '../Components/Homecomponent/BestSeller'

export const Home = () => {
  return (
    <>
   <Herosection/>
   <LatestCollection/>
   <BestSeller/>
   </>
  )
}
