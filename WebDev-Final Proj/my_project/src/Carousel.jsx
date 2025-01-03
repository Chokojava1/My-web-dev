import React, { useState, useEffect } from 'react';
import './Carousel.css';

import image1 from './assets/Carousel1.png';
import image2 from './assets//Carousel2.jpg';
import image3 from './assets/Carousel3.jpg';
import image4 from './assets/Carousel4.png';


const Carousel = () => {
    const images = [image1, image2, image3, image4]; 

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(intervalId); 
    }, [images.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
