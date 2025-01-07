import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Product from './products';
import Cart from "./cart";
import Contact from "./contact";
import Login from './Login';

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
    return(
        <>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path="/" element={<Home  detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
            <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/> }/>
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/> 
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
} 

export default Rout;