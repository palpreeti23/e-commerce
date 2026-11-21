import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/UserSlice";
import API from "../api/axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async () => {
    if (!username || !email || !password) {
      setError("Fill all the fields!");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await API.post("/auth/register", {
        username,
        email,
        password,
      });

      dispatch(login(response.data.user));
      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-2/3 md:w-[30%] bg-gray-100 dark:bg-gray-700 rounded-lg py-4 px-3 shadow-xl shadow-gray-400 dark:shadow-none">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-2xl text-main-text">Sign up</h2>
          <p className="text-sm text-center pb-3 text-gray-600 dark:text-gray-400 ">
            signup to continue
          </p>
          <input
            type="text"
            placeholder="Enter Username"
            className=" w-full md:w-6/7 rounded text-main-text px-3 py-2 border border-gray-400 mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            className=" w-full md:w-6/7 rounded text-main-text px-3 py-2 border border-gray-400 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Password"
            className="w-full md:w-6/7 rounded text-main-text px-3 py-2 mb-3 border border-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 mb-2">{error}</p>}
          <button
            onClick={submitHandler}
            disabled={loading}
            className="bg-blue-600 rounded py-2 px-3 w-full md:w-6/7 mb-3 text-white hover:bg-blue-700 active:shadow-md shadow-blue-500 active:bg-blue-800 cursor-pointer"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>

          <p className="text-gray-800 dark:text-gray-300 text-sm">
            Already have an account?
            <Link to={`/login`}>
              <span className="text-gray-600 dark:text-gray-200 mb-3 underline underline-offset-1 px-1 hover:text-gray-800">
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
