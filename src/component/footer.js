import React from 'react';
import ScrollToTop from '../navigation/scrollToTop';

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item" ><Link to="/home" className="nav-link px-2 text-muted" href="#">Home</Link></li>
                <li className="nav-item" ><Link to="/about" className="nav-link px-2 text-muted" href="#">About us</Link></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            </ul>
            <p className="text-center text-muted">© 2021 Company, Inc</p>
            
            <ScrollToTop />
        </div>
    );
};
export default Footer;