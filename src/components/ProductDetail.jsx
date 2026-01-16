import React from "react";
import products from "../data/Products";
import StarRating from "./StarRating";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductRow from "./ProductRow";

function ProductDetail() {
  const { id } = useParams();
  const productInfo = products.find((item) => item.id === Number(id));
  const arr = productInfo.highlight;
  const list = productInfo.category;
  const dispatch = useDispatch();

  return (
    <div className="w-full h-auto bg-gray-200 text-gray-700 ">
      <div className="flex flex-col flex-wrap ">
        <div className="flex gap-15 bg-gray-100 mt-3 mb-5">
          <div className="w-100 h-auto flex justify-center items-center ">
            <img
              className="w-full h-auto object-contain rounded"
              src={productInfo.image}
              alt="image"
            />
          </div>
          <div className="flex flex-col text-left px-6 py-2 w-1/2">
            <h2 className="font-bold text-2xl py-2">{productInfo.title}</h2>
            <p className=" text-orange-400 text-lg">₹{productInfo.price}</p>
            <p className="text-red-400">{productInfo.discount}% Off</p>
            <StarRating rating={productInfo.rating} className="text-left" />
            <p className="w-2/3 py-1 ">{productInfo.description}</p>
            <ul className="px-6 list-disc w-2/3">
              {arr.map((items) => (
                <li key={items} className="">
                  {items}
                </li>
              ))}
            </ul>
            <button
              onClick={() => dispatch(addToCart(productInfo))}
              className="w-1/4 bg-orange-400 hover:bg-orange-500 shadow-sm shadow-orange-500 rounded flex gap-1 py-1 px-4 mx-1 my-2 text-center flex-wrap"
            >
              <span>
                <FiShoppingCart size={20} />
              </span>
              <p className="text-center">Add To Cart</p>
            </button>

            <button
              onClick={() => dispatch(addToCart(productInfo))}
              className="w-1/4 bg-yellow-400 hover:bg-yellow-500 shadow-sm shadow-yellow-500 rounded flex gap-1 py-1 px-4 mx-1 my-2 text-center "
            >
              <p className="text-center">Buy Now</p>
            </button>
          </div>
        </div>
        <ProductRow list={list} heading="Similar Products" />
      </div>
    </div>
  );
}

export default ProductDetail;
