import React, { useEffect } from "react";
import { hideAlert } from "./store/Alert";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

function AlertCard() {
  const { message, show } = useSelector((state) => state.alert.alertCard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, dispatch]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed z-50 w-84 left-1/2 transform -translate-x-1/2 ">
      <div className=" py-5 rounded bg-white text-gray-700  text-medium  shadow">
        <p className=" flex items-center px-6">
          <FaCheckCircle size={20} className="text-green-500 mx-1 " />
          <span className="text-green-700 mr-2">Successfully</span>
          <span>{message}</span>
        </p>
      </div>
    </div>
  );
}

export default AlertCard;
