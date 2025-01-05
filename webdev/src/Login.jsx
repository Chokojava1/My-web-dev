import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Facebook from './assets/icons8-facebook.svg';
import Google from './assets/icons8-google.svg';
import EmailIcon from './assets/Mail.svg';
import LockIcon from './assets/Lock.png';
import './Login.css'; 

const Login = () => {
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!input) {
            setError("Please enter a username or email.");
            return;
        }
        
        const isEmail = emailRegex.test(input); 
        if (!isEmail && input.length < 3) { 
            setError("Username should be at least 3 characters.");
            return;
        }
        
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        if ((isEmail && input === 'test@example.com' || !isEmail && input === 'testuser') && password === 'password123') {
            navigate('/');
        } else {
            setError("Invalid email/username or password.");
        }
    };

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
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <img src={EmailIcon} alt="Email" className="input-icon" />
                        <input
                            type="text" 
                            placeholder="Email or Username"
                            className="input-field"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={LockIcon} alt="Password" className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <a href="#" className="forgot-pass-link">Forgot Password?</a>
                    <button type="submit" className="login-button">Log In</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                
                <button className="back-button" onClick={() => navigate('/')}>Back to Homepage</button>

                <p className="signup-text">
                    Don&apos;t have an Account? <Link to="/signup">Sign up now</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
