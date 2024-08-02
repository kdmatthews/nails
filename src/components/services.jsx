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
        <img src={"../public/pedicure.jpg"} alt="" />
        <h2>Pedicure</h2>
        <HashLink to='/services/#pedicure'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={'../public/massage.jpg'} alt="" />
        <h2>Massage</h2>
        <HashLink to='/services/#massage'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={"../public/waxing.jpg"}  alt="" />
        <h2>Waxing</h2>
        <HashLink to='/services/#waxing'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={"../public/eyelash.jpg"} alt="" />
        <h2>Eyelashes</h2>
        <HashLink to='/services/#eyelashes'>View Menu</HashLink>
      </section>
      <section className="individual-service">
        <img src={'../public/addon.jpg'} alt="" />
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
          <img src="../public/manicureservice.jpg" alt="" />
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
          <img src="../public/pedicureservice.jpg" alt="" />
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
          <img src="../public/massageservice.jpg" alt="" />
        </div>
        </section>




        <section className="service-menu2" id='waxing'>
        <div className="service-info2">
        <h2>Waxing Services</h2>
          <h4>Eyebrow Wax - $15</h4>
          <p>Shape and define your brows with precision. This service includes trimming and sculpting to enhance your natural brow shape and ensure a clean, polished look.</p>
          <br />
          <h4>Upper Lip Wax - $12</h4>
          <p>Remove unwanted hair from the upper lip area. This quick and effective treatment leaves the skin smooth and free of fine, pesky hairs.</p>
          <br />
          <h4>Chin Wax - $12</h4>
          <p>Target and eliminate unwanted hair on the chin area. This service helps achieve a smooth, even look and is ideal for those struggling with chin hair.</p> <br />
          <h4>Full Face Wax - $40</h4>
          <p>Includes waxing of the eyebrows, upper lip, chin, and sideburns. Achieve a flawless finish with this comprehensive treatment that leaves your entire face smooth and hair-free.</p> <br />
          <h4>Underarm Wax - $20</h4>
          <p>Keep your underarms smooth and free of hair with this efficient waxing service. Perfect for long-lasting results and reduced hair regrowth.</p><br />
          <h4>Bikini Wax - $30</h4>
          <p>A tidy and precise waxing service for the bikini area. Choose this option for a clean and neat look that removes hair outside the swimsuit line.</p><br />
          <h4>Leg Wax - $60</h4>
          <p>Enjoy silky smooth legs with a full leg waxing treatment. This service includes the entire leg from the thigh to the ankle, ideal for a sleek, hair-free look.</p><br />
          </div>
        <div className='service-image2'>
          <img src="../public/waxingservice.jpg" alt="" />
        </div>
        </section>




        <section className="service-menu" id='eyelashes'>
        <div className="service-info">
        <h2>Eyelash Services</h2>
        <h4>Classic Eyelash Extensions - $120</h4>
        <p>Enhance your natural lashes with a one-to-one extension technique. Each individual lash is meticulously applied to your natural lashes, creating a subtle, elegant look that adds length and definition.</p>
        <br />
        <h4>Volume Eyelash Extension - $150</h4>
        <p>Achieve a fuller, more dramatic look with this technique. Multiple lightweight extensions are applied to each natural lash, creating a voluminous, glamorous effect perfect for special occasions or a bold everyday look.</p>
        <br />
        <h4>Hybrid Eyelash Extensions - $135</h4>
        <p>A blend of classic and volume techniques. Enjoy the best of both worlds with a mix of individual and voluminous lashes that provide a balanced, textured look with added fullness and length.</p>
        <br />
        <h4>Mega Volume Eyelash Extensions - $180</h4>
        <p>For those who desire the ultimate in drama and density. Ultra-fine extensions are applied in multiple layers to each natural lash, creating a full, lush effect with maximum volume and a striking appearance.</p>
        <br />
        <h4>Eyelash Lift and Tint - $80</h4>
        <p>Lift and curl your natural lashes with a semi-permanent treatment that opens up your eyes and adds definition. Includes a tinting service to darken your lashes, giving them a fuller look without extensions.</p>
        <br />
        <h4>Lash Removal - $30</h4>
        <p>Professional removal of eyelash extensions to ensure your natural lashes are not damaged. Includes a gentle, nourishing treatment to restore and condition your natural lashes.</p>
        <br />
        </div>
        <div className='service-image'>
          <img src="../public/eyelashservice.jpg" alt="" />
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
        <h4>Hydrating Facial Mask - $20</h4>
        <p>A deeply hydrating mask applied to your face during any facial service, leaving your skin plump and refreshed.</p><br />
        <h4>Eye Treatment - $25</h4>
        <p>Targeted treatment for the delicate under-eye area to reduce puffiness, dark circles, and fine lines.</p><br />
        <h4>Makeup Application - $50</h4>
        <p>Professional makeup application for a flawless look, whether for a special occasion or just a touch of glamour.</p><br />
        </div>
        <div className='service-image2'>
          <img src="../public/additionalservice.jpg" alt="" />
        </div>
        </section>

    </article>
    </main>
    </>
  )
}

export default Services