import React, { useState } from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import './nav.css';
import Logo from './assets/store-logo.png';

const Nav = ({ searchbtn, isLoggedIn, userName, handleLogout }) => {
    const [search, setSearch] = useState();

    return (
        <>
            <div className="nav-container">
                <div className="icon">
                    <FaTruckMoving />
                </div>
                <p>FREE Shipping until January 30, 2025</p>
            </div>
            <div className="main_header">
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='search_box'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search your Product...'
                            autoComplete='off'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={() => searchbtn(search)}>Search</button>
                    </div>
                    <div className='icon'>
                        <div className="account">
                            <div className="user_icon">
                                <FaRegUser />
                            </div>
                            <p>Hello, {isLoggedIn ? userName : 'user'}</p>
                        </div>
                        <div className="second_icon">
                            <Link to="/" className='link'><AiOutlineHeart /></Link>
                            <Link to="/cart" className='link'><BsBagCheck /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="auth">
                        {isLoggedIn ? (
                            <button onClick={handleLogout}><CiLogout /> Logout</button>
                        ) : (
                            <Link to="/login"><button><CiLogin /> Login</button></Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
