import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/7 h-screen bg-gray-200 rounded-b-lg">
      <div className="">
        <ul className="flex flex-col py-3 text-gray-700 ">
          <Link to={`/`}>
            <li className="flex justify-center items-center my-2 hover:underline decoration-gray-400 decoration-1 underline-offset-2 cursor-pointer">
              <span className="text-xl text-orange-400 mr-2">
                <i class="fa-solid fa-house"></i>
              </span>
              <p className=" text-lg">Home</p>
            </li>
          </Link>
          <Link to={`/wishlist`}>
            <li className="flex justify-center items-center my-2 pl-3 hover:underline decoration-gray-400 decoration-1 underline-offset-2 cursor-pointer">
              <span className="text-2xl text-orange-400 mr-2 ">
                <AiFillHeart />
              </span>
              <p className=" text-lg">WishList</p>
            </li>
          </Link>
          <Link to={`/profile`}>
            <li className="flex justify-center items-center my-2 hover:underline decoration-gray-400 decoration-1 underline-offset-2 cursor-pointer">
              <span className="text-2xl text-orange-400 mr-2">
                <AiOutlineUser />
              </span>
              <p className=" text-lg">Profile</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
