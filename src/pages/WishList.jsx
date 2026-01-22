import React from "react";
import { ProductCard } from "../components";
import { useSelector } from "react-redux";

function WishList() {
  const wishlistItem = useSelector((state) => state.wishlist.item);
  return (
    <div className="w-full bg-gray-100 overflow-y-auto h-[100vh]  py-5 px-7">
      <h2 className="text-2xl font-medium text-gray-700 text-left px-2 mt-1 mb-4">
        Your Wishlist Items
      </h2>
      <div className="flex gap-4 flex-wrap">
        {wishlistItem?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
