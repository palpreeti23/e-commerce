import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="w-1/6 h-screen bg-gray-800 rounded-b-lg">
      <div className="">
        <ul className="flex flex-col py-3 ">
          <li className="flex justify-center items-center my-2">
            <span className="text-xl text-orange-400 mr-2">
              <i class="fa-solid fa-house"></i>
            </span>
            <p className="text-gray-300 text-lg">Home</p>
          </li>
          <li className="flex justify-center items-center my-2 pl-3">
            <span className="text-2xl text-orange-400 mr-2 ">
              <AiFillHeart />
            </span>
            <p className="text-gray-300 text-lg">WishList</p>
          </li>
          <li className="flex justify-center items-center my-2">
            <span className="text-2xl text-orange-400 mr-2">
              <AiOutlineUser />
            </span>
            <p className="text-gray-300 text-lg">Profile</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
