import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart, FiSun, FiMoon } from "react-icons/fi";
import { FaUserCircle, FaBars, FaCircle } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/CategorySlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { list } from "postcss";
import { ToggleTheme } from "../../store/ThemeSlice";

function Header({ setSearchQuery }) {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const submitHandle = (e) => {
    e.preventDefault();
    const trimQuery = query.trim();
    if (!trimQuery) return;
    setSearchQuery(trimQuery);
    dispatch(setCategory("All"));
    navigate(`/itemspage`);
    setQuery("");
  };

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Books",
    "Home & Kitchen",
    "Hand Bags",
  ];

  const cartItems = useSelector((state) => state.cart.products);
  const totalValue = cartItems.reduce(
    (sum, cartItems) => sum + cartItems.quantity,
    0,
  );

  const wishlist = useSelector((state) => state.wishlist.item.length);

  return (
    <header className="w-full text-black dark:text-white h-13">
      <nav className="w-full flex flex-wrap justify-between items-center px-4 fixed z-40 top-0 left-0 h-auto bg-white dark:bg-gray-950 py-2">
        <button className="md:hidden ml-5" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
        <div className="w-32 font-['Saira_Stencil'] font-semibold text-2xl ">
          preet<span className="text-orange-500">ify</span>
        </div>

        {isAuthenticated ? (
          <div className=" hidden md:flex flex-1 justify-around ">
            <div className="flex-1 flex justify-center gap-8">
              <div className="relative inline-block">
                <div
                  className="text-gray-600 dark:text-gray-300 pt-2 flex cursor-pointer "
                  onClick={() => setCatOpen(!catOpen)}
                >
                  Categories
                  <FiChevronDown className="pt-2" size={22} />
                </div>
                {catOpen && (
                  <div className="absolute mt-1 w-28 bg-white dark:bg-gray-950 border rounded shadow-md z-10">
                    <ul className="text-sm text-main-text">
                      {categories.map((items, index) => (
                        <li
                          onClick={() => {
                            dispatch(setCategory(items));
                            navigate(`/itemspage`);
                            setCatOpen(false);
                          }}
                          key={index}
                          className="px-4 py-1 text-left hover:bg-main-bg cursor-pointer"
                        >
                          {items}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <form
                className="flex px-5 rounded-xl bg-main-bg w-1/2 justify-between"
                onSubmit={submitHandle}
              >
                <input
                  type="text"
                  placeholder="Search Products"
                  className=" rounded px-3 py-1 focus:outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button type="submit">
                  <FaSearch className="text-black dark:text-gray-400 text-lg" />
                </button>
              </form>
            </div>

            <div className="flex justify-end gap-3 text-gray-500 pt-1 font-light mr-10 ">
              <NavLink
                to={"/wishlist"}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 dark:border-gray-800 rounded flex">
                  <AiOutlineHeart className="text-2xl" size={25} />
                  <span className="absolute top-1 right-2  text-xs px-1 py-0.5 mb-3 leading-none bg-orange-500 rounded-xl text-white font-semibold">
                    {wishlist}
                  </span>
                </button>
              </NavLink>

              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 dark:border-gray-800  rounded flex">
                  <FiShoppingCart className="text-2xl" size={25} />
                  <span className="absolute top-1 right-2  text-xs px-1 py-0.5 mb-3 leading-none bg-orange-500 rounded-xl text-white font-semibold">
                    {totalValue}
                  </span>
                </button>
              </NavLink>

              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 dark:border-gray-800  rounded flex">
                  <FaUserCircle className="text-2xl" size={25} />
                </button>
              </NavLink>

              <NavLink
                to={"/summary"}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 dark:border-gray-800  rounded flex">
                  <FaClipboardList size={24} />
                </button>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button
                  onClick={() => dispatch(ToggleTheme())}
                  className="px-4 py-1 border border-gray-200 dark:border-gray-800  rounded flex"
                >
                  {themeMode === "dark" ? (
                    <FiSun className="text-2xl" />
                  ) : (
                    <FiMoon className="text-2xl" />
                  )}
                </button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex justify-end">
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
      </nav>
      {open && (
        <nav className="w-1/4 fixed top-10 left-0 flex flex-col px-2 items-center h-screen bg-white dark:bg-gray-900 py-2 md:hidden">
          {isAuthenticated ? (
            <div className="flex flex-col space-y-3">
              {/* <div className="flex justify-end gap-3 text-gray-500 pt-1 font-light mr-10 "> */}
              <NavLink
                to={"/wishlist"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 rounded flex">
                  <AiOutlineHeart className="text-2xl" size={25} />
                  <span className="absolute top-1 right-2  text-xs px-1 py-0.5 mb-3 leading-none bg-orange-500 rounded-xl text-white font-semibold">
                    {wishlist}
                  </span>
                </button>
              </NavLink>

              <NavLink
                to={"/cart"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 rounded flex">
                  <FiShoppingCart className="text-2xl" size={25} />
                  <span className="absolute top-1 right-2  text-xs px-1 py-0.5 mb-3 leading-none bg-orange-500 rounded-xl text-white font-semibold">
                    {totalValue}
                  </span>
                </button>
              </NavLink>

              <NavLink
                to={"/profile"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 rounded flex">
                  <FaUserCircle className="text-2xl" size={25} />
                </button>
              </NavLink>

              <NavLink
                to={"/summary"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                <button className="relative px-4 py-1 border border-gray-200 rounded flex">
                  <FaClipboardList size={24} />
                </button>
              </NavLink>
            </div>
          ) : (
            // </div>
            <div className="flex-1 flex justify-end">
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
        </nav>
      )}
    </header>
  );
}

export default Header;
