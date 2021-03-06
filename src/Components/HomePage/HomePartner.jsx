import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import logoPartner from '../../Assets/images/logo_partner.jpg';

const data = [
	{
		id: 1,
		link: 'https://iiau.uz',
		img: logoPartner,
	},
	{
		id: 2,
		link: 'https://iiau.uz',
		img: 'https://via.placeholder.com/300X400',
	},
	{
		id: 3,
		link: 'https://iiau.uz',
		img: logoPartner,
	},
	{
		id: 4,
		link: 'https://iiau.uz',
		img: 'https://via.placeholder.com/300X400',
	},
	{
		id: 5,
		link: 'https://iiau.uz',
		img: logoPartner,
	},
	{
		id: 6,
		link: 'https://iiau.uz',
		img: 'https://via.placeholder.com/300X400',
	},
	{
		id: 7,
		link: 'https://iiau.uz',
		img: logoPartner,
	},
	{
		id: 8,
		link: 'https://iiau.uz',
		img: 'https://via.placeholder.com/300X400',
	},
];
function HomePartner({ localization }) {
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`;
	};
	return (
		<>
			<section className="home-partner">
				<div className="container">
					<h2 className="home-partner__heading">
						{localization.title}
					</h2>
					<div className="home-partner__box">
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
										className="home-partner__slider"
									>
										<a
											className="home-partner__link"
											href={e.link}
											target="example" rel="noopener"
										>
											<Image
												loader={myLoader}
												data-img-id={e.id}
												className="partner__img"
												src={e.img}
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
	);
}

export default HomePartner;
