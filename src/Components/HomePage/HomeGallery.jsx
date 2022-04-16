import Image from 'next/image'
import React, { useState } from 'react'
const data = [
   'https://via.placeholder.com/301X350',
   'https://via.placeholder.com/302X350',
   'https://via.placeholder.com/303X350',
   'https://via.placeholder.com/304X350',
   'https://via.placeholder.com/305X350',
   'https://via.placeholder.com/306X350',
   'https://via.placeholder.com/307X350',
   'https://via.placeholder.com/308X350',
   'https://via.placeholder.com/309X350',
   'https://via.placeholder.com/310X350',
   'https://via.placeholder.com/311X350',
   'https://via.placeholder.com/312X350',
   'https://via.placeholder.com/313X350',
   'https://via.placeholder.com/314X350',
   'https://via.placeholder.com/315X350',
   'https://via.placeholder.com/316X350',
]

function HomeGallery() {
   const [indexImg, setIndexImg] = useState(0)
   const [indexImgOne, setIndexImgOne] = useState(0)
   const [indexImgTwo, setIndexImgTwo] = useState(1)
   const [indexImgThree, setIndexImgThree] = useState(2)
   const [indexImgFour, setIndexImgFour] = useState(3)

   const sizeImg = data.length - 1
   const next = () => {
      if (indexImgOne == sizeImg) {
         setIndexImg(0)
      } else {
         setIndexImg(indexImg + 1)
      }
   }
   const back = () => {
      if (indexImg == 0) {
         setIndexImg(sizeImg)
      } else {
         setIndexImg(indexImg - 1)
      }
   }

   const slider = setTimeout(() => {
      if (indexImgOne == sizeImg) {
         setIndexImgOne(0)
      } else {
         setIndexImgOne(indexImgOne + 1)
      }
      if (indexImgTwo == sizeImg) {
         setIndexImgTwo(0)
      } else {
         setIndexImgTwo(indexImgTwo + 1)
      }
      if (indexImgThree == sizeImg) {
         setIndexImgThree(0)
      } else {
         setIndexImgThree(indexImgThree + 1)
      }
      if (indexImgFour == sizeImg) {
         setIndexImgFour(0)
      } else {
         setIndexImgFour(indexImgFour + 1)
      }

   }, 3000)

   setInterval(() => {
      slider
   }, 5000);
   return (
      <section className="home-gallery">
         <div className="container">
            <h2 className="home-gallery__heading">
               Bizning foto galereyamiz
            </h2>
            <div className="home-gallery__box">

               <div className="home-gallery__img">
                  <img
                     className="gallery__img"
                     src={data[indexImgOne]}
                     alt="Photo gallery"
                     width={250}
                     height={300}
                  />
               </div>
               <div className="home-gallery__img">
                  <img
                     className="gallery__img"
                     src={data[indexImgTwo]}
                     alt="Photo gallery"
                     width={250}
                     height={300}
                  />
               </div>  <div className="home-gallery__img">
                  <img
                     className="gallery__img"
                     src={data[indexImgThree]}
                     alt="Photo gallery"
                     width={250}
                     height={300}
                  />
               </div>  <div className="home-gallery__img">
                  <img
                     className="gallery__img"
                     src={data[indexImgFour]}
                     alt="Photo gallery"
                     width={250}
                     height={300}
                  />
               </div>


            </div>

            <button className="home_all-btn">Koʻroq koʻrish</button>
            {/* <div className="modal">
               <div className="gallery__back__btn">
                  <svg onClick={back} width="56" height="69" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g filter="url(#a)">
                        <path d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z" fill="#B4B4B4" /></g>
                     <path d="m24 40 9-9-9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <defs>
                        <filter id="a" x="0" y="0" width="56" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
                           <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                           <feOffset dy="7" />
                           <feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
                           <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_38_217" />
                           <feBlend in="SourceGraphic" in2="effect1_dropShadow_38_217" result="shape" />
                        </filter>
                     </defs>
                  </svg>
               </div>

               <div className="gallery__next__btn">
                  <svg onClick={next} width="56" height="69" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g filter="url(#a)">
                        <path d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z" fill="#B4B4B4" /></g>
                     <path d="m24 40 9-9-9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <defs>
                        <filter id="a" x="0" y="0" width="56" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
                           <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                           <feOffset dy="7" />
                           <feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
                           <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_38_217" />
                           <feBlend in="SourceGraphic" in2="effect1_dropShadow_38_217" result="shape" />
                        </filter>
                     </defs>
                  </svg>
               </div>
            </div> */}

         </div>
      </section>
   )
}

export default HomeGallery
