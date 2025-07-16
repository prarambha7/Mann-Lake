import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage/SignUpPage';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import InterestSelectionPage from './InterestSelectionPage';
import ProfilePage from './ProfilePage';
import ProfilePicturePage from './ProfilePicture';
import Home from './Home';
import Notification from './Notification';
// import SocialFeedPage from './SocialFeedPage';
import Settings from './SettingsPage';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/interests" element={<InterestSelectionPage />} />
        <Route path="/profilepicture" element={<ProfilePicturePage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        {/* <Route path="/socialfeedpage" element={<SocialFeedPage />} /> */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/mainhome" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
