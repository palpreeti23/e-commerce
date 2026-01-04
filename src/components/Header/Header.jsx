import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Books",
    "Home & Kitchen",
  ];

  const cartItems = useSelector((state) => state.cart.product);
  const totalValue = cartItems.reduce(
    (sum, cartItems) => sum + cartItems.quantity,
    0
  );

  return (
    <header className="w-full text-white">
      <nav className="w-full h-auto bg-gray-800 rounded-t-lg py-2 px-4">
        <div className="flex flex-wrap justify-around">
          <div className="py-2">LOGO</div>
          <div className="w-3/5 realtive">
            <input
              className="bg-gray-600 w-[97%] py-2 px-3  rounded-l-lg  focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
              type="text"
              placeholder="Search here..."
            />
            <button className="bg-orange-400 px-2 py-2 absolute  text-white rounded-r-lg w-[3%]  focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="relative inline-block">
            <select className="py-2  bg-gray-600 text-black rounded-lg w-17">
              {categories.map((items) => (
                <option key={items} value={items} className="tect-white">
                  {items}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-around items-center space-x-8">
            <button className="hover:text-orange-400">
              <AiOutlineHeart size={24} />
            </button>
            <button className="hover:text-orange-300 flex">
              <FiShoppingCart size={24} /> ({totalValue})
            </button>
            <button className="py-2 hover:text-orange-300">
              <FaUserCircle size={24} />
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full bg-gray-700 py-2 ">
        <ul className="flex justify-around items-center text-gray-400 font-medium flex-wrap">
          <li className="hover:text-gray-300">logo</li>
          <li className="hover:text-gray-300">Electronics</li>
          <li className="hover:text-gray-300">Fashion</li>
          <li className="hover:text-gray-300">Books</li>
          <li className="hover:text-gray-300">Sports</li>
          <li className="hover:text-gray-300">Home & Kitchen</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
