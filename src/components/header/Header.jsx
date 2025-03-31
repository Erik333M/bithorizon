import React from 'react'
import "./header.css";
import { useNavigate } from 'react-router-dom';
import { BsPersonPlus } from "react-icons/bs";

function Header() {
    const navigate = useNavigate()
    
  return (
    <div className='header-main'>
      <div className='container'>
        <a className='title' href='/'>
          <h6>THE EXCHANGE</h6>
        </a>
      </div>
      <div>
      {/* <Select className='item' variant='outlined' style={{
                width:100,
                height:40,
                marginRight:15
            }}>
                <MenuItem  value={"ENG"}>ENG</MenuItem>
                <MenuItem  value={"RUS"}>RUS</MenuItem>
            </Select> */}
            <nav className="nav-links">
              <a className='nav-link' href="/about">ABOUT US</a>
              <a className='nav-link' href="/contact">CONTACT</a>
              <a className='nav-link' target='blank' href="https://web.telegram.org/k/#@thexchang">TELEGRAM</a>
              <a className='nav-link' target='blank' href="https://web.whatsapp.com/">WhatSapp</a>
              <a className='nav-link' href="/registration"><BsPersonPlus /></a> 
            </nav>
      </div>
    </div>
  )
}

export default Header
