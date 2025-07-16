import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const InterestSelectionPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/profilepage");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-white relative overflow-hidden">
      {/* Top Right Vector */}
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

        {/* Main Illustration */}
        <img
          src="./images/Wall post-amico 1.png"
          alt="Man Holding Pencil"
          className="relative z-10 max-w-[80%] sm:max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 px-6 sm:px-10 py-10 lg:py-20 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          What topics are you interested in?
        </h1>
        <p className="text-gray-600 mb-6 max-w-lg text-sm sm:text-base">
          Choose from trending tags or search your favorite topics.
        </p>

        {/* Search Box */}
        <div className="relative mb-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Search for your interest"
            className="w-full border border-gray-300 rounded px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
        </div>

        {/* Interest Tags */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start max-w-xl">
          {['UI/UX', 'Graphic Design', 'Web Development', 'Product Management', 'User Experience Design', 'Data Analysis'].map(tag => (
            <span
              key={tag}
              className="bg-yellow-200 text-black px-4 py-2 rounded-full text-sm flex items-center gap-2"
            >
              {tag} <span className="text-xl font-semibold">×</span>
            </span>
          ))}
        </div>

        {/* Next Button */}
        <div className="w-full flex justify-center lg:justify-end">
          <button
            onClick={handleStart}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition duration-200"
          >
            Next <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestSelectionPage;
