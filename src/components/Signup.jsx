import React, { useState } from "react";
import users from "../data/Users";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    const user = users.find(
      (data) => data.email === email && data.password === password
    );
    if (!user) {
      setError("invalid email and password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    navigate("/profile");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[40%] bg-gray-300 rounded py-4 px-3 shadow-xl shadow-gray-900">
        <div className="flex flex-col space-y-5 items-center">
          <h2 className="py-1 text-center text-2xl text-gray-800">Signup</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-6/7 rounded text-gray-700 px-3 py-2 border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-6/7 rounded text-gray-700 px-3 py-2 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Password"
            className="w-6/7 rounded text-gray-700 px-3 py-2 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            onClick={submitHandler}
            className="bg-blue-600 rounded-lg py-2 px-3 text-white w-1/4 hover:bg-blue-700 active:shadow-md shadow-blue-500 active:bg-blue-800"
          >
            Signup
          </button>

          <p className="text-gray-800 text-sm">
            Already have an account?
            <Link to={`/login`}>
              <span className="text-gray-600 underline underline-offset-1 px-1 hover:text-gray-800">
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
