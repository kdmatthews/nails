import React from 'react'
import Header from './header'
import './services.css'
import { HashLink } from 'react-router-hash-link'

function Services() {
  return (
    <>
        <Header />
    <main>
      <h1>Services</h1>
    <article className='service-boxes'>
      <section className="individual-service">
        <img src={'../public/vnails1.jpg'} alt="" />
        <h2>Manicure</h2>
        <HashLink to='/services/#manicure'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={"../public/vnails2.jpg"} alt="" />
        <h2>Pedicure</h2>
        <HashLink to='/services/#pedicure'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={'../public/vnails3.jpg'} alt="" />
        <h2>Massage</h2>
        <HashLink to='/services/#massage'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={"../public/vnails2.jpg"}  alt="" />
        <h2>Waxing</h2>
        <HashLink to='/services/#waxing'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={"../public/vnails2.jpg"} alt="" />
        <h2>Eyelashes</h2>
        <HashLink to='/services/#eyelashes'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={'../public/vnails4.jpg'} alt="" />
        <h2>Add-Ons</h2>
        <HashLink to='/services/#full-set'>View Menu</HashLink>
      </section>
    </article>
    <article >


      <section className="service-menu" id='manicure'>
        <div className="service-info">
        <h2>Manicure Services</h2>
        <h4>Classic Manicure - $25</h4>
        <p>A timeless favorite! This treatment includes nail shaping, cuticle care, a relaxing hand massage, and your choice of polish.</p>
        <br />
        <h4>Deluxe Manicure - $35</h4>
        <p>Pamper yourself with our Deluxe service. Enjoy all the benefits of the Classic Manicure plus an exfoliating scrub, a hydrating mask, and a longer hand massage. </p>
        <br />
        <h4>Spa Manicure - $45</h4>
        <p>Indulge in luxury with our Spa Manicure. This treatment includes everything in the Deluxe Manicure, plus a paraffin wax treatment for deep moisturization and a soothing hot towel wrap.</p>
        <br />
        <h4>Gel Manicure - $40</h4>
        <p>Long-lasting and glossy! This manicure includes nail shaping, cuticle care, and a gel polish application that lasts up to two weeks.</p>
        <br />
        <h4>Shellac Manicure - $45</h4>
        <p>Get the best of both worlds with Shellac’s chip-resistant formula and high shine. Includes nail shaping, cuticle care, and Shellac polish application.</p>
        <br />
        <h4>Polish Change - $15</h4>
        <p>Quick and easy! Includes removal of old polish and application of a new color.</p>
        <br />
        <h4>Fench Manicure - $30</h4>
        <p>A classic look with a chic twist. Includes nail shaping, cuticle care, and a traditional French polish application.</p>
        <br />
        <h4>Nail Art Add-On - $10</h4>
        <p>Add a touch of creativity with custom nail art. Price varies based on design complexity.</p>
        <br />
        <h4>Manicure Enhancements</h4>
        <li>Paraffin Wax Treatment - $10</li>
        <li>Hot Stone Massage - $15</li>
        <li>Nail Repair - $5 per nail</li>
        <br />
        </div>
        <div className='service-image'>
          <img src="../public/vnails2.jpg" alt="" />
        </div>
        </section>


        <section className="service-menu2" id='pedicure'>
        <div className="service-info2">
        <h2>Pedicure Services</h2>
        <h4>Classic Pedicure - $30</h4>
        <p>Pamper your feet with our Classic Pedicure. Includes nail trimming, cuticle care, a relaxing foot soak, and your choice of polish.</p>
        <br />
        <h4>Deluxe Pedicure - $40</h4>
        <p>Upgrade to our Deluxe Pedicure for added luxury. Includes everything in the Classic Pedicure plus an exfoliating scrub, a hydrating foot mask, and an extended foot massage.</p>
        <br />
        <h4>Spa Pedicure - $50</h4>
        <p>Indulge in ultimate relaxation with our Spa Pedicure. This includes all the benefits of the Deluxe Pedicure, plus a paraffin wax treatment and a soothing hot towel wrap.</p>
        <br />
        <h4>Gel Pedicure - $45</h4>
        <p>Enjoy long-lasting shine and durability with our Gel Pedicure. Includes nail shaping, cuticle care, and gel polish application that lasts up to two weeks.</p>
        <br />
        <h4>Polish Change - $15</h4>
        <p>Need a quick refresh? Includes removal of old polish and application of a new color.</p>
        <br />
        <h4>Nail Art Add-On - $10+</h4>
        <p>Enhance your pedicure with custom nail art. Price varies based on design complexity.</p>
        </div>
        <div className='service-image2'>
          <img src="../public/vnails2.jpg" alt="" />
        </div>


        </section>
        <section className="service-menu" id='massage'>
        <div className="service-info">
        <h2>Massage Services</h2>
        <h4>Swedish Massage - $70</h4>
            <p>A classic full-body massage that uses gentle techniques to promote relaxation and improve circulation.</p>
            <br />
            <h4>Deep Tissue Massage - $85</h4>
            <p>Focused on deeper layers of muscle and connective tissue to relieve chronic pain and tension.</p>
            <br />
            <h4>Hot Stone Massage - $90</h4>
            <p>Uses heated stones placed on key points of the body to enhance relaxation and ease muscle tension.</p>
              <br />
            <h4>Aromatherapy Massage - $80</h4>
            <p>Incorporates essential oils to promote physical and emotional well-being, customized to your preferences.</p>
            <br />
            <h4>Reflexology - $65</h4>
            <p>Focuses on pressure points in the feet to improve overall health and well-being.</p>
              <br />
            <h4>Couples Massage - $140</h4>
            <p>Enjoy a relaxing massage with a partner in the same room, with side-by-side tables and therapists.</p>
              <br />
            <h4>Pregnancy Massage - $75</h4>
            <p>Specially designed for expectant mothers to alleviate discomfort and promote relaxation during pregnancy.</p>
              <br />
            <h4>30-Minute Quick Massage - $40</h4>
            <p>A brief but effective massage targeting specific areas of tension, perfect for a quick relaxation break.</p>
        </div>
        <div className='service-image'>
          <img src="../public/vnails2.jpg" alt="" />
        </div>
        </section>




        <section className="service-menu2" id='waxing'>
        <div className="service-info2">
        <h2>Waxing Services</h2>
        <h4>Facial Waxing</h4>
        <p>We offer a variety of options for face waxing. Our teqnitions are trained to be as painless and efficient as possible.</p>
        <li>Upper Lip - $20</li>
        <li>Eyebrow Shaping - $20</li>
        <li>Chin - $15</li>
        <li>Cheeks -$25</li>
          <h4>Body Waxing</h4>
          <p>We offer a variety of options for body waxing. Our teqnitions are trained to be as painless and efficient as possible.</p>
          <li>Arms - $40</li>
          <li>Legs - $50</li>
          <li>Back - $50</li>
          <li>Chest - $40</li>
          <li>Stomach - $40</li>
          <li>Bikini - $50</li>
    

        </div>
        <div className='service-image2'>
          <img src="../public/vnails2.jpg" alt="" />
        </div>
        </section>




        <section className="service-menu" id='eyelashes'>
        <div className="service-info">
        <h2>Eyelash Services</h2>
        <p>Stuff about Eyelashes</p>
        </div>
        <div className='service-image'>
          <img src="../public/vnails2.jpg" alt="" />
        </div>
        </section>


        <section className="service-menu2" id='full-set'>
        <div className="service-info2">
        <h2>Additional Services</h2>
        <h4>Foot Reflexology - $30</h4>
        <p>Therapeutic foot massage focusing on pressure points</p>
        <br />
        <h4>Aromatherapy - $5</h4>
        <p>Add a soothing essential oil to your hand massage for extra relaxation.</p>
        <br />
        <h4>Anti-Aging Hand/Foot Treatment - $15</h4>
        <p>Includes a specialized treatment to reduce signs of aging and improve skin texture.</p>
        <br />
        </div>
        <div className='service-image2'>
          <img src="../public/vnails2.jpg" alt="" />
        </div>
        </section>

    </article>
    </main>
    </>
  )
}

export default Services