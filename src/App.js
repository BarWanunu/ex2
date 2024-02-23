import { React, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './Signin_page/signin.css';
import Signin from './Signin_page/Signin.js';
import Signup from './Signup_page/Signup.js';
import Home from './Home_page/home.js';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = (isValid) => {
    setIsSignedIn(isValid);
  };

  return (
    <Routes>
      <Route path="/"element={<Signin handleSignIn={handleSignIn}/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home" element={isSignedIn ? <Home /> : <Navigate to="/" />}/>
    </Routes>
  );
}

export default App;
