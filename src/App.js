import {React, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Signin_page/signin.css';
import Signin from './Signin_page/Signin.js';
import Signup from './Signup_page/Signup.js';
import Home from './Home_page/home.js';
function App() {

  const [isValid, setIsValid] = useState(false);
  
  const handleSingIn = () => {
    const displayName = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

      if (displayName === 'guest' && password === 'Aa12345678') {
        setIsValid(true);
        return true;
      } else {
        setIsValid(false);
        return false;
    } 
   }


      ////// fix here
   

  return (
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={handleSingIn ? <Home/> : <Signin/>} />
    </Routes>
  );
}
export default App;

