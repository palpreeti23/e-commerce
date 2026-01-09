import React from "react";
import StarRating from "./StarRating";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/CartSlice";
import { toggleWishList } from "../store/WishListSlice";
import products from "../data/Products";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.item);
  const wishlisted = wishList.some((item) => item.id === product.id);

  return (
    <div className="w-[200px] h-auto flex-shrink-0">
      <div className="bg-gray-100 border rounded-xl pb-2 shadow-lg shadow-gray-500">
        <div className="flex flex-col text-gray-700 ">
          <Link to={`/product/${product.id}`}>
            <div className="">
              <img
                className="w-full h-30 object-cover rounded-xl"
                src={product.image}
                alt="product image"
              />

              <h2 className="text-lg font-medium text-left px-2">
                {product.title}
              </h2>
              <p className="text-left px-2"> ₹{product.price}</p>
              <StarRating rating={product.rating} />
            </div>
          </Link>
          <div className="flex px-1 gap-1">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-orange-400 hover:bg-orange-500 shadow-sm shadow-orange-500 rounded flex gap-1 py-2 text-center px-2 mx-1 text-sm text-gray-200"
            >
              <span>
                <FiShoppingCart size={20} />
              </span>
              <p className=""> Add To Cart</p>
            </button>
            <button
              onClick={() => dispatch(toggleWishList(product))}
              className={`py-1 px-2 bg-gray-300 rounded hover:text-orange-400 ${
                wishlisted ? "text-orange-500" : "text-gray-500"
              }`}
            >
              <AiFillHeart size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
