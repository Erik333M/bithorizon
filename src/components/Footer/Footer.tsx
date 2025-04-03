import React from 'react';
import './footer.css';
import { PiTelegramLogoThin } from 'react-icons/pi';
import { MdOutlineCurrencyExchange } from 'react-icons/md';
import { TbLicense } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <TbLicense size={40} className="footer-icon" />
          <h4>About Us</h4>
          <p>Learn more about our mission and values.</p>
        </div>

        <div className="footer-section">
          <MdOutlineCurrencyExchange size={40} className="footer-icon" />
          <h4>Services</h4>
          <p>Explore our currency exchange services.</p>
        </div>

        <div className="footer-section">
          <PiTelegramLogoThin size={40} className="footer-icon" />
          <h4>Contact Us</h4>
          <p>Get in touch with our support team.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} YourCryptoExchange. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
