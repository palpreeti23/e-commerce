import React from "react";
import { Cart as CartComponent } from "../components";
import { useSelector } from "react-redux";

function Cart() {
  const cartItem = useSelector((state) => state.cart.products);
  const cartItems = cartItem.find((item) => item.id === cartItem.id);
  const totalItems = cartItem.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cartItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col text-gray-800  h-[100vh] bg-gray-100  overflow-y-auto">
      <h2 className=" text-2xl text-left py-3 px-4 font-medium ">
        Shopping Cart
      </h2>
      <span className="w-full h-[1px] border-b-2 border-gray-400 "></span>
      <div className="w-full">
        {cartItem?.map((item) => (
          <CartComponent key={item.id} item={item} />
        ))}
      </div>
      <div className="text-right mb-3  ">
        <p className="mr-8 space-x-2 text-lg">
          Subtotal ( {totalItems || 0} items ) : ₹ {subTotal}
        </p>
      </div>
    </div>
  );
}

export default Cart;
