import React from "react";
import products from "../data/Products";
import StarRating from "./StarRating";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart, setBuyNow } from "../store/CartSlice";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ProductRow from "./ProductRow";
import { showAlert } from "../store/Alert";

function ProductDetail() {
  const { id } = useParams();
  const productInfo = products.find((item) => item.id === Number(id));
  const arr = productInfo.highlight;
  const list = productInfo.category;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    dispatch(setBuyNow(productInfo));
    navigate("/order");
  };

  return (
    <div className="w-full h-auto bg-gray-200 text-gray-700 ">
      <div className="flex flex-col flex-wrap ">
        <div className="flex justify-between bg-gray-100 mt-3 mb-5">
          <div className="w-[30%] h-auto flex justify-center items-center ">
            <img
              className="w-full h-auto object-contain rounded"
              src={productInfo.image}
              alt="image"
            />
          </div>
          <div className="flex flex-col text-left py-2 w-2/3">
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
              onClick={() => {
                dispatch(addToCart(productInfo));
                dispatch(showAlert({ message: "Added to the cart!" }));
              }}
              className="w-1/4 bg-orange-400 hover:bg-orange-500 shadow-sm shadow-orange-500 rounded flex justify-center gap-1 py-1 px-4 mx-1 my-2 flex-wrap"
            >
              <span>
                <FiShoppingCart size={20} />
              </span>
              <p>Add To Cart</p>
            </button>

            <button
              onClick={handleBuyNow}
              className="w-1/4 bg-yellow-400 hover:bg-yellow-500 shadow-sm shadow-yellow-500 rounded py-1 px-4 mx-1 my-2 text-center "
            >
              Buy Now
            </button>
          </div>
        </div>
        <ProductRow list={list} heading="Similar Products" />
      </div>
    </div>
  );
}

export default ProductDetail;
