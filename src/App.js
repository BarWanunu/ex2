import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Signin_page/signin.css';
import Signin from './Signin_page/Signin.js';
import Signup from './Signup_page/Signup.js';
import Home from './Home_page/home.js';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App;
