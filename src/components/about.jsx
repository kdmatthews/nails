import React from 'react'
import Header from './header'
import { GiFingernail } from "react-icons/gi";
import './about.css'

function About() {
  return (
     <div className='about-container'>
    <div className='aboutlogo'>
      <div className='about-words'>
        <div className='headings'>
        <h2>About Us</h2>
        </div>
    <p>Welcome to Nailed It, the premier nail salon in the heart of the city where style meets sophistication. At Nailed It, we blend the latest trends with timeless techniques to offer you an unparalleled nail experience. Our expert technicians are passionate about delivering flawless manicures and pedicures in a chic, modern setting. Embrace your urban flair and let us help you put your best foot forward—because at Nailed It, perfection is always in the details.</p> 
    <a href="https://squareup.com/us/en/campaign/appointments-online-booking-site-v1?device=c&gad_source=1&gclid=CjwKCAjwk8e1BhALEiwAc8MHiHkTECYpijYYJLHQoIDeewuBh_SLDMmQ1ZKj_3AenJTUy8YcT58mDBoC6CMQAvD_BwE&gclsrc=aw.ds&kw=booking+system&kwid=p72292809076&matchtype=b&pcrid=691050047896&pdv=c&pkw=booking+system&pmt=b&pub=GOOGLE">Book Now</a>
    </div>
    <img src="./logonobuff.png" alt="" />
      </div>
     </div>
  )
}

export default About