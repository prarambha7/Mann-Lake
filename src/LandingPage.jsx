import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/interests");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-white relative overflow-hidden">
      {/* Top Right Background Vector */}
      <img
        src="./images/Vector 9.png"
        alt="Top Right Background"
        className="absolute top-0 right-0 w-32 sm:w-40 md:w-56 lg:w-64 z-0"
      />

      {/* Left Section with Illustration */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center z-10 mt-6 lg:mt-0">
        {/* Left Background Vector */}
        <img
          src="./images/Vector 8.png"
          alt="Left Background Vector"
          className="absolute top-0 left-0 h-full w-auto object-cover z-0 opacity-60"
        />

        {/* Foreground Illustration */}
        <img
          src="./images/Wall post-amico 1.png"
          alt="Man Holding Pencil"
          className="relative z-10 max-w-[80%] sm:max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Right Section - Text and Button */}
      <div className="w-full lg:w-1/2 px-6 sm:px-10 py-10 lg:py-20 z-10 flex flex-col items-center text-center lg:text-left lg:items-start">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 flex flex-wrap justify-center lg:justify-start items-center">
          Welcome to
          <img
            src="./images/logo.png"
            alt="Mann Lake Logo"
            className="h-14 sm:h-20 ml-3"
          />
        </h1>

        <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base">
          Tailor your experience by selecting the subjects that intrigue you the most,
          ensuring that you access relevant content right from the very beginning. This
          personalized approach will not only enhance your learning journey but also keep
          you engaged and motivated as you explore topics that truly resonate with your
          interests.
        </p>

        <button
          onClick={handleStart}
          className="bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-800 transition duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
