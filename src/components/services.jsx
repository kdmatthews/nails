import React from 'react'
import Header from './header'
import './services.css'

function Services() {
  return (
    <>
        <Header />
    <main>
      <h1>Services</h1>
    </main>
    <article className='service-boxes'>
      <section className="individual-service">
        <img src={'../public/vnails1.jpg'} alt="" />
        <h2>Manicure</h2>
        <a href="">View Menu</a>
      </section>
      <section className="individual-service">
        <img src={"../public/vnails2.jpg"} alt="" />
        <h2>Pedicure</h2>
        <a href="">View Menu</a>
      </section>
      <section className="individual-service">
        <img src={'../public/vnails3.jpg'} alt="" />
        <h2>Massage</h2>
        <a href="">View Menu</a>
      </section>
      <section className="individual-service">
        <img src={'../public/vnails4.jpg'} alt="" />
        <h2>Full Set</h2>
        <a href="">View Menu</a>
      </section>
      <section className="individual-service">
        <img src={"../public/vnails2.jpg"}  alt="" />
        <h2>Waxing</h2>
        <a href="">View Menu</a>
      </section>
      <section className="individual-service">
        <img src={"../public/vnails2.jpg"} alt="" />
        <h2>Eyelashes</h2>
        <a href="">View Menu</a>
      </section>
    </article>
    </>
  )
}

export default Services