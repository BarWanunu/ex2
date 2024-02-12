import React, {useState, useEffect} from 'react';
import './signin.css';
import facebook from './facebook.svg';

function Signin() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
            setIsDarkMode((prevMode) => !prevMode);
    };
        useEffect(() => {
            document.body.classList.toggle('dark-mode', isDarkMode);
          }, [isDarkMode]);
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
        <img src={facebook} width={500} height={500} />
        <button type="button" id="Light" className={`btn btn-light ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>Light
    </button>
    <button type="button" id="Dark" className={`btn btn-dark ${isDarkMode ? '' : 'active'}`} onClick={toggleDarkMode}>Dark
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
              <label htmlFor="floatingInput">Email address</label>
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
            <button type="submit" id="log-sign" className="btn btn-primary mb-3 mr-2">Log In</button>
            <button type="submit" id="log-sign" className="btn btn-primary mb-3">Sign In</button>
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