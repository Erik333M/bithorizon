import React, { useState } from 'react';
import "./header.css";

function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive((prev) => !prev);
    };

    return (
        <div className='header-main'>
            <div className='container'>
            <a className='title' href='/'>
            <img src={require('../../assets/LogoBit.PNG')} alt="Bit Horizon Logo" className="logo" />
        </a>
            </div>
            <div>
                {/* Hamburger Icon */}
                <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                    ☰
                </div>

                {/* Mobile Navigation Links */}
                <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
                    <a className='nav-link' href="/about" onClick={toggleMenu}>ABOUT</a>
                    <a className='nav-link' href="/contact" onClick={toggleMenu}>CONTACT</a>
                    <a className='nav-link' href="/location" onClick={toggleMenu}>LOCATION</a>
                    <a className='nav-link' href="/aml-policy" onClick={toggleMenu}>AML Policy</a>
                    <div className="email">
                      
                     {/* <a className='nav-link' href="mailto:bithorizon@info.ge">EMAIL</a> */}
                    </div>
                </nav>

                {/* Background overlay for closing menu when clicking outside */}
                {menuActive && <div className="menu-overlay" onClick={toggleMenu}></div>}
            </div>
        </div>
    );
}

export default Header;





