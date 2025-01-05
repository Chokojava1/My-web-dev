import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login'; 
import ProductDetails from './ProductDetails'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:productID" element={<ProductDetails />} /> 
            </Routes>
        </Router>
    );
};

export default App;
