import React from 'react';
import './Products.css';
import product1 from './assets/Product1.jpg';
import product2 from './assets//Product2.jpg';
import product3 from './assets/Product 3.jpg';
import product4 from './assets/Product4.jpg';
import product5 from './assets/Product5.jpg';
import product6 from './assets/Product6.jpg';
import product7 from './assets/Product7.jpg';




const Products = () => {
    const products = [
        { id: 1, name: "Feel My Rythm - Red Velvet", price: "$19.99", image: product1 },
        { id: 2, name: "    Nayeon NA - Mini Album", price: "$29.99", image: product2 },
        { id: 3, name: "Ready To Be - Twice Album", price: "$39.99", image: product3 },
        { id: 4, name: "The Feels - Twice Album", price: "$49.99", image: product4 },
        { id: 5, name: "The Feels - Twice Album", price: "$49.99", image: product5 },
        { id: 6, name: "The Feels - Twice Album", price: "$49.99", image: product6 },
        { id: 7, name: "The Feels - Twice Album", price: "$49.99", image: product7 },
    ];

    return (
        <div className="products-container">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                    <button className="buy-button" onClick={() => alert(`Buying ${product.name}`)}>
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;