import React from 'react'
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { PiTelegramLogoThin } from 'react-icons/pi'
import { TbLicense } from 'react-icons/tb'
import Card from '../Card/Card'
import CryptoConverter from '../CryptoTable/CryptoConverter'
import Table from '../Table/Table'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="hero-section">
        <h1 className='home-title'>Welcome to Bit Horizon</h1>
        <p className='home-description'>
          Where Crypto Trading Meets Speed & Security
          Buy, sell, and swap digital assets instantly on a powerful, secure exchange built for modern traders.
          </p>
      </div>
      <Table/>
      <CryptoConverter/>
      <div className="components-section">
        <Card
          title="About Us"
          text="At YourCryptoExchange, we aim to revolutionize the way people interact with digital currencies. Our team is dedicated to providing a secure and user-friendly platform for trading cryptocurrencies. Our mission is to empower users to take control of their financial future."
          logo={<TbLicense size={200}/>}
          linkUrl="/about"
          reverse={false} 
        />

        <Card
          title="Contact Us"
          text="Need assistance? Our support team is here to help you 24/7. Whether you have questions about trading, security, or any other inquiries, we are just a message away. We value our users and strive to offer the best customer experience."
          logo={<PiTelegramLogoThin size={200}/>}
          linkUrl="/contact"
          reverse={true}  
        />

        <Card
          title="Crypto News"
          text="Stay ahead of the curve with the latest cryptocurrency news. We provide up-to-date insights into market trends, new developments, and emerging technologies. Follow our news section to keep yourself informed about the rapidly evolving world of crypto."
          logo={<MdOutlineCurrencyExchange size={200}/>}
          linkUrl="/crypto-news"
          reverse={false}
        />
      </div>
    </div>
  )
}

export default Home
