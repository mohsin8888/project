import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import MainWrapper from "../Wrapper/MainWrapper";
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestproducts] = useState([]);
  //   console.log(products);
  useEffect(() => {
    setLatestproducts(products.slice(0, 10));
  }, []);
  return (
    <>
      <MainWrapper CustomClass={" !px-4 sm:!px-28"}>
        <div className="my-10">
          <div className="py-8 text-center text-[1.8rem]">
            <Title text1={"LATEST"} text2={"COLLECTION"} />
            <p className="w-3/4 mx-auto text-sm md:text-base text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {LatestProducts.map((item, index) => (
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

export default LatestCollection;
