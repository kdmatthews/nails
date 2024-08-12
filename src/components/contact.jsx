import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className='contact'>
      <form action="">
        <div className='headings'>
        <h1>Contact Us</h1>
        </div>
        <div className='form-field'>
        <div className='input-box'>
          <input type="text" className='field' placeholder='Name' required />
          <div className='input-box'></div>
        </div>
        <div className='input-box'>
          <input type="email" className='field' placeholder='Email' required />
        </div>
        <div className='input-box'>
          <textarea placeholder='Message' className='field-message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact