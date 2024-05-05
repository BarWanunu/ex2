import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './Signin_page/signin.css';
import Signin from './Signin_page/Signin.js';
import Signup from './Signup_page/Signup.js';
import Home from './Home_page/home.js';
import ProfileFeed from './Home_page/ProfileFeed.js';

function App() {
  const storedToken = localStorage.getItem('token');
  const storedUsername = localStorage.getItem('username');
  const [isSignedIn, setIsSignedIn] = useState(Boolean(storedToken)); // Initialize based on token existence
  const [token, setToken] = useState(storedToken || '');
  const [username, setUsername] = useState(storedUsername || '');

  const handleSignIn = (isValid, receivedToken = '', receivedUsername = '') => {
    console.log('Received Token:', receivedToken);
    setIsSignedIn(isValid);
    setToken(receivedToken);
    setUsername(receivedUsername);
    // Store token and username in local storage
    localStorage.setItem('token', receivedToken);
    localStorage.setItem('username', receivedUsername);
  };

  const handleSignOut = () => {
    // Clear token and username from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsSignedIn(false);
    setToken('');
    setUsername('');
  };

  return (
    <Routes>
      <Route path="/" element={<Signin handleSignIn={handleSignIn} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={isSignedIn ? <Home token={token} username={username} onSignOut={handleSignOut} /> : <Navigate to="/" />}
      />
      <Route
      path="/home/profile"
      element={isSignedIn ? <ProfileFeed token={token} username={username} /> : <Navigate to="/" />}
    />

    </Routes>
  );
}

export default App;
