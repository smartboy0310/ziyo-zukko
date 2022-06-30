import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slideImg1 from '../../Assets/images/direktor.jpg'
import slideImg2 from '../../Assets/images/form_kid.png'
import slideImg3 from '../../Assets/images/home_kid.png'
import slideImg4 from '../../Assets/images/home_girl.png'
import slideImg5 from '../../Assets/images/direktor.jpg'
import slideImg6 from '../../Assets/images/form_kid.png'
import slideImg7 from '../../Assets/images/home_kid.png'
import slideImg8 from '../../Assets/images/home_girl.png'
import closeImg from '../../Assets/images/close_btn.svg';

const data = [
	{
		id: 1,
		img: slideImg1,
	},
	{
		id: 2,
		img: slideImg1,
	},
	{
		id: 3,
		img: slideImg1,
	},
	{
		id: 4,
		img: slideImg1,
	},
	{
		id: 5,
		img: slideImg1,
	},
	{
		id: 6,
		img: slideImg1,
	},
	{
		id: 7,
		img: slideImg1,
	},
	{
		id: 8,
		img: slideImg1,
	},
];

function HomeGallery({ localization }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [indexImg, setIndexImg] = useState(0);
	const sizeImg = data.length - 1;

	const next = () => {
		if (indexImg == sizeImg) {
			setIndexImg(0);
		} else {
			setIndexImg(indexImg + 1);
		}
	};
	const back = () => {
		if (indexImg == 0) {
			setIndexImg(sizeImg);
		} else {
			setIndexImg(indexImg - 1);
		}
	};
	const openModal = (e) => {
		setModalOpen(true);
		setIndexImg(e.target.dataset.imgId - 0);
	};
	const closeModal = () => {
		setModalOpen(false);
	};
	return (
		<section className="home-gallery">
			<div className="container">
				<h2 className="home-gallery__heading">
					{localization.title}
				</h2>
				
				<div className="home-gallery__box">
					<Slider
						autoplay
						autoplaySpeed={3000}
						initialSlide={2}
						infinite
						slidesToShow={4}
					>
						{
						data && data?.map((e, i) => (
								<div
									key={i}
									className="home-gallery__slider"
									
								>
									<div className="home-gallery__img">
									<Image
										data-img-id={e.id}
										className="gallery__img"
										src={e.img}
										alt="Photo gallery"
										width={270}
										height={350}
										// loader = { () => ()}
									/>
									</div>
								</div>
							))}
					</Slider>
				</div>

				<button className="gallery__all-btn">
					<Link href="/gallery">
						<a className="gallery__link"> {localization.button} </a>
					</Link>
				</button>
			</div>
		</section>
	);
}

export default HomeGallery;
