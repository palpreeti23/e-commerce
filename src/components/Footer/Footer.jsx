import React from "react";

function Footer() {
  return (
    // <div className="w-full h-90 bg-gray-800 rounded pt-20">
    <div className="w-full h-90 bg-gradient-to-t from-gray-950 to-gray-700 rounded flex justify-center items-center py-5">
      <div className=" w-[90%] h-65 bg-gray-800 rounded-lg text-gray-400">
        <div className="flex flex-col">
          <div className="px-10 pt-5 pb-2 text-gray-300 text-xl text-left">
            LOGO
          </div>
          <span className=" border-gray-600 border-b-2 px-5 w-[92%] mx-auto"></span>
          <p className="text-left px-10 pb-2 pt-1 text-gray-500 text-sm">
            Smart deals on Electronics you'll love.
          </p>
          <div className="flex justify-between  py-2 w-[90%] px-8 space-x-2">
            <div className="flex flex-col text-left px-3 flex-wrap flex-1">
              <h3 className="text-lg text-gray-300 pb-1 ">About Preetify</h3>
              <p className="text-gray-500">
                Built with a focus on simplicity and speed.
              </p>
            </div>
            <span className="border-r-2 border-gray-600 h-25 w-[1px] "></span>
            <div className="flex flex-col text-left px-3 flex-wrap flex-1">
              <h3 className="text-gray-300 pb-1 text-lg">Quick Links</h3>
              <ul className="flex flex-col space-y-1 list-disc px-5 text-sm">
                <li>Home</li>
                <li>Products</li>
                <li>Categories</li>
              </ul>
            </div>
            <span className="border-r-2 border-gray-600 h-25 w-[1px] "></span>
            <div className="flex flex-col text-left px-3 flex-wrap flex-1 ">
              <h3 className="text-gray-300 pb-1 text-lg">Customers Support</h3>
              <ul className="flex flex-col space-y-1 list-disc px-5 text-sm">
                <li>Help Center</li>
                <li>Returns</li>
                <li>Shipping Info</li>
              </ul>
            </div>
            <span className="border-r-2 border-gray-600 h-25 w-[1px] "></span>
            <div className="flex flex-col text-left px-3 flex-wrap space-y-1 flex-1">
              <h3 className="text-gray-300 pb-1 text-lg">Follow Us</h3>
              <ul className="flex space-x-2 ">
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
              <p className="text-sm">Contact@preetify.com</p>
            </div>
          </div>

          <span className=" border-gray-600 border-b-2 px-5 w-[92%] mx-auto"></span>
          <p className="py-3 text-gray-500 text-sm">
            &copy;2026 Preetify, All rights reserved
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Footer;
