import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Homepage from './Homepage';
import Collection from './Collection';
import AboutUs from './AboutUs';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
