import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from './Title';
import ProductItem from "./ProductItem";
import MainWrapper from '../Wrapper/MainWrapper';
const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <>
    <MainWrapper CustomClass={'!px-4 sm:!px-2'}>
    <div className='my-10'>
      <div className='text-center text-[1.8rem] py-4'>
        <Title text1='BEST' text2='SELLERS' />
      </div>
      <p className='w-3/4 m-auto text-sm md:text-base text-gray-600 text-center mb-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bestSeller.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
    </div>
    </MainWrapper>
    </>
  );
};

export default BestSeller;
