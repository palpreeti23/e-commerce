import React, { useState } from "react";
import users from "../data/Users";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, addUser } from "../store/UserSlice";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users) || [];

  const submitHandler = () => {
    if (!name || !email || !password) {
      alert("fill all the fields");
      return;
    }

    const existingUser = users.find((userEmail) => userEmail.email === email);
    if (existingUser) {
      alert("user already exists");
      return;
    }

    const newUser = { name, email, password };
    dispatch(addUser(newUser));
    navigate(`/`);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[30%] bg-gray-200 rounded-lg py-4 px-3 shadow-xl shadow-gray-900">
        <div className="flex flex-col  items-center">
          <h2 className="text-center text-2xl text-gray-800">Sign up</h2>
          <p className="text-sm text-center pb-3 text-gray-600 ">
            signup to continue
          </p>
          <input
            type="text"
            placeholder="Entee Name"
            className="w-6/7 rounded text-gray-700 px-3 py-2 border border-gray-400 mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="w-6/7 rounded text-gray-700 px-3 py-2 border border-gray-400 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Password"
            className="w-6/7 rounded text-gray-700 px-3 py-2 mb-3 border border-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            onClick={submitHandler}
            className="bg-blue-600 rounded py-2 px-3 w-6/7 mb-3 text-white hover:bg-blue-700 active:shadow-md shadow-blue-500 active:bg-blue-800"
          >
            Signup
          </button>

          <p className="text-gray-800 text-sm">
            Already have an account?
            <Link to={`/login`}>
              <span className="text-gray-600 mb-3 underline underline-offset-1 px-1 hover:text-gray-800">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
