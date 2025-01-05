import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';


import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import product3 from './assets/product 3.jpg';
import product4 from './assets/product4.jpg';
import product5 from './assets/product5.jpg';
import product6 from './assets/product6.jpg';
import product7 from './assets/product7.jpg';
import product8 from './assets/product8.jpg';
const ProductDetails = () => {
    const { productID } = useParams(); 

    const products = [
        { productID: 1, productName: 'Feel My Rythm - Red Velvet', productPrice: '₱600.00', description: 'A vibrant and energetic album by Red Velvet with upbeat tracks.', productImage: product1 },
        { productID: 2, productName: 'Nayeon NA - Mini Album', productPrice: '₱550.00', description: 'A solo debut from Nayeon of TWICE featuring catchy tunes.', productImage: product2 },
        { productID: 3, productName: 'Ready To Be - Twice Album', productPrice: '₱700.00', description: 'TWICE brings you a powerful new album filled with dance tracks.', productImage: product3 },
        { productID: 4, productName: 'The Feels - Twice Album', productPrice: '₱450.00', description: 'The Feels by TWICE is an upbeat album with a mix of genres.', productImage: product4 },
        { productID: 5, productName: 'Damn - Kendrick Lamar Album', productPrice: '₱1000.00', description: 'A Grammy-winning album by Kendrick Lamar with powerful lyrics.', productImage: product5 },
        { productID: 6, productName: 'Utopia - Travis Scott Album', productPrice: '₱1500.00', description: 'Travis Scott brings a futuristic sound with Utopia, a must-listen for hip-hop fans.', productImage: product6 },
        { productID: 7, productName: 'Starboy - The Weeknd Album', productPrice: '₱900.00', description: 'The Weeknd’s Starboy album brings a mix of R&B and electronic vibes.', productImage: product7 },
        { productID: 8, productName: 'Lagi - Bini Album', productPrice: '₱1200.00', description: 'Lagi by Bini is a beautiful album combining powerful vocals and modern pop.', productImage: product8},
    ];

    const product = products.find((p) => p.productID === parseInt(productID));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details-container">
            <div className="product-detail-header">
                <h2>{product.productName}</h2>
                <p className="product-price">{product.productPrice}</p>
            </div>
            <div className="product-detail-body">
                <img src={product.productImage} alt={product.productName} className="product-detail-image" />
                <div className="product-description">
                    <h3>Description:</h3>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="button-container">
                <button className="buy-now-button">Buy Now</button>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
