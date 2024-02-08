import React from 'react';
import './signup.css';

function Signup() {
    const handleSubmit = () => {
        const emailInput = document.getElementById('exampleFormControlInput1');
        const passwordInput = document.getElementById('inputPassword5');
        const confirmPasswordInput = document.getElementById('floatingPassword');

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

        // Perform additional actions or submit the form if everything is valid
        alert('Form submitted successfully!');
    };
    return(
        <div className="container px-6 text-center form-container">
        <div className="row align-items-center">
            <div className="col">
                <div id="Email Address" className="form-text mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <small>Your email address needs to be in the form of: name@example.com</small>
                </div>
                <div id="passwordHelpBlock" className="form-text mb-3">
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Password" />
                    <label htmlFor="inputPassword5" className="form-label"></label>
                    <small>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
                </div>
                <div id="passwordVerification" className="form-text mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
                    <label htmlFor="passwordVerification" className="form-label"></label>
                </div>
                <div id="displayName" className="form-text mb-3">
                    <input type="text" className="form-control" id="displayName" placeholder="Display Name" />
                    <label htmlFor="displayName" className="form-label"></label>
                </div>

                <div className="photo-upload mb-3">
                    <input type="file" className="form-control" id="photoInput" accept="image/*" />
                    <label htmlFor="photoInput" className="form-label">Choose Your Profile Picture</label>
                </div>
                <div className="col-auto">
                <button type="button" className="btn btn-primary mb-3" style={{ padding: '5px' }} onClick={handleSubmit}>ubmit</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default signup;