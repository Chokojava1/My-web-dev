import { Link } from 'react-router-dom';
import './ProductDisplay.css'

const ProductDisplay = ({ productID, productName, productPrice, productImage }) => {
    return (
        <div className="product-card">
            <img src={productImage} alt={productName} className="product-image" />
            <h3 className="product-name">{productName}</h3>
            <p className="product-price">{productPrice}</p>
            <Link to={`/product/${productID}`}>
                <button className="buy-button">Buy Now</button>
            </Link>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ProductDisplay;
