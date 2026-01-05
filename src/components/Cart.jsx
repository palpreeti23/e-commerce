import React from "react";
import products from "../data/Products";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store/CartSlice";

function Cart() {
  const productInfo = products[0];
  const cartItem = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const cartItems = cartItem.find((item) => item.id === productInfo.id);

  const increaseItems = () => {
    dispatch(increaseQuantity(cartItem.id));
  };

  const decreaseItems = () => {
    dispatch(decreaseQuantity());
  };

  console.log(cartItem.quantity);
  return (
    <div className="w-full">
      <div className="bg-gray-700 rounded">
        <div className="flex flex-col text-gray-300">
          <h2 className=" text-2xl text-left py-2 px-3">Shopping Cart</h2>
          <span className="w-full h-[1px] border-b-2 border-gray-500 "></span>
          <div className="flex py-2">
            <img
              className="w-50 h-60 object-cover px-2 rounded-xl bg-gray-200"
              src={productInfo.image}
              alt="image"
            />
            <div className="flex flex-col text-left px-4 space-y-1">
              <h3 className="text-xl ">{productInfo.title}</h3>
              <p className="text-orange-400 font-medium">
                ₹{productInfo.price}
              </p>
              <p className="text-blue-500 text-sm">10 days Return & Exchane</p>
              <div className="border-gray-200 border rounded-xl px-3 w-1/2 space-x-5 flex mt-2">
                <button
                  onClick={increaseItems}
                  className="font-bold text-black text-2xl"
                >
                  -
                </button>
                <p className="pt-1">{cartItem.quantity || 0}</p>
                <button
                  onClick={decreaseItems}
                  className="font-bold text-black text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
