import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, login, setAddresses } from "../store/UserSlice";
import AddressForm from "./AddressForm";
import API from "../api/axios";

function Profile() {
  const users = useSelector((state) => state.user.user);
  const { address } = useSelector((state) => state.user);

  const [fullName, setFullName] = useState(users.fullName || "");
  const [username, setUsername] = useState(users?.username || "");
  const [phone, setPhone] = useState(users.phone || "");
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [showbtn, setShowbtn] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProfileHandler = async () => {
    try {
      setLoading(true);
      const response = await API.patch("/users/profile", {
        fullName,
        username,
        phone,
      });

      // Update Redux with the latest user data
      dispatch(login(response.data.user));

      // Update the fullname input state
      setFullName(response.data.user.fullName || "");

      setUsername(response.data.user.username || "");
      setPhone(response.data.user.phone || "");

      setEditMode(null);
      setShowbtn(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(
        "Profile update failed:",
        error.response?.data?.message || error.message,
      );

      alert(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");

      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(
        "Logout failed:",
        error.response?.data?.message || error.message,
      );
    }
  };
  const deleteAddressHandler = async (addressId) => {
    try {
      const response = await API.delete(`/users/profile/address/${addressId}`);

      dispatch(setAddresses(response.data.addresses));

      alert("Address deleted successfully!");
    } catch (error) {
      console.error(
        "Address deletion failed:",
        error.response?.data?.message || error.message,
      );

      alert(error.response?.data?.message || "Failed to delete address!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-main-bg flex flex-col md:flex-row ">
      <div className="flex flex-col w-full md:w-1/3 md:ml-12">
        <div className="h-auto px-2 pb-3 shadow bg-gray-50 dark:bg-gray-900 shadow-gray-200 dark:shadow-gray-700 mt-5 rounded my-1">
          <div className="flex flex-col items-start">
            <div className="flex justify-center items-center ">
              <FaUser
                size={40}
                className="border rounded-[50%] bg-gray-300 p-0.5 mt-6 mx-2 "
              />
              <div className="flex flex-col mt-3 text-left text-main-text">
                <h2 className=" ml-2 mt-2 text-sm ">Hello, </h2>
                <p className=" pl-2 font-medium text-lg">
                  {users.fullName || users.username}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto pb-3 shadow bg-gray-50 dark:bg-gray-900 shadow-gray-200 dark:shadow-gray-700  mt-2 rounded my-3">
          <div className="flex flex-col mt-1 text-left px-2">
            <button
              onClick={() => setShowAdd(true)}
              className="text-gray-500 ml-2 font-medium text-lg pb-1 active:text-blue-500 text-left cursor-pointer"
            >
              + Address
            </button>

            {address.length > 0 ? (
              <ul className="">
                {address.map((address, index) => (
                  <li
                    key={address._id}
                    className="text-gray-500 ml-3 border border-gray-200 dark:border-gray-600 py-3 px-3 rounded-lg mb-3 flex items-center justify-between gap-3"
                  >
                    <p className="text-sm leading-relaxed">
                      {address.name}, {address.area}, {address.city},{" "}
                      {address.state}, {address.pin}
                    </p>

                    <button
                      onClick={() => deleteAddressHandler(address._id)}
                      title="Delete address"
                      className="shrink-0 p-2 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors cursor-pointer"
                    >
                      <FaRegTrashAlt size={15} />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-3 text-gray-500">add address</p>
            )}
          </div>
        </div>

        <div className="shadow  bg-gray-50 dark:bg-gray-900 shadow-gray-200 dark:shadow-gray-700 rounded h-auto text-left  text-gray-500 space-y-3 mb-5">
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
            <span className="w-full h-[1px] border-b border-gray-200 dark:border-gray-700"></span>
            <Link to={`/cart`}>
              <div className="flex flex-col py-5 px-5">
                <h2 className="text-medium font-medium "> Cart Items</h2>

                <p className="font-sm text-gray-500 ">Products in your cart</p>
              </div>
            </Link>
            <span className="w-full h-[1px] border-b border-gray-200  dark:border-gray-700"></span>
            <div className=" flex py-5  px-5">
              <FaSignOutAlt size={20} className="text-blue-400 mt-1" />
              <button
                onClick={handleLogout}
                className="text-medium font-medium px-2 cursor-pointer "
              >
                Logout
              </button>
            </div>
            <span className="w-full h-[1px] border-b border-gray-200  dark:border-gray-700"></span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 h-auto px-8 pb-3 shadow  bg-gray-50 dark:bg-gray-900 shadow-gray-200 dark:shadow-gray-700 mt-5 rounded my-4 md:ml-6 mr-10">
        <div className="flex flex-col text-left">
          <div className="pt-5">
            <h2 className="text-2xl font-medium text-main-text pb-3">
              Personal Information
            </h2>
            <div className="flex flex-col pb-4">
              <div className="flex">
                <h2 className="text-main-text text-lg font-semibold py-2">
                  FullName
                </h2>
                <button
                  onClick={() => {
                    (setEditMode("fullName"), setShowbtn(true));
                  }}
                  className="text-sm text-blue-500 pl-5 pt-1 font-medium cursor-pointer"
                >
                  Edit
                </button>
              </div>

              {editMode === "fullName" ? (
                <div className="flex">
                  <input
                    type="text"
                    className="border py-1 px-2 text-gray-500 bg-main-bg rounded-lg border-gray-300 dark:border-gray-700 w-2/3"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {showbtn && (
                    <button
                      onClick={updateProfileHandler}
                      disabled={loading}
                      className="bg-blue-500 px-3 py-1  rounded ml-3 cursor-pointer"
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>
                  )}
                </div>
              ) : (
                <p className="border py-1 px-1 text-gray-500 bg-main-bg rounded-lg border-gray-300 dark:border-gray-700 w-2/3">
                  {users.fullName}
                </p>
              )}
            </div>

            <div className="flex flex-col pb-4">
              <div className="flex">
                <h2 className="text-main-text text-lg font-semibold py-2">
                  Username
                </h2>

                <button
                  onClick={() => {
                    setEditMode("username");
                    setShowbtn(true);
                  }}
                  className="text-sm text-blue-500 pl-5 pt-1 font-medium cursor-pointer"
                >
                  Edit
                </button>
              </div>

              {editMode === "username" ? (
                <div className="flex">
                  <input
                    type="text"
                    className="border py-1 px-2 text-gray-500 bg-main-bg rounded-lg border-gray-300 dark:border-gray-700 w-2/3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <button
                    onClick={updateProfileHandler}
                    disabled={loading}
                    className="bg-blue-500 px-3 py-1 rounded ml-3 cursor-pointer"
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                </div>
              ) : (
                <p className="border py-1 px-1 text-gray-500 bg-main-bg rounded-lg border-gray-300 dark:border-gray-700 w-2/3">
                  {users.username}
                </p>
              )}
            </div>

            <div className="flex flex-col pb-4">
              <div className="flex">
                <h2 className="text-main-text text-lg font-semibold py-2">
                  Phone Number
                </h2>

                <button
                  onClick={() => {
                    setEditMode("phone");
                    setShowbtn(true);
                  }}
                  className="text-sm text-blue-500 pl-5 pt-1 font-medium cursor-pointer"
                >
                  Edit
                </button>
              </div>

              {editMode === "phone" ? (
                <div className="flex">
                  <input
                    type="tel"
                    className="border py-1 px-2 text-gray-500 bg-main-bg rounded-lg border-gray-300 dark:border-gray-700 w-2/3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <button
                    onClick={updateProfileHandler}
                    disabled={loading}
                    className="bg-blue-500 px-3 py-1 rounded ml-3 cursor-pointer"
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                </div>
              ) : (
                <p className="border py-1 px-1 text-gray-500 bg-main-bg rounded-lg border-gray-300 dark:border-gray-700 w-2/3">
                  {users.phone || "Not added"}
                </p>
              )}
            </div>

            <div className="flex flex-col pb-4">
              <h2 className="text-main-text text-lg font-semibold py-2">
                Email Address
              </h2>

              <p className="border py-1 px-2 text-gray-500 bg-main-bg rounded-lg border-gray-300 dark:border-gray-700 w-2/3">
                {users.email}
              </p>
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
