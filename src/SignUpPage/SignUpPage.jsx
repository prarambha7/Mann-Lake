import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/landingpage");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-screen">
        <img
          src="./images/loginpg.png"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Sign-Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-8 sm:px-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <img
            src="./images/logo.png"
            alt="Mann Lake Logo"
            className="h-20 mx-auto mb-6"
          />

          {/* Headings */}
          <h1 className="text-2xl font-bold text-center">Welcome to Mannlake</h1>
          <p className="text-sm text-center mb-6 text-gray-500">
            Join the discussion and be part of something meaningful.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="password"
              placeholder="Re-enter Your Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded transition duration-200 cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="mx-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-t" />
          </div>

          {/* Social Buttons */}
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

          {/* Already have an account? */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-yellow-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
