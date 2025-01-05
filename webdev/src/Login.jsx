import React from "react";
import Facebook from './assets/icons8-facebook.svg';
import Google from './assets/icons8-google.svg';
import EmailIcon from './assets/Mail.svg';
import LockIcon from './assets/Lock.png';
import './Login.css'; 

const Login = () => {
    return (
        <div className="container">
            <div className="login-container">
                <h2 className="form-title">Log in with</h2>
                <div className="social-login">
                    <button className="social-login-btn">
                        <img src={Google} alt="Google" className="social-icon" />
                        Google
                    </button>
                    <button className="social-login-btn">
                        <img src={Facebook} alt="Facebook" className="social-icon" />
                        Facebook
                    </button>
                </div>
                <p className="separator"><span>or</span></p>
                <form className="login-form">
                    <div className="input-wrapper">
                        <img src={EmailIcon} alt="Email" className="input-icon" />
                        <input type="email" placeholder="Email address" className="input-field" />
                    </div>
                    <div className="input-wrapper">
                        <img src={LockIcon} alt="Password" className="input-icon" />
                        <input type="password" placeholder="Password" className="input-field" />
                    </div>
                    <a href="#" className="forgot-pass-link">Forgot Password?</a>
                    <button className="login-button">Log In</button>
                </form>
                <p className="signup-text">
                    Don&apos;t have an Account? <a href="#">Sign up now</a>
                </p>
            </div>
        </div>
    );
};

export default Login;