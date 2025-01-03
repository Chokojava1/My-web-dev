import React from 'react';
import './Homepage.css';
import Carousel from './Carousel'; 
import Product from './Products';

const Homepage = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-logo">Album Galaxy</div>
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
            <div className="carousel-section">
                <Carousel /> {}
                <Product/>{}
            </div>
        </div>
    );
};

export default Homepage;
