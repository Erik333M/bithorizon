import React from 'react'
import './home.css'
import Card from '../Card/Card'
import CryptoTable from '../CryptoTable/CryptoTable'
import { PiTelegramLogoThin } from 'react-icons/pi'
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { TbLicense } from 'react-icons/tb'
import Table from '../Table/Table'

function Home() {
  return (
    <div className='home'>
      <div className="hero-section">
        <h1>WELCOME TO BIT HORIZON</h1>
        <p>Explore the Future of Finance with Secure and Fast Crypto Trading</p>
      </div>
      <Table/>
      <CryptoTable/>
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
