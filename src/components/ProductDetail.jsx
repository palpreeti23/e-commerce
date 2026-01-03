import React from "react";
import products from "../data/Products";
import StarRating from "./StarRating";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const productInfo = products[0];
  const arr = productInfo.highlight;
  const dispatch = useDispatch();

  const AddToCartProduct = ({ id, title, image, price }) => {
    dispatch(addToCart({ id, title, image, price }));
  };

  return (
    <div className="w-full h-auto bg-gray-800 text-gray-300 ">
      <div className="flex">
        <div className="w-[40%] h-auto flex justify-center items-center bg-gray-200">
          <img
            className="w-full h-auto object-contain rounded"
            src={productInfo.image}
            alt="image"
          />
        </div>
        <div className="flex flex-col text-left px-6 py-2">
          <h2 className="font-bold text-2xl py-2">{productInfo.title}</h2>
          <p className=" text-orange-400 text-lg">₹{productInfo.price}</p>
          <p className="text-red-400">{productInfo.discount}% Off</p>
          <StarRating rating={productInfo.rating} className="text-left" />
          <p className="w-1/3 py-1 ">{productInfo.description}</p>
          <ul className="px-6 list-disc">
            {arr.map((items) => (
              <li key={items} className="">
                {items}
              </li>
            ))}
          </ul>
          <button
            onClick={AddToCartProduct}
            className="w-1/4 bg-orange-400 hover:bg-orange-500 shadow-sm shadow-orange-500 rounded flex gap-1 py-1 px-4 mx-1 my-2 text-center"
          >
            <span>
              <FiShoppingCart size={20} />
            </span>
            <p className=""> Add To Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
