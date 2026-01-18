import React, { useState } from "react";
// import users from "../data/Users";
// import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  // const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const wishListItem = useSelector((state) => state.wishlist.item.length);
  const cartItem = useSelector((state) => state.cart.products);
  const cartItemLenght = cartItem.reduce((sum, item) => sum + item.quantity, 0);

  // if (!user) {
  //   navigate("/login");
  //   return null;
  // }
  // console.log(user);

  // const [edit, setEdit] = useState({ ...user });

  return (
    <div className="w-full h-screen bg-gray-100 flex  ">
      <div className="flex flex-col w-1/3 ml-12">
        <div className="h-auto px-8 pb-3 shadow-lg bg-gray-50 shadow-gray-300 mt-5 rounded my-4">
          <div className="flex flex-col items-start">
            <div className="flex justify-center items-center ">
              <FaUser
                size={40}
                className="border rounded-[50%] bg-gray-300 p-0.5 mt-6 mx-2 "
              />
              <div className="flex flex-col mt-3 text-left">
                <h2 className="text-gray-700 ml-2 mt-2 text-sm ">Hello, </h2>
                <p className="text-gray-700 pl-2 font-medium text-lg">Preeti</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto px-8 pb-3 shadow-lg bg-gray-50 shadow-gray-300 mt-2 rounded my-4">
          <div className="flex flex-col mt-3 text-left px-4">
            <h2 className="text-gray-500 ml-2 font-medium text-lg pb-1 active:text-blue-500">
              + Address
            </h2>
            <p className="text-gray-500 ml-3 pl-2 border border-gray-300 py-1 px-2 rounded-md mb-3 ">
              preeti house 123, shani mandir, rajkishor nagar, bilaspur, CG
            </p>
          </div>
        </div>

        <div className="shadow-lg shadow-gray-300 bg-gray-50 rounded h-auto text-left  text-gray-500 space-y-3 mb-5">
          <div className="flex flex-col">
            <Link to={`/wishlist`}>
              <div className=" flex flex-col py-5  px-15">
                <div className="flex">
                  <h2 className="text-lg font-medium "> Wishlist</h2>
                  <AiFillHeart size={24} className="text-red-600 mx-1" />
                </div>

                <p className="font-sm text-gray-500 ">
                  See all the itmes you liked
                </p>
              </div>
            </Link>
            <span className="w-full h-[1px] border-b border-gray-200"></span>
            <Link to={`/cart`}>
              <div className="flex flex-col py-5 px-15">
                <h2 className="text-medium font-medium "> Cart Items</h2>

                <p className="font-sm text-gray-500 ">Products in your cart</p>
              </div>
            </Link>
            <span className="w-full h-[1px] border-b border-gray-200"></span>
            <div className=" flex py-5  px-15">
              <FaSignOutAlt size={20} className="text-blue-400 mt-1" />
              <h2 className="text-medium font-medium px-2 "> Logout</h2>
            </div>
            <span className="w-full h-[1px] border-b border-gray-200"></span>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-auto px-8 pb-3 shadow-lg bg-gray-50 shadow-gray-300 mt-5 rounded my-4 ml-6 mr-10">
        <div className="flex flex-col text-left">
          <div className="pt-5 pl-5">
            <h2 className="text-2xl font-medium text-gray-700 pb-3">
              Personal Information
            </h2>
            <div className="flex flex-col pb-4">
              <h2 className="text-gray-700 text-lg font-semibold py-2">Name</h2>

              <p className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/3">
                Preeti
              </p>
            </div>
            <div className="flex flex-col pb-4">
              <h2 className="text-gray-700 text-lg font-semibold py-2">
                Email Address
              </h2>
              <p className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/3">
                Preeti@gmail.com
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-700 text-lg font-semibold py-2">
                Password
              </h2>
              <p className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/3">
                123456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
