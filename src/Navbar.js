import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-blood-red">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">The Messerschmidt Foundation</a>
                    <div className="d-flex" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/collection" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Collection
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/artworks" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    Artworks
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;