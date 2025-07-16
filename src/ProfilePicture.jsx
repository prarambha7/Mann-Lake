import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from "react-router-dom";

const ProfilePicturePage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-white relative overflow-hidden">
      {/* Top Right Background Vector */}
      <img
        src="./images/Vector 9.png"
        alt="Top Right Background"
        className="absolute top-0 right-0 w-32 sm:w-40 md:w-56 lg:w-64 z-0"
      />

      {/* Left Illustration */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center z-10 mt-6 lg:mt-0">
        {/* Left Background Vector */}
        <img
          src="./images/Vector 8.png"
          alt="Left Background Vector"
          className="absolute top-0 left-0 h-full w-auto object-cover z-0 opacity-60"
        />
        {/* Foreground Image */}
        <img
          src="./images/Wall post-amico 1.png"
          alt="Man Holding Pencil"
          className="relative z-10 max-w-[80%] sm:max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 px-6 sm:px-10 py-10 lg:py-20 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Set up your profile picture</h1>
        <p className="text-gray-600 mb-10 max-w-md text-sm sm:text-base">
          Add a photo so others can recognize you. You can skip this step if you want.
        </p>

        {/* Upload Icon Area */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-5xl mb-4">
            <FiUser />
          </div>
          <p className="text-sm text-black">Upload your profile picture</p>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-md flex justify-between lg:justify-end items-center gap-4">
          <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-300">
            Skip
          </button>

          <Link to="/mainhome">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition">
              Finish <span className="text-xl">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicturePage;
