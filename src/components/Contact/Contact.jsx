import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-item">
                <span>Telegram:</span> <a href="https://t.me/BitHorizon" target="_blank" rel="noopener noreferrer">@bitHorizon_ge</a>
            </div>
            <div className="contact-item">
                <span>Phone:</span> <a href="tel:+112223456">+1 122 234 56</a>
            </div>
            <div className="contact-item">
                <span>WhatsApp:</span> <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="contact-item">
                <span>Email:</span> <a href="mailto:info@bithorizon.ge">info@bithorizon.ge</a>
            </div>
        </div>
    );
}

export default Contact;