import React from 'react'
import './footer.css'
import { FaFacebook, FaTiktok, FaInstagram, FaYelp, FaPinterest } from "react-icons/fa6";






function Footer() {
  return (
    <div className='footer-container'>
        <div className='logo-info'>
            <img src="../logonobuff.png" alt="" />

        </div>
        <div className='links'>
        <a href="https://www.facebook.com/"><FaFacebook size={32}/></a>
        <a href="https://www.instagram.com/"><FaInstagram size={32}/></a>
        <a href="https://www.yelp.com/"><FaYelp size={32}/></a>
        <a href="https://www.pinterest.com/"><FaPinterest size={32}/></a>
        <a href="https://www.tiktok.com/"><FaTiktok size={32}/></a>

        </div>
        <div className='contact-info'>contact info here</div>

    </div>
  )
}

export default Footer