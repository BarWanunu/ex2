import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signin.css';
import facebook from '../Facebook_images/facebook.svg';
import white_facebook from '../Facebook_images/white_facebook.svg';

function Signin() {

  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = (isDark) => {
      setIsDarkMode(isDark);
  };
        useEffect(() => {
            document.body.classList.toggle('dark-mode', isDarkMode);
          }, [isDarkMode]);
    
    const handleSingIn = () => {
      const user = localStorage.getItem('user');
      const displayName = document.getElementById('floatingInput').value;
      const password = document.getElementById('floatingPassword').value;
      if (user) {
        const dataUser = JSON.parse(user);

        if (dataUser.name === displayName && dataUser.password === password) {
          alert('Login Success, welcome to Facebook!');
          navigate('/home');
        } else {
          alert('Incorrect username or password. Please try again.');
      } 
     } 
    };

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
      {/* Facebook Image on the Left */}
      <div className="col-4">
        <img src={isDarkMode ? white_facebook : facebook} width={500} height={500} />
        <button type="button" id="Light" className={`btn btn-light ${isDarkMode ? 'active' : ''}`} onClick={() => toggleDarkMode(false)}>Light
    </button>
    <button type="button" id="Dark" className={`btn btn-dark ${isDarkMode ? '' : 'active'}`} onClick={() => toggleDarkMode(true)}>Dark
    </button>
      </div>
      {/* Email/Password Form and Buttons on the Right */}
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
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          <div className="col-8 mt-3">
            <button type="submit" id="log-sign" className="btn btn-primary mb-3 mr-2" onClick={handleSingIn}>Log In</button>
            <Link to="/signup" className="btn btn-primary mb-3">
          Sign Up
        </Link>
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