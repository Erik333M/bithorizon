import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/location">Location</a>
                </div>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} BitHorizon. All rights reserved.</p>
                    <p>Email: <a href="mailto:info@bithorizon.ge">info@bithorizon.ge</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;