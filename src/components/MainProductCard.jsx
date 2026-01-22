import React from "react";
import { Link } from "react-router-dom";

function MainProductCard({ product }) {
  return (
    <div className="w-[290px] h-auto flex-shrink-0 mt-6">
      <div className="bg-gray-100 rounded-lg pb-2 shadow-lg shadow-gray-500 ">
        <div className="flex flex-col text-gray-700 ">
          <Link to={`/product/${product.id}`}>
            <div className="text-left px-2 py-3">
              <img
                className="w-full h-60 object-fill rounded-xl"
                src={product.image}
                alt="product image"
              />

              <h2 className="text-lg font-medium ">
                Latest On {product.category}
              </h2>
              <p className="flex">
                Explore Now <p> &#x2192;</p>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainProductCard;
