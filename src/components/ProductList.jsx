import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-wrap gap-8 space-y-2 justify-center my-2">
        {products?.map((productInfo) => (
          <ProductCard key={productInfo.id} product={productInfo} />
        ))}
      </div>
      {/* <div className="flex space-x-1">
        {products.map((productInfo) => (
          <ProductCard key={productInfo.id} {...productInfo} />
        ))}
      </div> */}
    </div>
  );
}

export default ProductList;
