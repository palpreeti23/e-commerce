import React from "react";
import { Link } from "react-router-dom";

function MainProductCard({ product }) {
  return (
    <div className="w-[240px] h-[320px] flex-shrink-0 mt-6">
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900">
          {/* Top Title Section (white background) */}
          <div className="h-14 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-main-text capitalize">
              {product.category}
            </h2>
          </div>

          {/* Image Section (pushed down) */}
          <div className="h-[calc(100%-56px)] flex items-center justify-center p-3">
            <img
              src={product.image}
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MainProductCard;
