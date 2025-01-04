import React from 'react';
import './Homepage.css';
import Carousel from './Carousel';
import Product from './Products';
import logo from './assets/Logo.png';

const Homepage = () => {
    return (
        <div className="homeContainer">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="VibeWall" />
                </div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/album">Album</a></li>
                    <li><a href="/customize">Customize</a></li>
                    <li><a href="/about">About</a></li>
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
                <section className='sec1'>
                <Product />
                </section>
     
            </section>
        </div>
    );
};
export default Homepage;