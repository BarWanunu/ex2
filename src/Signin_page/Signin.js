import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signin.css';
import facebook from '../Facebook_images/facebook.svg';
import white_facebook from '../Facebook_images/white_facebook.svg';

function Signin({handleSignIn}) {

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
    
    // checking if the username and password are correct (guest, Aa12345678 - hard coded for now)
    const handleSubmit =async  () => {
        // Process data
        
   
      const displayName = document.getElementById('floatingInput').value;
      const password = document.getElementById('floatingPassword').value;
  
      try {
  
        const response = await fetch('http://localhost:80/signup/signin', {
          method: 'POST', // or 'PATCH' depending on your API endpoint
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers your server expects
          },
          body: JSON.stringify({ username: displayName, password:password }),
        });
    
        const data = await response.json();
        alert(JSON.stringify(data));
        if (data.success) {
          // If success is true, display a success message
          handleSignIn(true, data.token);
          alert(data.message);
          navigate('/home');
      } else {
          // If success is false, display the error message
          handleSignIn(false);
          alert(data.message);
      }
  
    
        // Continue with further processing or handle the response data
      } catch (error) {
        console.error('Error sending data to the server:', error.message);
        // Handle the error (e.g., display an error message to the user)
      }
      // if (displayName === 'guest' && password === 'Aa12345678') {
      //   handleSignIn(true);
      //   alert ('Login Success, welcome to Facebook!');
      //   // navigate to home page if the username and password are correct - handleSignIn is updated to true for the App.js
      //   // navigate('/home');
      // } else {
      //   handleSignIn(false);
      //   alert('Incorrect username or password. Please try again.');
      // }
            
      
      
      // Process data
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
                placeholder="username"
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
            <button type="button" id="log-sign" className="btn btn-primary mb-3 mr-2" onClick={handleSubmit}>Log In</button>
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