import React from 'react'
import './footer.css'
import { FaFacebook, FaTiktok, FaInstagram, FaYelp, FaPinterest } from "react-icons/fa6";
import SimpleMap from './map';






function Footer() {
  return (


    <div className='footer-container'>
      <div className='footer-left'>
      <div className='logo-info'>
            <img src="../logonobuff.png" alt="" />
        </div>
        <div><h3>Follow Us</h3></div>
        <div className='links'>

        <a href="https://www.facebook.com/"><FaFacebook size={32}/></a>
        <a href="https://www.instagram.com/"><FaInstagram size={32}/></a>
        <a href="https://www.yelp.com/"><FaYelp size={32}/></a>
        <a href="https://www.pinterest.com/"><FaPinterest size={32}/></a>
        <a href="https://www.tiktok.com/"><FaTiktok size={32}/></a>
        </div>
        </div>


        <div className='footer-middle'>
        <div className='contact-info'>
        <h3>Contact Us</h3>
          <p>123 WestNorth Road <br/> Tampa, Fl 12345</p>
          <p>(123)456-7891</p>
          <p>nailedit123456@yahoo.com</p>
          <br />
        <h3>Business Hours</h3>
        <p>Mon-Thurs: 10AM - 7:30PM</p>
        <p>Fri-Sat: 9:30AM - 7PM</p>
        <p>Sun: 12PM - 6PM</p>
        </div>
        </div>

        <div className='footer-right'>
        <div className='mymap'>
          <SimpleMap></SimpleMap>
        </div>
        </div>

    </div>

  )
}

export default Footer