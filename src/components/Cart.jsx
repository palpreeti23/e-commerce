import React, { useEffect } from "react";
// import products from "../data/Products";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";

function Cart({ item }) {
  const cartItem = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const cartItems = cartItem.find((item) => item.id === cartItem.id);

  return (
    <div className="w-full">
      <div className="bg-gray-100 rounded">
        <div className="flex flex-col text-gray-800 font-medium">
          <div className="flex py-5">
            <img
              className="w-60 h-40 object-contain px-2 rounded-xl ml-2"
              src={item.image}
              alt="image"
            />
            <div className="flex flex-col text-left px-4 space-y-1 ">
              <h3 className="text-xl ">{item.title}</h3>
              <p className="text-sm text-green-600">In stock</p>
              <p className="text-orange-400 font-medium">₹{item.price}</p>
              <p className="text-blue-500 text-sm">10 days Return & Exchane</p>
              <div className="flex">
                <div className="border-gray-500 border rounded-xl px-3 w-1/2 space-x-5 flex mt-2 ">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="font-bold text-black text-2xl"
                  >
                    -
                  </button>
                  <p className="pt-1">{item.quantity}</p>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="font-bold text-black text-xl"
                  >
                    +
                  </button>
                </div>
                <span className="h-6 w-[1px] border-r-2 border-gray-300 ml-4 mt-3"></span>
                <div className="px-3 text-blue-500 text-sm mt-3 ">Delete</div>
              </div>
            </div>
          </div>
          <span className="w-full h-[1px] border-b-2 border-gray-300 mb-1"></span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
