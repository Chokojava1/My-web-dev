import React from "react";
import Logo from './assets/store-logo.png';
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoYoutube } from "react-icons/bi";
import './footer.css';

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src={Logo} alt='logo'></img>
                    </div>
                    <div className="detail">
                        <p>Your one-stop shop for gaming essentials.</p>
                        <div className="icon">
                            <li><RiFacebookFill /></li>
                            <li><AiOutlineInstagram /></li>
                            <li><FaXTwitter /></li>
                            <li><BiLogoYoutube  /></li>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;