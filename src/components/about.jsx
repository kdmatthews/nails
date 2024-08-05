import React from 'react'
import Header from './header'
import { GiFingernail } from "react-icons/gi";
import './about.css'

function About() {
  return (
     <div className='bcg'>
      <div className='aboutlogo'>
     <h1><GiFingernail /> Nailed It!</h1>
      <h2>Polish Your Style, Perfect Your Look!</h2>
      <p>Welcome to Nailed It, the premier nail salon in the heart of the city where style meets sophistication. At Nailed It, we blend the latest trends with timeless techniques to offer you an unparalleled nail experience. Our expert technicians are passionate about delivering flawless manicures and pedicures in a chic, modern setting. Whether you're looking for a classic polish, an intricate design, or a relaxing spa treatment, we provide exceptional care and attention to detail with every service. Embrace your urban flair and let us help you put your best foot forward—because at Nailed It, perfection is always in the details.</p>
      </div>
     </div>
  )
}

export default About