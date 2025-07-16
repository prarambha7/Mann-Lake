// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProfilePage = () => {
//     const navigate = useNavigate();
    
//     const handleStart = () => {
//         navigate("/profilepicture");
//     };
//   return (
//     <div className="min-h-screen flex items-center justify-between bg-white relative overflow-hidden">
//       {/* Top Right Background Vector */}
//       <img
//         src="./images/Vector 9.png"
//         alt="Top Right Background"
//         className="absolute top-0 right-0"
//       />

//       {/* Left Illustration with Background */}
//       <div className="h-screen flex items-start justify-center z-10">
//         <img
//           src="./images/Vector 8.png"
//           alt="Left Background Vector"
//           className="absolute top-0 left-0 h-full w-auto object-cover z-0"
//         />
//         <img
//           src="./images/Wall post-amico 1.png"
//           alt="Man Holding Pencil"
//           className="relative z-10 max-w-md w-full mt-26 ml-22"
//         />
//       </div>

//       {/* Right Content Section */}
//       <div className="w-[65%] px-10 z-10">
//         <h1 className="text-3xl lg:text-4xl font-bold mb-2">Set up your profile</h1>
//         <p className="text-gray-500 mb-6">
//           Share a brief overview of your professional background. If you prefer, you can choose to skip this step.
//         </p>

//         {/* Bio Textarea */}
//         <div className="mb-10 w-[80%]">
//           <label htmlFor="bio" className="block mb-2 font-medium text-gray-700">Bio:</label>
//           <textarea
//             id="bio"
//             rows="6"
//             maxLength="600"
//             placeholder="Enter your bio"
//             className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-yellow-400 resize-none"
//           ></textarea>
//           <p className="text-right text-sm text-gray-400 mt-1">0/600</p>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end items-center gap-4 pr-10">
//           <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-300">
//             Skip
//           </button>
//           <button 
//           onClick={handleStart}
//           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2">
//             Next <span className="text-xl">→</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");

  const handleStart = () => {
    navigate("/profilepicture");
  };

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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Set up your profile</h1>
        <p className="text-gray-600 mb-6 max-w-lg text-sm sm:text-base">
          Share a brief overview of your professional background. If you prefer, you can choose to skip this step.
        </p>

        {/* Bio Textarea */}
        <div className="mb-10 w-full max-w-md">
          <label htmlFor="bio" className="block mb-2 font-medium text-gray-700 text-left">Bio:</label>
          <textarea
            id="bio"
            rows="6"
            maxLength="600"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Enter your bio"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          ></textarea>
          <p className="text-right text-sm text-gray-400 mt-1">{bio.length}/600</p>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-md flex justify-between lg:justify-end items-center gap-4">
          <button
            onClick={handleStart}
            className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-300"
          >
            Skip
          </button>
          <button
            onClick={handleStart}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition"
          >
            Next <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
