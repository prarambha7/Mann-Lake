import React from 'react';
import { X } from 'lucide-react';

const ShareThoughtModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white w-full max-w-xl mx-4 rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto pointer-events-auto">
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-4">Ask a Question!</h2>

        <textarea
          rows="4"
          placeholder="Enter Description if any..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>

        <div className="border border-dashed border-gray-300 rounded-lg px-4 py-6 text-center mb-4">
          <p className="text-gray-400">
            Drag and Drop or <span className="text-blue-600 cursor-pointer">Upload Media</span>
          </p>
        </div>

        <button className="text-sm bg-gray-200 px-3 py-1 rounded-full mb-4">Add Tag</button>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Post
        </button>
      </div>
    </div>
  );
};

export default ShareThoughtModal;
