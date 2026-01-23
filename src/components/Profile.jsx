import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  logout,
  updatePassword,
  updateUserEmail,
  updateUserName,
} from "../store/UserSlice";
import AddressForm from "./AddressForm";

function Profile() {
  const users = useSelector((state) => state.user.user);
  const { address } = useSelector((state) => state.user);
  const [name, setName] = useState(users.name || "");
  const [email, setEmail] = useState(users.email || "");
  const [password, setPassword] = useState(users.password || "");
  const [editMode, setEditMode] = useState(null);
  const [showbtn, setShowbtn] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!users) {
    navigate("/login");
    return null;
  }

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex  ">
      <div className="flex flex-col w-1/3 ml-12">
        <div className="h-auto px-2 pb-3 shadow-lg bg-gray-50 shadow-gray-300 mt-5 rounded my-4">
          <div className="flex flex-col items-start">
            <div className="flex justify-center items-center ">
              <FaUser
                size={40}
                className="border rounded-[50%] bg-gray-300 p-0.5 mt-6 mx-2 "
              />
              <div className="flex flex-col mt-3 text-left">
                <h2 className="text-gray-700 ml-2 mt-2 text-sm ">Hello, </h2>
                <p className="text-gray-700 pl-2 font-medium text-lg">
                  {users.name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto pb-3 shadow-lg bg-gray-50 shadow-gray-300 mt-2 rounded my-4">
          <div className="flex flex-col mt-3 text-left px-2">
            <button
              onClick={() => setShowAdd(true)}
              className="text-gray-500 ml-2 font-medium text-lg pb-1 active:text-blue-500 text-left"
            >
              + Address
            </button>

            {address.length > 0 ? (
              <ul className="">
                {address.map((address, index) => (
                  <li
                    key={index}
                    className="text-gray-500 ml-3 pl-2 border border-gray-300 py-1 px-2 rounded-md mb-3 "
                  >
                    {address.name},{address.area},{address.city},{address.state}
                    ,{address.pin}
                  </li>
                ))}
              </ul>
            ) : (
              <p>add address</p>
            )}
          </div>
        </div>

        <div className="shadow-lg shadow-gray-300 bg-gray-50 rounded h-auto text-left  text-gray-500 space-y-3 mb-5">
          <div className="flex flex-col">
            <Link to={`/wishlist`}>
              <div className=" flex flex-col py-5  px-5">
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
              <div className="flex flex-col py-5 px-5">
                <h2 className="text-medium font-medium "> Cart Items</h2>

                <p className="font-sm text-gray-500 ">Products in your cart</p>
              </div>
            </Link>
            <span className="w-full h-[1px] border-b border-gray-200"></span>
            <div className=" flex py-5  px-5">
              <FaSignOutAlt size={20} className="text-blue-400 mt-1" />
              <button
                onClick={logoutHandler}
                className="text-medium font-medium px-2 "
              >
                Logout
              </button>
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
              <div className="flex">
                <h2 className="text-gray-700 text-lg font-semibold py-2">
                  Name
                </h2>
                <button
                  onClick={() => {
                    setEditMode("name"), setShowbtn(true);
                  }}
                  className="text-sm text-blue-500 pl-5 pt-1 font-medium"
                >
                  Edit
                </button>
              </div>

              {editMode === "name" ? (
                <div className="flex">
                  <input
                    type="text"
                    className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {showbtn && (
                    <button
                      onClick={() => {
                        dispatch(updateUserName(name)),
                          setShowbtn(false),
                          setEditMode(null);
                      }}
                      className="bg-blue-500 px-3 py-2 rounded ml-3"
                    >
                      Save
                    </button>
                  )}
                </div>
              ) : (
                <p className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/2">
                  {users.name}
                </p>
              )}
            </div>

            <div className="flex flex-col pb-4">
              <div className="flex">
                <h2 className="text-gray-700 text-lg font-semibold py-2">
                  Email Address
                </h2>
                <button
                  onClick={() => {
                    setEditMode("email"), setShowbtn(true);
                  }}
                  className="text-sm text-blue-500 pl-5 pt-1 font-medium"
                >
                  Edit
                </button>
              </div>
              {editMode === "email" ? (
                <div className="flex">
                  <input
                    type="text"
                    className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {showbtn && (
                    <button
                      onClick={() => {
                        dispatch(updateUserEmail(email)),
                          setShowbtn(false),
                          setEditMode(null);
                      }}
                      className="bg-blue-500 px-3 py-2 rounded ml-3"
                    >
                      Save
                    </button>
                  )}
                </div>
              ) : (
                <p className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/2">
                  {users.email}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <h2 className="text-gray-700 text-lg font-semibold py-2">
                  Password
                </h2>
                <button
                  onClick={() => {
                    setEditMode("password"), setShowbtn(true);
                  }}
                  className="text-sm text-blue-500 pl-5 pt-1 font-medium"
                >
                  Edit
                </button>
              </div>
              {editMode === "password" ? (
                <div className="flex">
                  <input
                    type="text"
                    className="border py-2 px-2 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showbtn && (
                    <button
                      onClick={() => {
                        dispatch(updatePassword(password)),
                          setEditMode(null),
                          setShowbtn(false);
                      }}
                      className="bg-blue-500 px-3 py-2 rounded ml-3"
                    >
                      Save
                    </button>
                  )}
                </div>
              ) : (
                <p className="border py-2 px-1 text-gray-500 bg-gray-100 rounded-lg border-gray-300 w-1/2">
                  {users.password}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showAdd && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          onClick={() => setShowAdd(false)}
        >
          <div
            className=" p-6 w-[90%] max-w-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <AddressForm onClose={() => setShowAdd(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
