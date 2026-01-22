import React from "react";
import { useSelector } from "react-redux";
import Order from "./Order";

function Summary() {
  const orders = useSelector((state) => state.cart.orders);

  //   console.log(orders);
  return (
    <div className="w-full h-auto bg-gray-100">
      <div className="bg-gray-100 w-[90%] h-auto mx-auto flex flex-col">
        <h2 className="text-2xl font-semibold text-left px-8 text-gray-700 py-3">
          Purchase History
        </h2>
        <span className="w-full h-[1px] border border-gray-300 mb-2"></span>
        {orders.map((order) => (
          <div key={order.id} className="">
            {order.items.map((item) => (
              <div className="flex w-full border border-gray-300 rounded-2xl my-2">
                <div className="w-1/4 h-30 py-1 bg-gray-200 rounded-l-xl mr-2">
                  <img
                    className="w-full h-full object-contain rounded"
                    src={item.image}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col items-start pt-3">
                  <h2 className="text-gray-800 text-left">
                    {item.title} | {item.highlight.slice(0, 1)}
                  </h2>
                  <p className="py-2 text-gray-700">
                    {new Date(order.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <span className=" text-left mx-auto my-6 text-gray-900">
          You Have Reached The End Of Your Orders
        </span>
      </div>
    </div>
  );
}

export default Summary;
