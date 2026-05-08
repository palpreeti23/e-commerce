import React from "react";
import { ProductCard } from "../components";
import { useSelector } from "react-redux";

function WishList() {
  const wishlistItem = useSelector((state) => state.wishlist.item);
  return (
    <div className="w-full bg-main-bg overflow-y-auto h-[100vh]  py-5 px-7">
      <h2 className="text-2xl font-medium text-main-text text-center md:text-left px-12 mt-1 mb-4">
        Your Wishlist Items
      </h2>
      <div className="flex gap-8 flex-wrap justify-center">
        {wishlistItem?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
