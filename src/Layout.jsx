import React, { useState } from 'react';
import { Search, Menu, Tag, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHotTopicsOpen, setIsHotTopicsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const searchTags = [
    'UI/UX',
    'Web Development',
    'Graphic Design',
    'Product Management',
    'Data Analysis',
    'Content Strategy',
    'Game Design',
    'Digital Marketing',
    'Software Engineering',
    'User Research'
  ];

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchIconClick = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setIsSearchDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              
              
              <div className="flex items-center">
                <Link to="/mainhome" className="cursor-pointer">
                <img 
                  src="./images/logo.png" 
                  alt="MANN LAKE Logo" 
                  className="h-12 sm:h-16 object-contain"
                />
              </Link>
              </div>
            </div>
   

            <div className="flex-1 max-w-lg mx-4 sm:mx-8 relative">
              <div className="relative">
                <button
                  onClick={handleSearchIconClick}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 hover:text-gray-600 transition-colors"
                >
                  <Search className="w-full h-full" />
                </button>
                <input
                  type="text"
                  placeholder="Search Here"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => setIsSearchDropdownOpen(true)}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Search Dropdown */}
              {isSearchDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsSearchDropdownOpen(false)}
                  ></div>
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-3 sm:p-4 max-h-80 overflow-y-auto">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {searchTags.map((tag, index) => (
                        <button
                          key={index}
                          onClick={() => handleTagClick(tag)}
                          className="group flex items-center space-x-1 sm:space-x-2 bg-yellow-50 hover:bg-yellow-500 text-black-800 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-yellow-200 hover:border-yellow-300 transition-all duration-200 hover:shadow-sm"
                        >
                          <span className="whitespace-nowrap">{tag}</span>
                          <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 relative ">
              {/* Hot Topics toggle on mobile */}
              <button 
                onClick={() => setIsHotTopicsOpen(!isHotTopicsOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Tag className="w-5 h-5 text-gray-600" />
              </button>

              {/* Avatar with dropdown */}
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?u=mannlake-avatar`}
                    alt="User"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

               {isDropdownOpen && (
  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
    <button
      onClick={() => {
        setIsDropdownOpen(false);
        navigate('/profile');
      }}
      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors rounded-t-lg"
    >
      Profile
    </button>

    <Link to="/" onClick={() => setIsDropdownOpen(false)}>
      <button
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors rounded-b-lg"
      >
        Logout
      </button>
    </Link>
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main body layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex gap-4 sm:gap-6">
          <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;