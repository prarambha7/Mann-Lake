import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/mainhome");
  };

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col lg:flex-row bg-white">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full">
        <img
          src="./images/loginpg.png"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 sm:px-10 overflow-auto">
        <div className="w-full max-w-md">
          <img
            src="./images/logo.png"
            alt="Mann Lake Logo"
            className="h-20 mx-auto mb-6"
          />

          <h1 className="text-2xl font-bold text-center mb-1">Welcome Back</h1>
          <p className="text-sm text-center mb-6 text-gray-500">
            Join the discussion and be part of something meaningful.
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Username / Email Address:
              </label>
              <input
                type="text"
                placeholder="Enter Your Username or Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit" 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded transition cursor-pointer"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="mx-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-t" />
          </div>

          <div className="space-y-2">
            <button className="w-full border border-gray-300 flex items-center justify-center py-2 rounded hover:bg-gray-100 transition">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                className="w-5 mr-2"
              />
              Sign in with Google
            </button>
            <button className="w-full border border-gray-300 flex items-center justify-center py-2 rounded hover:bg-gray-100 transition">
              <img
                src="https://img.icons8.com/color/48/facebook.png"
                alt="Facebook"
                className="w-5 mr-2"
              />
              Sign in with Facebook
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-yellow-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
