import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Carousel from './Carousel';
import Product from './Products';
import logo from './assets/Logo.png';

const Homepage = () => {
    const aboutRef = useRef(null);

    const scrollToAbout = (e) => {
        e.preventDefault(); // Prevent default link behavior
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="homeContainer">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="VibeWall" />
                </div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/album">Album</a></li>
                    <li><a href="#about" onClick={scrollToAbout}>About</a></li>
                    <li><Link to="/login">Login</Link></li> {/* Updated to use Link */}
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Search albums..." />
                    <button>Search</button>
                </div>
            </nav>

            <section className="carousel-section">
                <Carousel />
            </section>

            <section className="product-section">
                <div className="sec1">
                    <Product />
                </div>
            </section>

            <section id="about" ref={aboutRef} className="about-section">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        Welcome to VibeWall! Your one-stop platform to explore and discover amazing albums. 
                        We strive to create a space where music enthusiasts can dive into an ocean of creativity 
                        and inspiration. Thank you for being a part of our journey!
                    </p>
                </div>
            </section>

            <footer className="footer">
                <p>
                    © 2025 VibeWall. All rights reserved. | 
                    <a href="/privacy"> Privacy Policy</a> | 
                    <a href="/terms"> Terms of Service</a>
                </p>
            </footer>
        </div>
    );
};

export default Homepage;
