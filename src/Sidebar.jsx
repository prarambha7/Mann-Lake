import React, { useState } from 'react';
import { Home, Bell, Tag, Settings, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { icon: Home, label: 'Home', route: '/mainhome' },
  { icon: Bell, label: 'Notification', route: '/notification' },
  { icon: Tag, label: 'Tags' }, // Custom handled
  { icon: Settings, label: 'Settings', route: '/settings' },
];

const tagList = ['UI/UX', 'Designing', 'Animal', 'Food', 'Cat'];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const [showTags, setShowTags] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:z-0
          w-64 flex-shrink-0 top-0 left-0 min-h-screen
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="rounded-lg shadow-sm border border-gray-200 h-[80vh] flex flex-col justify-between bg-white sticky top-23">
          
          {/* Top: Menu & Navigation */}
          <div className="flex flex-col flex-grow overflow-hidden ">
            {/* Mobile Close Button */}
            <div className="md:hidden flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-gray-900">Menu</span>
              <button onClick={closeSidebar}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2 overflow-y-auto">
              {sidebarItems.map((item, index) => {
                if (item.label === 'Tags') {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setShowTags(!showTags)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-yellow-500"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="text-sm sm:text-base">Tags</span>
                        </div>
                        {showTags ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {showTags && (
                        <div className="px-4 py-2 space-x-2 flex flex-wrap">
                          {tagList.map((tag, i) => (
                            <span
                              key={i}
                              className="bg-yellow-100 text-gray-800 text-sm px-3 py-1 rounded-full mb-2 flex items-center gap-1"
                            >
                              {tag} <span className="text-xs cursor-pointer">×</span>
                            </span>
                          ))}
                          <button className="bg-yellow-100 text-gray-800 text-sm px-3 py-1 rounded-full mb-2">
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        closeSidebar();
                        navigate(item.route);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-yellow-500"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm sm:text-base">{item.label}</span>
                    </button>
                  );
                }
              })}
            </nav>
          </div>

          {/* Bottom: Fixed Footer */}
          <div className="px-4 py-4 mb-6 text-center text-xs text-gray-500 space-y-1 border-t bg-white">
            <div className="space-x-2">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Privacy&Policy</a>
              <a href="#" className="hover:underline">User Agreement</a>
            </div>
            <div>MannLake © 2025, All right reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
