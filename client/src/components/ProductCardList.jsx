import React from "react";
import products from "../data/Products";
import ProductCard from "./ProductCard";

function ProductCardList({ products }) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center gap-6 flex-wrap px-3 py-4">
        {products?.map((productInfo) => (
          <ProductCard key={productInfo.id} product={productInfo} />
        ))}
      </div>
    </div>
  );
}

export default ProductCardList;
