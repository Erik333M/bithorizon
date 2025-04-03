// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Assuming you want to add some custom styles

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Crypto Exchange</h1>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>THE EXCHANGE</strong>, a secure and user-friendly
            platform where you can buy, sell, and trade cryptocurrencies. Our
            mission is to make digital asset trading accessible to everyone
            while ensuring the highest levels of security, transparency, and
            support.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where cryptocurrencies are easily accessible to
            everyone, where financial freedom and inclusion become the norm. Our
            team is committed to revolutionizing the financial sector by
            providing a seamless and transparent experience for traders and
            investors.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Security:</strong> We prioritize the safety of our users’
              funds and personal data using cutting-edge security measures.
            </li>
            <li>
              <strong>Transparency:</strong> Our platform operates with full
              transparency, allowing users to make informed decisions.
            </li>
            <li>
              <strong>Innovation:</strong> We constantly evolve to provide our
              users with the latest technology and trading tools.
            </li>
            <li>
              <strong>Support:</strong> Our dedicated team is always ready to
              assist you 24/7 with any questions or concerns.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            <strong color="#06357e">THE EXCHANGE</strong> is more than just a
            trading platform; it’s a community for crypto enthusiasts,
            investors, and traders. Whether you're a seasoned professional or
            just getting started, we offer the tools, resources, and support to
            help you succeed.
          </p>
          <ul>
            <li>Competitive trading fees</li>
            <li>Wide variety of crypto assets</li>
            <li>Advanced charting tools and features</li>
            <li>Secure storage solutions for your digital assets</li>
            <li>Comprehensive educational resources</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Join Us Today</h2>
          <p>
            Be a part of the financial revolution. Create an account, start
            trading, and take your first step towards the future of finance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
