import Image from 'next/image'
import React, { useState } from 'react'

import galleryImg from '../../Assets/images/gallery_pic.png'
import GalleryBox from './GalleryBox'
import GalleryVideo from './GalleryVideo'

function GalleryInfo() {
   
  return (
    <>
      <section className="gallery-info">
      <div className="contact__top"></div>
         <div className="container">
         <h2 className="gallery-info__heading">Fotogalereya</h2>
         <div className="gallery-info__box">
						<div className="gallery-info__img__box">
                  <Image
							className="gallery-info__image"
							src={galleryImg}
							width={400}
							height={350}
                     objectFit='contain'
						/>
                  </div>
						<ul className="gallery-info__list">
							<li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           Darslar va sinf xonalar
                        </span>
							</li>
							<li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           Bayram va tadbirlar
                        </span>
							</li>
							<li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           Turli musobaqa va oʻyinlar
                        </span>
							</li>
                     <li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           Hamma rasmlar
                        </span>
							</li>
						</ul>
					</div>
               <GalleryBox />
               <GalleryVideo />
               
         </div>
      </section>
    </>
  )
}

export default GalleryInfo
