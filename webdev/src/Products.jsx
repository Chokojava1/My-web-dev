import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import product1 from './assets/Product1.jpg';
import product2 from './assets/Product2.jpg';
import product3 from './assets/Product 3.jpg';
import product4 from './assets/Product4.jpg';
import product5 from './assets/Product5.jpg';
import product6 from './assets/Product6.jpg';
import product7 from './assets/Product7.jpg';
import product8 from './assets/Product8.jpg';

const Products = () => {
  const products = [
    {
      productID: 1,
      productName: 'Feel My Rythm - Red Velvet',
      productPrice: '₱600.00',
      productImage: product1,
      productDescription: 'A vibrant and energetic album by Red Velvet with upbeat tracks.',
    },
    {
      productID: 2,
      productName: 'Nayeon NA - Mini Album',
      productPrice: '₱550.00',
      productImage: product2,
      productDescription: 'A solo debut from Nayeon of TWICE featuring catchy tunes.',
    },
    {
      productID: 3,
      productName: 'Ready To Be - Twice Album',
      productPrice: '₱700.00',
      productImage: product3,
      productDescription: 'TWICE brings you a powerful new album filled with dance tracks.',
    },
    {
      productID: 4,
      productName: 'The Feels - Twice Album',
      productPrice: '₱450.00',
      productImage: product4,
      productDescription: 'The Feels by TWICE is an upbeat album with a mix of genres.',
    },
    {
      productID: 5,
      productName: 'Damn - Kendrick Lamar Album',
      productPrice: '₱1000.00',
      productImage: product5,
      productDescription: 'A Grammy-winning album by Kendrick Lamar with powerful lyrics.',
    },
    {
      productID: 6,
      productName: 'Utopia - Travis Scott Album',
      productPrice: '₱1500.00',
      productImage: product6,
      productDescription: 'Travis Scott brings a futuristic sound with Utopia, a must-listen for hip-hop fans.',
    },
    {
      productID: 7,
      productName: 'Starboy - The Weeknd Album',
      productPrice: '₱900.00',
      productImage: product7,
      productDescription: 'The Weeknd’s Starboy album brings a mix of R&B and electronic vibes.',
    },
    {
      productID: 8,
      productName: 'Lagi - Bini Album',
      productPrice: '₱1200.00',
      productImage: product8,
      productDescription: 'Lagi by Bini is a beautiful album combining powerful vocals and modern pop.',
    },
  ];

  return (
    <div className="products-container">
      <div className="products-section">
        {products.map((product) => (
          <div className="product-card" key={product.productID}>
            <img
              src={product.productImage}
              alt={product.productName}
              className="product-image"
            />
            <h3 className="product-name">{product.productName}</h3>
            <p className="product-price">{product.productPrice}</p>
            <div className="button-container">
              <Link to={`/product/${product.productID}`} state={product}>
                <button className="buy-button">Buy Now</button>
              </Link>
              <button className="add-to-cart" onClick={() => alert('Product added to Cart')}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
