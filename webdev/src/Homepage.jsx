import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Homepage.css';
import Carousel from './Carousel';
import Product from './Products';
import logo from './assets/Logo.png';
import CartLogo from './assets/cart.png'; // Import cart image

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
                    <li><Link to="/">Home</Link></li> {/* Home link is fine with Link */}
                    <li><Link to="/album">Album</Link></li> {/* Use Link for Album page */}
                    <li><a href="#about" onClick={scrollToAbout}>About</a></li> {/* Keep anchor tag for scrolling to About */}
                    <li><Link to="/login">Login</Link></li> {/* Login link */}
                </ul>
                <div className="cart-icon">
                    <Link to="/cart">
                        <img src={CartLogo} alt="Cart" className="cart-logo" />
                    </Link>
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
