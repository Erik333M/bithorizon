// AboutUs.js

import React from "react";
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      
      <section className="about-section">
        <h3>Our Values</h3>
        <p>
          Social responsibility is an important component of our project. We are responsible for the environment and for people in need of help.
          Our mission is to create a better world.
        </p>
      </section>

      <section className="about-section">
        <h3>BITHORIZON: Your Reliable Guide in the World of Crypto</h3>
        <p>
          We have accumulated years of experience as specialists in this field. Our work has validated the safety and reliability of conducting transactions (exchanging Bitcoin, USDT, etc.) with us in the cryptocurrency world. There are minimal fees for transactions, starting at 0%.
        </p>
        <p>
          Our partnership network is extensive, covering <strong>Georgia, UAE, Europe, Armenia, Turkey, and more</strong>.
        </p>
        <p>
          We offer consulting services for clients who are new to the crypto sphere, including:
        </p>
        <ul>
          <li>Digital technologies</li>
          <li>Cryptocurrency capabilities</li>
          <li>Crypto stock markets</li>
          <li>Trading</li>
          <li>Crypto security</li>
        </ul>
        <p>
          Thousands of clients trust us because of our experience and the wide range of services we offer. We have formed strong friendships with many of our clients. <strong>You could be next.</strong>
        </p>
      </section>

      <section className="about-section">
        <h3>Our Services</h3>
        <ul>
          <li>Buy and sell Bitcoin, USDT, and other cryptocurrencies at <strong>profitable rates</strong>.</li>
          <li>Continuous upgrades based on <strong>customer feedback</strong> and industry innovations.</li>
          <li><strong>Extensive experience</strong> in the cryptocurrency field.</li>
          <li>Highest level of security due to our <strong>in-depth industry knowledge</strong>.</li>
          <li><strong>Minimum commission</strong> for transactions.</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>AML Policy</h3>
        <p>
          We strictly adhere to Anti-Money Laundering (AML) policies to ensure transparency and prevent fraudulent activities. Compliance with AML regulations is a core part of our operations to protect our clients and maintain a secure financial environment.
        </p>
      </section>

      <section className="about-section security">
        <h3>About Security</h3>
        <p>
          As the crypto industry progresses, cybercrimes are increasing, and individuals risk being scammed.
        </p>
        <p>
          Scammers often impersonate genuine crypto exchangers by creating fake pages, channels, and content using our name. <strong>We are not an exception.</strong> Always refer to our official contacts listed on the website to verify authenticity.
        </p>
        <p>
          If you need assistance with transactions, reach out to our <strong>support team</strong>. <strong>Avoid sending cryptocurrency in advance.</strong> All transactions are conducted <strong>only at our office</strong>, which is listed in the &lt;Contacts&gt; section.
        </p>
        <h4 className="warning">⚠️ Warning</h4>
        <p>
          We <strong>cannot</strong> be held responsible for any transactions made with scammers impersonating us. Always verify before proceeding.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;


