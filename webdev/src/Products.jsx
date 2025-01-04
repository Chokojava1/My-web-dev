import React from 'react';
import './Products.css';
import product1 from './assets/Product1.jpg';
import product2 from './assets/Product2.jpg';
import product3 from './assets/Product 3.jpg';
import product4 from './assets/Product4.jpg';
import product5 from './assets/Product5.jpg';
import product6 from './assets/Product6.jpg';
import product7 from './assets/Product7.jpg';

const Products = () => {
    return (
        <div className="products-container">
            {/* Section 1 */}
            <div className="products-section">
                <div className="product-card">
                    <img src={product1} alt="Feel My Rythm - Red Velvet" className="product-image" />
                    <h3 className="product-name">Feel My Rythm - Red Velvet</h3>
                    <p className="product-price">$600.00</p>
                    <button className="buy-button" onClick={() => alert('Buying Feel My Rythm - Red Velvet')}>
                        Buy Now
                    </button>
                </div>
                <div className="product-card">
                    <img src={product2} alt="Nayeon NA - Mini Album" className="product-image" />
                    <h3 className="product-name">Nayeon NA - Mini Album</h3>
                    <p className="product-price">$550.00</p>
                    <button className="buy-button" onClick={() => alert('Buying Nayeon NA - Mini Album')}>
                        Buy Now
                    </button>
                </div>
                <div className="product-card">
                    <img src={product3} alt="Ready To Be - Twice Album" className="product-image" />
                    <h3 className="product-name">Ready To Be - Twice Album</h3>
                    <p className="product-price">$700.00</p>
                    <button className="buy-button" onClick={() => alert('Buying Ready To Be - Twice Album')}>
                        Buy Now
                    </button>
                </div>
                <div className="product-card">
                    <img src={product4} alt="The Feels - Twice Album" className="product-image" />
                    <h3 className="product-name">The Feels - Twice Album</h3>
                    <p className="product-price">$450.00</p>
                    <button className="buy-button" onClick={() => alert('Buying The Feels - Twice Album')}>
                        Buy Now
                    </button>
                </div>
                <div className="products-section">
            </div>

            {/* Section 2 */}
            <div className="product-card">
                    <img src={product5} alt="Damn - Kendrick Lamar Album" className="product-image" />
                    <h3 className="product-name">Damn - Kendrick Lamar Album</h3>
                    <p className="product-price">$1000.00</p>
                    <button className="buy-button" onClick={() => alert('Buying Damn - Kendrick Lamar Album')}>
                        Buy Now
                    </button>
                </div>
                <div className="product-card">
                    <img src={product6} alt="Utopia - Travis Scott Album" className="product-image" />
                    <h3 className="product-name">Utopia - Travis Scott Album</h3>
                    <p className="product-price">$1500.00</p>
                    <button className="buy-button" onClick={() => alert('Buying Utopia - Travis Scott Album')}>
                        Buy Now
                    </button>
                </div>
                <div className="product-card">
                    <img src={product7} alt="Starboy - The Weeknd Album" className="product-image" />
                    <h3 className="product-name">Starboy - The Weeknd Album</h3>
                    <p className="product-price">$900.00</p>
                    <button className="buy-button" onClick={() => alert('Buying Starboy - The Weeknd Album')}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
