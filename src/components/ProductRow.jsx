import React from "react";
import products from "../data/Products";
import { Link } from "react-router-dom";

function ProductRow({ list, heading }) {
  let displayProduct = [];

  if (!list || list === "All") {
    displayProduct = products.slice(0, 5);
  } else {
    displayProduct = products
      .filter((item) => item.category === list)
      .slice(0, 5);
  }
  if (displayProduct.length === 0) return null;

  return (
    <div className="w-full flex flex-col h-auto bg-gray-100  text-gray-700 shadow-lg shadow-gray-300 ">
      <p className="text-2xl font-medium my-2 py-2 text-left px-8">{heading}</p>
      <div className="w-full flex  items-center justify-around gap-5 px-5 flex-wrap">
        {displayProduct.map((product) => (
          <div
            key={product.id}
            className="w-[230px] h-auto flex-shrink-0 flex flex-wrap "
          >
            <div className="bg-gray-100 rounded-lg pb-2 shadow shadow-gray-100">
              <div className="flex flex-col">
                <Link to={`/product/${product.id}`}>
                  <div className="text-left px-2">
                    <img
                      className="w-full h-50 object-cover rounded-xl"
                      src={product.image}
                      alt="product image"
                    />
                    <h2 className="text-lg font-medium ">{product.title}</h2>
                  </div>
                  <p className="flex px-2">
                    See More <p> &#x2192;</p>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductRow;
