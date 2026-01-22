import React from "react";
import ProductCard from "./ProductCard";
import MainProductCard from "./MainProductCard";

function ProductList({ products }) {
  const product = products.slice(0, 8);
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-wrap gap-4 justify-around ">
        {product?.map((productInfo) => (
          <MainProductCard key={productInfo.id} product={productInfo} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
