import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import facebook from '../Facebook_images/facebook.svg';
import white_facebook from '../Facebook_images/white_facebook.svg'

function Signup() { 

    const navigate = useNavigate();

    // setting the dark mode according to the button clicked
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = (isDark) => {
        setIsDarkMode(isDark);
    };

    // making the body dark/light mode according to isDarkMode
    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);


       const handleSubmit = () => {
        // Get the input values
        const emailInput = document.getElementById('exampleFormControlInput1');
        const passwordInput = document.getElementById('inputPassword5');
        const confirmPasswordInput = document.getElementById('floatingPassword');
        const nameInput = document.getElementById('displayNameInput');
        const photoInput = document.getElementById('photoInput');

        // Check if email is in the correct format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }

        // Check if password meets the requirements
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            alert('Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.');
            return;
        }

        // Check if password and confirm password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Password and Confirm Password do not match');
            return;
        }

        // Check if display name is not empty
        if (nameInput.value == '') {
            alert('Please enter a display name');
            return;
        }

        // Check if photo is uploaded
        if (photoInput.value == '') {
            alert('Please upload a profile picture');
            return;
        }
        
        // Alerting the user that all the fields are valid
        alert('Form submitted successfully!');

        // Go back to Sign in page
        navigate('/');
    };

    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sign up Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="signup.css" />
    <div className="container px-6 text-center">
    
    {/* Adding the facebook image according to the dark/light mode */}
    <img src={isDarkMode ? white_facebook : facebook} width={800} height={150}/>
    {/* Dark/Light Mode Buttons */}
    <button type="button" id="Light" className={`btn btn-light ${isDarkMode ? 'active' : ''}`} onClick={() => toggleDarkMode(false)}>
            Light
          </button>
          <button type="button" id="Dark" className={`btn btn-dark ${isDarkMode ? '' : 'active'}`} onClick={() => toggleDarkMode(true)}>
            Dark
          </button>
      <div>
        <div className="container px-6 text-center form-container">
        <div className="row align-items-center">
            <div className="col middle">
                <div className='text-center'>
                    {/* Sign up form - with all the values required to fill */}
                    {/* Each field has a className to change the color according to the dark/light mode */}
                <div id="Email Address" className="form-text mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                    <label htmlFor="exampleFormControlInput1" className={isDarkMode ? 'form-label-dark' : 'form-label-light'}> 
                    Your email address needs to be in the form of: name@example.com</label>
                   
                </div>
                <div id="passwordHelpBlock" className="form-text mb-3">
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Password" />
                    <label htmlFor="inputPassword5" className={isDarkMode ? 'form-label-dark' : 'form-label-light'}>
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</label>
                </div>
                <div id="passwordVerification" className="form-text mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
                    <label htmlFor="passwordVerification" className="form-label"></label>
                </div>
                <div className="form-text mb-3">
                    <input type="text" className="form-control" id="displayNameInput" placeholder="Display Name"/>
                    <label htmlFor="displayNameInput" className="form-label"></label>
                </div>

                <div className="photo-upload mb-3">
                    <input type="file" className="form-control" id="photoInput" accept="image/*" />
                    <label htmlFor="photoInput" className={isDarkMode ? 'form-label-dark' : 'form-label-light'}>Choose Your Profile Picture</label>
                </div>
                <div className="col-auto">
                <button type="button" className="btn btn-primary mb-3" style={{ padding: '5px' }} onClick={handleSubmit}>Submit</button>
                </div>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
)
};

export default Signup;