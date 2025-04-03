import { useState } from 'react';
import { MdOutlineCurrencyExchange } from 'react-icons/md';
import { PiTelegramLogoThin } from 'react-icons/pi';
import { TbLicense } from 'react-icons/tb';
import { Card } from '../Card';
import { CurrencyConverter } from '../CurrencyConverter';
import { Table } from '../Table';
import './home.css';

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleConvert = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home">
      <div className="hero-section">
        <h1>WELCOME TO THE EXCHANGE</h1>
        <p>Explore the Future of Finance with Secure and Fast Crypto Trading</p>
      </div>

      {/* Crypto Table & Currency Converter Side by Side */}
      <div className="crypto-section">
        <Table />
        <CurrencyConverter />
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <p>Conversion Successful!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <div className="components-section">
        <Card
          title="About Us"
          text="At YourCryptoExchange, we aim to revolutionize the way people interact with digital currencies. Our team is dedicated to providing a secure and user-friendly platform for trading cryptocurrencies."
          logo={<TbLicense size={200} />}
          linkUrl="/about"
          reverse={false}
        />

        <Card
          title="Contact Us"
          text="Need assistance? Our support team is here to help you 24/7. We value our users and strive to offer the best customer experience."
          logo={<PiTelegramLogoThin size={200} />}
          linkUrl="/contact"
          reverse={true}
        />

        <Card
          title="Crypto News"
          text="Stay ahead of the curve with the latest cryptocurrency news. Follow our news section to keep yourself informed about the rapidly evolving world of crypto."
          logo={<MdOutlineCurrencyExchange size={200} />}
          linkUrl="/crypto-news"
          reverse={false}
        />
      </div>
    </div>
  );
}

export default Home;
