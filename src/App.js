import { React, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './Signin_page/signin.css';
import Signin from './Signin_page/Signin.js';
import Signup from './Signup_page/Signup.js';
import Home from './Home_page/home.js';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  const handleSignIn = (isValid, receivedToken = '', receivedUsername = '') => {
    console.log('Received Token:', receivedToken);
    setIsSignedIn(isValid);
    setToken(receivedToken);
    setUsername(receivedUsername);
  };
  return (
    <Routes>
      <Route path="/" element={<Signin handleSignIn={handleSignIn} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={isSignedIn ? <Home token={token} username={username}/> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
