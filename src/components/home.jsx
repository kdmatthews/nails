import React from 'react'
import Services from './services'
import GalleryScroll from './galleryscroll'
import About from './about'
import Contact from './contact'


function Home() {
  return (
    <div>
      <GalleryScroll />
      <Services />
      <Contact />
</div>

  )
}

export default Home