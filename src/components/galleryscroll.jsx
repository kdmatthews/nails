import React from 'react'
import Banner from './banner'
import { images } from './data'
import './gallery.css'

function GalleryScroll() {
  return (
    <div className='gallery'>
    <Banner images={images} speed={20000}/>
    <h1>Gallery</h1>



    </div>
  )
}

export default GalleryScroll