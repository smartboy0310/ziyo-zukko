import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

import logoPartner from '../../Assets/images/logo_partner.jpg'

const data = [
	{
		id: 1,
		img: logoPartner,
	},
	{
		id: 2,
		img: logoPartner,
	},
	{
		id: 3,
		img: logoPartner,
	},
	{
		id: 4,
		img: logoPartner,
	},
	{
		id: 5,
		img: logoPartner,
	},
	{
		id: 6,
		img: logoPartner,
	},
	{
		id: 7,
		img: logoPartner,
	},
	{
		id: 8,
		img: logoPartner,
	},
];
function HomePartner() {
  return (
    <>
      <section className="home-partner">
         <div className="container">
            <h2 className="home-partner__heading">
               Hamkorlarimiz
            </h2>
            <div className="home-partner__box">
               <Slider
                  autoplay
						autoplaySpeed={3000}
						initialSlide={2}
						infinite
						slidesToShow={5}
               >
                 {
                 data && data?.map((e, i) => (
								<div
									key={i}
									className="home-partner__slider"
									
								>
									<a className="home-partner__link" href="https://iiau.uz" rel="noreferrer" >
                           <Image
										data-img-id={e.id}
										className="partner__img"
										src={logoPartner}
										alt="Photo gallery"
										width={200}
										height={200}
									/>
                           </a>
                           <h3 className="partner__name">
                              Hamkornomi 
                           </h3>
								</div>
							))}
               </Slider>
            </div>
         </div>
      </section>
    </>
  )
}

export default HomePartner
