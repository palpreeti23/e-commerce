import React from "react";
// import users from '../data/Users'
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Profile() {
  //   const navigate = useNavigate();
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (!user) {
  //     navigate("/login");
  //     return null;
  //   }
  //   console.log(user);

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center ">
      <div className="bg-gray-50 h-33 w-2/3 shadow-lg shadow-gray-400 mt-5 rounded  ">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center ">
            <FaUser
              size={50}
              className="border rounded-[50%] bg-gray-300 p-0.5 mt-6 mx-2 "
            />
            <div className="flex flex-col mt-3 text-left">
              <h2 className="text-gray-700 ml-2 mt-2 font-medium text-xl">
                Hello preeti
              </h2>
              <p className="text-gray-700 pl-2 text-lg">preeti@gmail.com</p>
            </div>
          </div>
          <div className="text-gray-700 border bg-gray-300 py-1 px-5 rounded-xl ml-8 my-3">
            Edit Profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
