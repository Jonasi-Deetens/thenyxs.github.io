import React from "react";

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="container">
            <div className="pb-lg-5 row align-middle">
                <div className="col-lg-3 text-center">
                    <Link to="/" className="dropdown-item" href="#"><img src={logo} className="Brand-logo" alt="logo" /></Link>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light col-lg-9">
                    <div className="d-none d-lg-block"></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">NEW</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">PRODUCTEN</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">MIRAVAL</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">OVER ONS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbar