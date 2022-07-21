import Image from 'next/image'
import React, { useState } from 'react'

import galleryImg from '../../Assets/images/gallery_pic.png'
import GalleryBox from './GalleryBox'
import GalleryVideo from './GalleryVideo'

function GalleryInfo({ localization, photoLoc, videoLoc }) {
   
  return (
    <>
      <section className="gallery-info">
      <div className="contact__top"></div>
         <div className="container">
         <h2 className="gallery-info__heading">{ localization.title }</h2>
         <div className="gallery-info__box">
						<div className="gallery-info__img__box">
                  <Image
							className="gallery-info__image"
							src={galleryImg}
                     alt='Gallery info image'
							width={400}
							height={350}
                     objectFit='contain'
						/>
                  </div>
						<ul className="gallery-info__list">
							<li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           { localization.one }
                        </span>
							</li>
							<li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           { localization.two }
                        </span>
							</li>
							<li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           { localization.three }
                        </span>
							</li>
                     <li className="gallery-info__item">
                        <span className='gallery-info__title'>
                           { localization.four }
                        </span>
							</li>
						</ul>
					</div>
               <GalleryBox langTitle = { photoLoc } />
               <GalleryVideo langTitle = { videoLoc }/>
               
         </div>
      </section>
    </>
  )
}

export default GalleryInfo
