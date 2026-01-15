import React from "react";
import products from "../data/Products";
import { useParams } from "react-router-dom";

function ProductRow({ list }) {
  const product = products.find((item) => item.category === list);

  return (
    <div className="w-full h-73 bg-gray-100 flex items-center ">
      {product?.map((product) => (
        <div className="w-[230px] h-auto flex-shrink-0 ">
          <div className="bg-gray-100 rounded-lg pb-2 shadow shadow-gray-100">
            <div className="flex flex-col text-gray-700 ">
              <div className="text-left px-2">
                <img
                  className="w-full h-50 object-cover rounded-xl"
                  src={product.image}
                  alt="product image"
                />
                <h2 className="text-lg font-medium ">{product.title}</h2>
              </div>
              <p className="flex px-2">
                Explore Now <p> &#x2192;</p>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductRow;
