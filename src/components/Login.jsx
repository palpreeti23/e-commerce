import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/UserSlice";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.user);

  const submitHandler = () => {
    const user = users.find(
      (data) => data.email === email && data.password === password
    );
    if (!user) {
      setError("invalid email and password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(login(user));
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[30%] bg-gray-200 rounded pt-2 pb-2 px-3 shadow-xl shadow-gray-900">
        <div className="flex flex-col items-center">
          <h2 className=" text-center text-2xl text-gray-800">Login</h2>
          <p className="text-sm text-center pb-3 text-gray-600">
            login to continue
          </p>
          <input
            type="text"
            placeholder="Email"
            className="w-6/7 rounded text-gray-700 px-3 py-2 border border-gray-400 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Password"
            className="w-6/7 rounded text-gray-700 px-3 py-2 border border-gray-400 mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            onClick={submitHandler}
            className="bg-blue-600 rounded py-2 px-3 text-white w-6/7 hover:bg-blue-700 active:shadow-md shadow-blue-500 active:bg-blue-800 mb-3"
          >
            Login
          </button>

          <p className="text-gray-800 text-sm mb-3">
            Don't have an account?
            <Link to={`/signup`}>
              <span
                className="text-gray-600 underline underline-offset-1 px-1 hover:text-gray-800 
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
