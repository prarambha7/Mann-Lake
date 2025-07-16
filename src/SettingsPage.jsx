import React, { useState } from 'react';
import Layout from './Layout';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isPrivate, setIsPrivate] = useState(false);
  const [showActivity, setShowActivity] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [profile, setProfile] = useState({
    firstName: 'Skylar',
    lastName: 'Botosh',
    username: 'skybotoshh',
    bio: 'A very man',
    email: 'skylar@gmail.com',
    gender: 'Male',
    backgroundImage: './images/bg-placeholder.jpg',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className="text-xl font-semibold mb-4">Settings</h1>

            <div className="flex space-x-4 border-b mb-6">
              {['profile', 'privacy', 'help'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 font-medium capitalize ${
                    activeTab === tab
                      ? 'text-yellow-500 border-b-2 border-yellow-500'
                      : 'text-gray-500 hover:text-yellow-500'
                  }`}
                >
                  {tab.replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-md mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg">Skylar Botosh</h2>
                  <p className="text-gray-600 text-sm">@{profile.username}</p>
                </div>
              </div>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">Change Photo</button>
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name:</label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                        className="w-1/2 border px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                        className="w-1/2 border px-3 py-2 rounded"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={profile.username}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">Bio:</label>
                    <textarea
                      name="bio"
                      rows="3"
                      value={profile.bio}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address:</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Gender:</label>
                    <select
                      name="gender"
                      value={profile.gender}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">Background Image:</label>
                    <img
                      src={profile.backgroundImage}
                      alt="Background"
                      className="w-full h-24 object-cover rounded-md border"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded-lg"
                >
                  Save Changes
                </button>
              </form>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold">Make Profile Private</h2>
                    <p className="text-sm text-gray-600">Make your profile private so others can't see it.</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isPrivate}
                      onChange={() => setIsPrivate(!isPrivate)}
                    />
                    <div
                      className={`w-11 h-6 rounded-full relative transition-colors ${
                        isPrivate ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                          isPrivate ? 'translate-x-5' : ''
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold">Show Activity Publicly</h2>
                    <p className="text-sm text-gray-600">Allow others to see your questions, answers, and likes.</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={showActivity}
                      onChange={() => setShowActivity(!showActivity)}
                    />
                    <div
                      className={`w-11 h-6 rounded-full relative transition-colors ${
                        showActivity ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                          showActivity ? 'translate-x-5' : ''
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>

                <div
                  className="cursor-pointer text-yellow-500 font-medium"
                  onClick={() => setShowPasswordModal(true)}
                >
                  Change Password
                </div>
                <div
                  className="cursor-pointer text-yellow-500 font-medium"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete Account
                </div>
              </div>
            )}

            {/* Help Tab */}
            {activeTab === 'help' && (
              <div className="text-gray-600">
                <p>For support or account help, contact our team or check the help center.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="absolute top-10 left-0 right-0 mx-auto w-full max-w-lg bg-white p-6 rounded-xl shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Change Password</h2>
            <button onClick={() => setShowPasswordModal(false)}>✕</button>
          </div>
          <p className="text-gray-600 mb-6">Update your password to keep your account secure.</p>
          <div className="space-y-4">
            {['current', 'new', 'confirm'].map((field, i) => (
              <div key={i}>
                <label className="block font-medium mb-1 capitalize">
                  {field === 'confirm' ? 'Re-enter New Password:' : `${field === 'current' ? 'Current' : 'New'} Password:`}
                </label>
                <div className="relative">
                  <input
                    type={showPassword[field] ? 'text' : 'password'}
                    name={field}
                    placeholder={`${
                      field === 'confirm'
                        ? 'Re-enter Your New Password'
                        : `Enter Your ${field === 'current' ? 'Current' : 'New'} Password`
                    }`}
                    value={passwordData[field]}
                    onChange={handlePasswordChange}
                    className="w-full border px-4 py-2 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }))
                    }
                    className="absolute right-3 top-2 text-xl"
                  >
                    👁️
                  </button>
                </div>
              </div>
            ))}
            <button className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 rounded-xl mt-4">
              Update Password
            </button>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="absolute top-20 left-0 right-0 mx-auto w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-center z-50">
          <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete your account?</h2>
          <div className="flex justify-center space-x-4">
            <button
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600">
              Delete
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Settings;



