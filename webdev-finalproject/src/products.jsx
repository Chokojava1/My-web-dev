import React from "react";
import Productdetail from "./productdetail";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './products.css';

const Product = ({ product, setProduct, detail, view, close, setClose, addtocart }) => {

    const filterProduct = (product) => {
        const update = Productdetail.filter((x) => {
            return x.Cat === product;
        });
        setProduct(update);
    };

    const allProducts = () => {
        setProduct(Productdetail);
    };

    return (
        <>
            {/* Modal for Product Details */}
            {close &&
                <div className="product_detail">
                    <div className="container">
                        <button onClick={() => setClose(false)} className="close-btn">
                            <AiOutlineCloseCircle />
                        </button>
                        {detail.map((curElm) => {
                            return (
                                <div className="productbox" key={curElm.id}>
                                    <div className="img-box">
                                        <img src={curElm.Img} alt={curElm.Title} />
                                    </div>
                                    <div className="detail">
                                        <h4>{curElm.Cat}</h4>
                                        <h2>{curElm.Title}</h2>
                                        <p>Description of the product goes here...</p>
                                        <h3>{curElm.Price}</h3>
                                        <button>Add To Cart</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            }

            {/* Products Section */}
            <div className={`products ${close ? 'modal-open' : ''}`}>
                <h2># Products</h2>
                <p>Home . products</p>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => allProducts()}>All Products</li>
                                <li onClick={() => filterProduct("Console")}>Console</li>
                                <li onClick={() => filterProduct("Disc")}>Disc</li>
                                <li onClick={() => filterProduct("Peripherals")}>Peripherals</li>
                                <li onClick={() => filterProduct("Vouchers")}>Vouchers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="productbox">
                        <div className="contant">
                            {product.map((curElm) => {
                                return (
                                    <div className="box" key={curElm.id}>
                                        <div className="img_box">
                                            <img src={curElm.Img} alt={curElm.Title} />
                                            {!close && (
                                                <div className="icon">
                                                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                                    <li onClick={() => view(curElm)}><BsEye /></li>
                                                    <li><AiOutlineHeart /></li>
                                                </div>
                                            )}
                                        </div>
                                        <div className="detail">
                                            <p>{curElm.Cat}</p>
                                            <h3>{curElm.Title}</h3>
                                            <h4>{curElm.Price}</h4>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
