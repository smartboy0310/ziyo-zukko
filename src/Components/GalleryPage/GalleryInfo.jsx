import Image from 'next/image'
import React, { useState } from 'react'

import galleryImg from '../../Assets/images/gallery_pic.png'
import GalleryBox from './GalleryBox'

function GalleryInfo() {
   
  return (
    <>
      <section className="gallery-info">
      <div className="gallery__top"></div>
         <div className="container">
         <h2 className="gallery-info__heading">Fotogalereya</h2>
         <div className="gallery-info__box">
						<Image
							className="gallery-info__image"
							src={galleryImg}
							width={400}
							height={350}
                     objectFit='contain'
						/>
						<ul className="gallery-info__list">
							<li className="gallery-info__item">
                        <span className='gallery__phone__number'>
                           Darslar va sinf xonalar
                        </span>
							</li>
							<li className="gallery-info__item">
                        <span className='gallery__phone__number'>
                           Bayram va tadbirlar
                        </span>
							</li>
							<li className="gallery-info__item">
                        <span className='gallery__phone__number'>
                           Turli musobaqa va oʻyinlar
                        </span>
							</li>
                     <li className="gallery-info__item">
                        <span className='gallery__phone__number'>
                           Hamma rasmlar
                        </span>
							</li>
						</ul>
					</div>
               <GalleryBox />
               
         </div>
      </section>
    </>
  )
}

export default GalleryInfo
