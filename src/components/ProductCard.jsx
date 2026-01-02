import React from "react";
import StarRating from "./StarRating";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function ProductCard({ title, price, rating, image }) {
  return (
    <div className="w-[200px] h-auto flex-shrink-0">
      <div className="bg-gray-700 border rounded-xl pb-2 shadow-lg shadow-gray-700">
        <div className="flex flex-col text-gray-300 ">
          <img
            className="w-full h-30 object-cover rounded-xl"
            src={image}
            alt="product image"
          />
          <h2 className="text-lg font-medium text-left px-2">{title}</h2>
          <p className="text-left px-2"> ₹{price}</p>
          <StarRating rating={rating} />
          <div className="flex px-1 gap-1">
            <button className="bg-orange-400 hover:bg-orange-500 shadow-sm shadow-orange-500 rounded flex gap-1 py-1 px-2 mx-1 text-sm">
              <span>
                <FiShoppingCart size={20} />
              </span>
              <p className=""> Add To Cart</p>
            </button>
            <p className="text-gray-400 py-1 px-2 bg-gray-600 rounded hover:text-orange-400 ">
              <AiOutlineHeart size={25} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
