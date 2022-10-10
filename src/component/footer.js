import React from 'react';

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li><Link to="/home" className="nav-item nav-link px-2 text-muted" href="#">Home</Link></li>
            <li><Link to="/about" className="nav-item nav-link px-2 text-muted" href="#">About us</Link></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            </ul>
            <p className="text-center text-muted">© 2021 Company, Inc</p>
        </div>
    );
};
export default Footer;