import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

import { FaClipboardList } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/CategorySlice";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header({ setSearchQuery }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const submitHandle = (e) => {
    e.preventDefault();
    const trimQuery = query.trim();
    if (!trimQuery) return;
    setSearchQuery(trimQuery);
    dispatch(setCategory("All"));
    navigate(`/itemspage`);
    setQuery("");

    // console.log(trimQuery);
  };

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Books",
    "Home & Kitchen",
  ];

  const cartItems = useSelector((state) => state.cart.products);
  const totalValue = cartItems.reduce(
    (sum, cartItems) => sum + cartItems.quantity,
    0
  );

  const wishlist = useSelector((state) => state.wishlist.item.length);

  return (
    <header className="w-full text-white ">
      <nav className="w-full fixed z-40 top-0 left-0 h-auto bg-gray-800 py-1">
        <div className="flex flex-wrap justify-between">
          <div className="w-[15%] h-12 mt-2 ">
            <img
              className="w-full h-full object-cover"
              src="src/img/logo2.png"
              alt=""
            />
          </div>

          {isAuthenticated ? (
            <div className="w-[85%] flex">
              <div className="flex flex-wrap w-[65%] justify-around py-2">
                <div className=" realtive w-[98%]">
                  <form
                    className="flex w-full overflow-hidden  rounded-lg focus-within:ring-2 focus-within:outline-none focus-within:border-gray-500 focus-within:ring-orange-300  "
                    onSubmit={submitHandle}
                  >
                    <input
                      className="bg-gray-600 py-2 px-3 rounded-l-lg flex-1 focus:outline-none"
                      type="text"
                      placeholder="Search here..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-orange-400 px-3 py-2 flex items-center justify-center rounded-r-lg   "
                    >
                      <FaSearch className="text-white text-lg" />
                    </button>
                  </form>
                </div>
              </div>

              <div className="flex justify-around items-center px-2 w-[35%]">
                <NavLink
                  to={`/wishlist`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "text-gray-100"
                  }
                >
                  <button className="flex flex-col items-center leading-none ">
                    <div className="flex items-center gap-0">
                      <AiOutlineHeart
                        size={24}
                        className="hover:text-orange-400"
                      />
                      <p className="text-sm text-left mb-3 leading-none bg-orange-400 shadow shadow-orange-500  px-1 rounded-2xl">
                        {wishlist}
                      </p>
                    </div>
                    <p className="text-sm m-0 leading-none">wishlist</p>
                  </button>
                </NavLink>

                <NavLink
                  to={`/cart`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "text-gray-100"
                  }
                >
                  <button className=" flex flex-col items-center ">
                    <div className="flex items-center gap-0">
                      <FiShoppingCart
                        size={24}
                        className="hover:text-orange-400"
                      />
                      <p className="text-xs bg-orange-400 shadow shadow-orange-500  rounded-2xl mb-3 px-1 text-left">
                        {totalValue}
                      </p>
                    </div>
                    <p className="text-sm m-0 leading-none">Cart</p>
                  </button>
                </NavLink>

                <NavLink
                  to={`/profile`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "text-gray-100"
                  }
                >
                  <button className="py-2 hover:text-orange-300">
                    <div className="flex flex-col items-center">
                      <FaUserCircle size={24} />
                      <p className="text-sm m-0 leading-none pt-1">Profile</p>
                    </div>
                  </button>
                </NavLink>

                <NavLink
                  to={`/summary`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "text-gray-100"
                  }
                >
                  <button className="py-2 hover:text-orange-300 ">
                    <div className="flex flex-col items-center">
                      <FaClipboardList size={24} />
                      <p className="text-sm m-0 leading-none pt-1">orders</p>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="w-[85%] flex justify-end">
              <div className="flex justify-around items-center px-2 w-[40%]">
                <Link to={`/login`}>
                  <p className=" font-semibold text-gray-200 hover:text-orange-400">
                    Login
                  </p>
                </Link>
                <Link to={`/signup`}>
                  <p className=" font-semibold text-gray-200 hover:text-orange-400">
                    Signup
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {isAuthenticated && (
        <div className="w-full bg-gray-700 py-2 mt-[63px] ">
          <ul className=" w-full flex justify-around items-center text-gray-400 font-medium flex-wrap cursor-pointer m-0 p-0 list-none">
            <li className="hover:text-gray-300">
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "text-gray-400"
                }
              >
                Home
              </NavLink>
            </li>

            {categories.map((items) => (
              <li
                key={items}
                onClick={() => {
                  dispatch(setCategory(items));
                  navigate(`/itemspage`);
                }}
                className="hover:text-gray-300"
              >
                {/* <Link to={`/itemspage`}> */}
                {items}
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
