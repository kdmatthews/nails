import React from 'react'
import GalleryScroll from './galleryscroll'


function gallery() {
  return (
    <div className='gallery'>
    <GalleryScroll></GalleryScroll>
    <h1>Gallery</h1>
    <div className='imagegrid'>
        <img src="../vnails1.jpg" alt="" />
        <img src="../vnails2.jpg" alt="" />
        <img src="../vnails11.jpg" alt="" />
        <img src="../vnails3.jpg" alt="" />
        <img src="../vnails4.jpg" alt="" />
        <img src="../vnails5.jpg" alt="" />
        <img src="../vnails6.jpg" alt="" />
        <img src="../vnails7.jpg" alt="" />
        <img src="../vnails8.jpg" alt="" />
        <img src="../vnails9.jpg" alt="" />
        <img src="../vnails10.jpg" alt="" />
        <img src="../vnails3.jpg" alt="" />

    </div>
    </div>
  )
}

export default gallery