import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from 'pages/Header';
import Footer from 'pages/Footer';
import Petmunity from 'pages/Petmunity';

export const Routers = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/petmunity' element={<Petmunity />}></Route>
            </Routes>
            
        </Router>
    );
}