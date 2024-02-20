import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signin.css';
import facebook from '../Facebook_images/facebook.svg';
import white_facebook from '../Facebook_images/white_facebook.svg';

function Signin() {

  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

    // setting the dark mode according to the button clicked
    const toggleDarkMode = (isDark) => {
      setIsDarkMode(isDark);
  };

  // making the body dark/light mode according to isDarkMode
    useEffect(() => {
      document.body.classList.toggle('dark-mode', isDarkMode);
        }, [isDarkMode]);
    
    
    const [isValid, setIsValid] = useState(false);

    // setting is valid according to habdleSingIn and navigating to either home or signin page
    const isValidSignIn = () => {
      setIsValid(handleSingIn);
      if (handleSingIn()) {
        alert('Login Success, welcome to Facebook!');
        navigate('/home');
      } else {
        alert('Incorrect username or password. Please try again.');
        navigate('/');
      }
    }
    
    // checking if the username and password are correct (guest, Aa12345678 - hard coded for now)
    const handleSingIn = () => {
      const displayName = document.getElementById('floatingInput').value;
      const password = document.getElementById('floatingPassword').value;

        if (displayName === 'guest' && password === 'Aa12345678') {
          return true;
        } else {
          return false;
      } 
     } 

    return(
        <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap demo</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="signin.css" />
  <div className="container px-8 text-center">
    <div className="row align-items-center">
      {/* Adding the facebook image according to the dark/light mode */}
      <div className="col-4">
        <img src={isDarkMode ? white_facebook : facebook} className='image' />
        {/* Dark/Light Mode Buttons */}
        <button type="button" id="Light" className={`btn btn-light`} onClick={() => toggleDarkMode(false)}>Light
    </button>
    <button type="button" id="Dark" className={`btn btn-dark`} onClick={() => toggleDarkMode(true)}>Dark
    </button>
      </div>
      {/* Email and Password forms */}
      <div className="col-8 mt-5">
        <div className="row justify-content-center">
          <div className="col-8 mt-5">
            <div className="form-floating mb-2">
              <input type="email" className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          {/* Log In and Sign Up Buttons - log in goes to home page if it's valid and to sign up if pressed*/}
          <div className="col-8 mt-3">
            <button type="submit" id="log-sign" className="btn btn-primary mb-3 mr-2" onClick={isValidSignIn}>Log In</button>
            <Link to="/signup" className="btn btn-primary mb-3">Sign Up</Link>
          </div>
          <div className="col-8 mt-3">
            <a href="#" className="link-primary">
              Forgot Your Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
)
};
export default Signin;