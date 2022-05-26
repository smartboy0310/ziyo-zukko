import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import logoPartner from '../../Assets/images/logo_partner.jpg';

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
function NewsSlider() {
	return (
		<>
			<section className="news-slider">
				<div className="container">
					<h2 className="news-slider__heading">Barcha Yangiliklar</h2>
					<div className="news-slider__box">
						<Slider
							autoplay
							autoplaySpeed={3000}
							initialSlide={2}
							infinite
							slidesToShow={5}
						>
							{data &&
								data?.map((e, i) => (
									<div
										key={i}
										className="news-slider__slider"
									>
										<Link href='/news/single'>
											<a className="news-slider__link">
												<Image
													data-img-id={e.id}
													className="news-slider"
													src={logoPartner}
													alt="single news pic"
													width={200}
													height={200}
												/>
											
											<h3 className="news-slider">
												Hamkornomi
											</h3>
                                 </a>
										</Link>
									</div>
								))}
						</Slider>
					</div>
				</div>
			</section>
		</>
	);
}

export default NewsSlider;
