import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import {
  increaseQntInBuy,
  decreaseQntInBuy,
  removeBuyNow,
  setPayment,
  placeOrder,
} from "../store/CartSlice";
import { showAlert } from "../store/Alert";

function Order() {
  const { address } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.user);
  const { buyNow } = useSelector((state) => state.cart);
  const selectedMethod = useSelector((state) => state.cart.payment);
  const [show, setShow] = useState(false);

  const total = buyNow.price * buyNow.quantity;

  const addresses = address[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date().toDateString();
  const deliveryCharge = 40;
  const totalPayable = total + deliveryCharge;

  const deleteBuyNow = () => {
    dispatch(removeBuyNow(buyNow));
    navigate("/");
  };

  const paymentMethod = [
    {
      id: "phonepe",
      name: "PhonePe",
      icon: <SiPhonepe size={18} color="#4E3DBF" />,
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <FaCreditCard size={18} color="#1F2937" />,
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: <FaMoneyBillWave size={18} color="#1F2937" />,
    },
  ];

  const orderPlace = () => {
    if (selectedMethod === "cod") {
      dispatch(placeOrder());
      dispatch(showAlert({ message: "ordered!" }));
      navigate(`/summary`);
    } else {
      setShow(true);
    }
  };

  const handlePay = () => {
    dispatch(placeOrder());
    dispatch(showAlert({ message: "ordered!" }));
    navigate(`/summary`);

    setShow(false);
  };

  return (
    <div className="w-full h-auto bg-gray-200 pb-8 flex justify-center items-center">
      <div className="flex w-full flex-wrap ">
        <div className="flex flex-col w-3/5 ">
          <div className="w-full h-auto py-2 shadow-lg shadow-gray-400 rounded bg-gray-100 mt-3 mx-5">
            <div className="flex flex-col items-start">
              <div className="flex pt-2">
                <p className="text-sm bg-gray-200 px-2 mx-2 my-1 text-blue-500">
                  1
                </p>
                <h2 className="text-lg font-semibold text-gray-500 ">LOGIN</h2>
                <FaCheckCircle size={17} className="mt-1 mx-4 text-blue-600" />
              </div>

              <h2 className="text-gray-700 font-semibold ml-11">
                {users.name}
              </h2>
              <p className="mx-11">{users.email}</p>
            </div>
          </div>

          <div className="w-full h-auto pt-2 pb-4 shadow-lg shadow-gray-400 rounded bg-gray-100 mt-3 mx-5">
            <div className="flex flex-col items-start">
              <div className="flex pt-2">
                <p className="text-sm bg-gray-200 px-2 ml-2 mr-1 my-1 text-blue-500">
                  2
                </p>
                <h2 className="text-lg font-semibold text-gray-500">
                  DELIVERY ADDRESS
                </h2>
                <FaCheckCircle size={17} className="mt-1 ml-1 text-blue-600" />
              </div>

              <h2 className="text-gray-600 font-semibold text-left ml-8 ">
                {addresses.name}, {addresses.area}, {addresses.city},
                {addresses.state},{addresses.pin}
              </h2>
            </div>
          </div>

          <div className="w-full h-auto shadow-lg shadow-gray-400 rounded bg-gray-100 mt-3 mx-5 pb-5">
            <div className="flex flex-col items-start">
              <div className="flex bg-blue-500 w-full py-2">
                <p className="text-sm bg-gray-200 px-2 mx-2 my-1 text-blue-600">
                  3
                </p>
                <h2 className="text-lg font-semibold text-white ">
                  ORDER SUMMARY
                </h2>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex w-full">
                  <div className="w-1/4 h-30 flex items-center">
                    <img
                      className="w-full h-25 object-contain rounded"
                      src={buyNow.image}
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col text-left pt-2">
                    <p className="font-semibold text-lg text-gray-800">
                      {buyNow.title}
                    </p>
                    <p className="text-gray-800 "> ₹{buyNow.price}</p>
                    <p className="text-gray-600 text-sm ">
                      Seller : INTERNATIONALSELLER
                    </p>
                    <p className="text-gray-800 text-sm ">
                      Delivery By - {date}
                    </p>
                  </div>
                </div>
                <div className="w-1/2 mx-3 my-2 flex">
                  <div className="border border-gray-500 px-2 w-1/2 rounded-2xl flex justify-around ">
                    <button
                      onClick={() => dispatch(decreaseQntInBuy(buyNow.id))}
                      className="font-semibold text-lg text-gray-800 pb-1 "
                    >
                      -
                    </button>
                    <p className="pt-1 px-1 text-blue-500">{buyNow.quantity}</p>
                    <button
                      onClick={() => dispatch(increaseQntInBuy(buyNow.id))}
                      className="font-semibold text-lg text-gray-800  pb-1"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={deleteBuyNow}
                    className="mx-3 text-gray-700 font-semibold text-sm"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto shadow-lg shadow-gray-400 rounded bg-gray-100 mt-3 ml-5 pb-3">
            <div className="flex flex-col items-start ">
              <div className="flex pt-2">
                <p className="text-sm bg-gray-200 px-2 mx-2 my-1 text-blue-500">
                  4
                </p>
                <h2 className="text-lg font-semibold text-gray-500 ">
                  PAYMENT METHOD
                </h2>
              </div>

              <ul className="text-gray-700 px-8 text-left space-y-2 w-full pt-2">
                {paymentMethod?.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex justify-between w-3/4 border border-gray-400 rounded-lg px-3 py-2 cursor-pointer"
                    onClick={() => dispatch(setPayment(payment.id))}
                  >
                    <div className="flex flex-wrap">
                      <input
                        type="radio"
                        name={payment.name}
                        checked={selectedMethod === payment.id}
                        onChange={() => dispatch(setPayment(payment.id))}
                        className="mx-1"
                      />
                      <span>{payment.name}</span>
                    </div>
                    <div>{payment.icon}</div>
                  </div>
                ))}
              </ul>

              {(selectedMethod === "phonepe" || selectedMethod === "card") &&
                show && (
                  <div className="fixed z-50 inset-0 bg-black/40 flex justify-center items-center">
                    <div className=" bg-gray-100  flex flex-col w-64 h-auto pb-6 rounded-lg shadow-lg shadow-gray-400 ">
                      <p className="font-semibold text-lg text-gray-800 text-left pt-2 pb-1">
                        <span className="px-5">{selectedMethod}</span>
                      </p>
                      <div className="flex justify-start px-4">
                        <FaUser
                          size={25}
                          className="mx-1 border rounded-2xl bg-gray-400 mt-1"
                        />
                        <p className="font-gray-700 font-lg">{users.name}</p>
                      </div>
                      <p className="text-gray-600 text-left px-3 w-[85%] border border-gray-400 bg-gray-200 mx-auto rounded my-2">
                        ₹{buyNow.price}
                      </p>
                      <button
                        type="submit"
                        onClick={handlePay}
                        className=" rounded py-1 w-[85%] bg-green-500 mx-auto active:bg-green-600 shadow-sm shadow-green-300"
                      >
                        Pay
                      </button>
                    </div>
                  </div>
                )}
            </div>
          </div>

          <div className="w-1/4 h-auto shadow-lg shadow-gray-400 rounded bg-orange-400 mt-5 pb-3 mx-auto ">
            <button onClick={orderPlace} className="text-center pt-2">
              Place Order
            </button>
          </div>
        </div>

        <div className="w-2/5 h-auto flex mx-auto ">
          <div className=" w-2/3 flex items-center mx-auto ">
            <div className="w-full flex flex-col text-left bg-gray-100 rounded shadow-lg shadow-gray-400 my-2 pb-4 px-3 ">
              <h2 className="font-semibold text-lg text-gray-800 my-3 px-1">
                Price Detail
              </h2>
              <div className="flex flex-col bg-gray-200 rounded-lg text-gray-500 space-y-3 px-3 py-3 mb-3">
                <p className="flex justify-between font-semibold ">
                  <span>Price ({buyNow.quantity} item)</span>
                  <span>₹{buyNow.price}</span>
                </p>
                <p className="flex justify-between font-semibold ">
                  <span>Delivery Charge </span>
                  <span>₹ {deliveryCharge}</span>
                </p>

                <span className="w-[95%] h-[1px] border-b border-gray-300 "></span>
                <p className="flex justify-between font-semibold text-gray-700">
                  <span className=""> Total Payable </span>
                  <span>₹ {totalPayable}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
