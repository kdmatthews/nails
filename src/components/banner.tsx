import React from 'react'
import './banner.css'
interface BannerProps {
    images:{
        src: string;
        name: string;
    } [];
    speed: number;
}



export function ImageSection({ images, speed }: BannerProps) {
    const imagesStyle = {
      animation: `swipe ${speed}ms linear infinite`,
    };

    return (
        <div className='images' style={imagesStyle}>
          {images.map(({ src, name }) => (
            <div className='image'>
              <img src={src} alt={name} />
            </div>
          ))}
        </div>
      );
    }

    export default function Banner({ images, speed }: BannerProps) {
      return (
        <div className='banner-wrapper'>
          <div className='wrapper'>
            <ImageSection images={images} speed={speed} />
            <ImageSection images={images} speed={speed} />
          </div>
        </div>
      );
    }
