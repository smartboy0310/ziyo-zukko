import Image from 'next/image'
import React from 'react'

import cloud from '../../Assets/images/cloud.png' 

function HomeAbout() {
  return (
    <section className="homeabout">
      <div className="container">
        <div className="homeabout__top">
          <Image 
            className='top__cloud'
            src={cloud}
            alt = 'Cloud background'
          />
        </div>
        <div className="homeabout__info">
          <h2 className="homeabout__heading">
            Biz haqimizda qisqacha
          </h2>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout

