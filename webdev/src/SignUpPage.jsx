import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailIcon from './assets/Mail.svg'; 
import LockIcon from './assets/Lock.png'; 
import UserIcon from './assets/user.png'; 
import PhoneIcon from './assets/Phone.png';  
import './SignUpPage.css';

const SignUpPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '' 
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userData.username || !userData.email || !userData.password || !userData.phoneNumber) {
            setError('All fields are required.');
            return;
        }

        if (userData.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        const phoneRegex = /^[0-9]{11}$/;
        if (!phoneRegex.test(userData.phoneNumber)) {
            setError('Phone number must be 11 digits.');
            return;
        }

        setError('');
        console.log('User Data:', userData);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="login-container">
                <h2 className="form-title">Create an Account</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <img src={UserIcon} alt="Username" className="input-icon" />
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                            placeholder="Username"
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={EmailIcon} alt="Email" className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={LockIcon} alt="Password" className="input-icon" />
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={PhoneIcon} alt="Phone Number" className="input-icon" />
                        <input
                            type="text"
                            name="phoneNumber"
                            value={userData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="input-field"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Sign Up</button>
                </form>
                
                {/* Back Button */}
                <button className="back-button" onClick={() => navigate('/')}>Back to Homepage</button>

                <p className="signup-text">
                    Already have an account? 
                    <a href="/login" className="signup-link">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
