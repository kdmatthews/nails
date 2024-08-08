import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className='contact'>
      <form action="">
        <h1>Contact Us</h1>
        <div className='input-box'>
          <label htmlFor="">Full Name</label>
          <input type="text" className='field' placeholder='Enter your name' required />
          <div className='input-box'></div>
        </div>
        <div className='input-box'>
          <label htmlFor="">Email Adress</label>
          <input type="email" className='field' placeholder='Enter your email' required />
        </div>
        <div className='input-box'>
          <label htmlFor="">Your Message</label>
          <textarea placeholder='Enter your message' className='field-message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact