import React from 'react'
import Services from './services'
import GalleryScroll from './galleryscroll'
import About from './about'
import Contact from './contact'


function Home() {
  return (
    <div>
      <GalleryScroll />
      <About />
      <Services />
      <Contact />
    <p>Home</p></div>

  )
}

export default Home