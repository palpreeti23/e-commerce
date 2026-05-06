import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-90 rounded-lg flex justify-center py-5 items-center bg-white flex-wrap text-gray-700 ">
      <div className="w-[90%] rounded-lg text-gray-700 flex flex-col">
        <div className="flex justify-around mx-auto space-x-2">
          <div className="flex flex-col text-left px-3 flex-wrap flex-1">
            <div className="text-left font-['Saira_Stencil'] font-semibold md:text-xl text-lg">
              preet<span className="text-orange-500">ify</span>
            </div>

            <p className="text-left pb-2 pt-1 text-gray-800 text-sm w-3/4">
              Smart deals on Electronics you'll love. Built with a focus on
              simplicity and speed.
            </p>
          </div>

          <div className="flex flex-col text-left md:px-3 flex-wrap flex-1  md:text-xl text-lg">
            <h3 className="text-gray-900 pb-1 md:text-lg text-md">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-1 md:list-disc md:px-5 text-sm">
              <Link to={`/`}>
                <li>Home</li>
              </Link>
              <Link to={"/wishlist"}>
                <li>Wishlist</li>
              </Link>
              <Link to={"/cart"}>
                <li>Cart</li>
              </Link>
              <Link to={"/orders"}>
                <li>Orders</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col text-left md:px-3 flex-wrap flex-1 ">
            <h3 className="text-gray-900 pb-1 md:text-lg text-md">
              Customers Support
            </h3>
            <ul className="flex flex-col space-y-1 md:list-disc md:px-5 text-sm">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping Info</li>
            </ul>
          </div>

          <div className="flex flex-col text-left md:px-3 flex-wrap space-y-1 flex-1 px-1">
            <h3 className="text-gray-900 pb-1 md:text-lg text-md">Follow Us</h3>
            <ul className="flex flex-col space-x-2 md:flex-row ">
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter"></i>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
              </li>
            </ul>
            <p className="text-sm hidden md:block">Contact@preetify.com</p>
          </div>
        </div>
        <span className="block border-gray-200 border-b-2 px-5 w-full mt-4"></span>
        <p className="pt-1 text-gray-900 text-sm ">
          &copy;2026 Preetify, All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
