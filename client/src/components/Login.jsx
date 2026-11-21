import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/UserSlice";
import API from "../api/axios";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async () => {
    if (!identifier || !password) {
      setError("Please enter username/email and password!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await API.post("/auth/login", {
        email: identifier,
        username: identifier,
        password,
      });

      dispatch(login(response.data.user));
      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/3 md:w-[30%] bg-gray-100 dark:bg-gray-700 rounded pt-2 pb-2 px-3 shadow-xl shadow-gray-400 dark:shadow-none">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-2xl text-main-text">Login</h2>
          <p className="text-sm text-center pb-3 text-gray-600 dark:text-gray-400">
            login to continue
          </p>
          <input
            type="text"
            placeholder=" Enter username/email"
            className=" w-full md:w-6/7 rounded text-main-text px-3 py-2 border border-gray-400 mb-3"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className=" w-full md:w-6/7 rounded text-main-text px-3 py-2 border border-gray-400 mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 mb-2">{error}</p>}
          <button
            onClick={submitHandler}
            disabled={loading}
            className="bg-blue-600 rounded py-2 px-3 text-white w-full md:w-6/7 hover:bg-blue-700 active:shadow-md shadow-blue-500 active:bg-blue-800 mb-3 cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-gray-800 dark:text-gray-300 text-sm mb-3">
            Don't have an account?
            <Link to={`/signup`}>
              <span
                className="text-gray-600 dark:text-gray-200 underline underline-offset-1 px-1 hover:text-gray-800 
              "
              >
                Signup
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
