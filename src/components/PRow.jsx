import React, { useRef } from "react";
import products from "../data/Products";
import { Link } from "react-router-dom";

function PRow({ list, heading }) {
  let displayProduct = [];

  if (!list || list === "All") {
    displayProduct = products.slice(18, 26);
  } else {
    displayProduct = products
      .filter((item) => item.category === list)
      .slice(0, 5);
  }
  if (displayProduct.length === 0) return null;

  return (
    <div className="w-full flex flex-col h-auto bg-main-bg  text-main-text shadow-lg shadow-gray-300 dark:shadow-gray-900">
      <p className="text-2xl font-medium my-2 py-2 text-left px-8">{heading}</p>

      <div className="w-full flex items-center justify-around gap-2 flex-wrap">
        {displayProduct.map((product) => (
          <div
            key={product.id}
            className="w-[150px] h-auto flex-shrink-0 flex flex-wrap "
          >
            <div className="bg-main-bg rounded-lg pb-2 shadow shadow-gray-100 dark:shadow-gray-900 ">
              <div className="flex flex-col">
                <Link to={`/product/${product.id}`}>
                  <div className="text-left ">
                    <img
                      className="w-full h-50 object-cover rounded-xl"
                      src={product.image}
                      alt="product image"
                    />
                    {/* <h2 className="text-lg font-medium ">{product.title}</h2> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PRow;
