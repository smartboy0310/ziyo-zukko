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
		img: slideImg2,
	},
	{
		id: 3,
		img: slideImg3,
	},
	{
		id: 4,
		img: slideImg4,
	},
	{
		id: 5,
		img: slideImg5,
	},
	{
		id: 6,
		img: slideImg6,
	},
	{
		id: 7,
		img: slideImg7,
	},
	{
		id: 8,
		img: slideImg8,
	},
];

function HomeGallery() {
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
					Bizning foto galereyamiz
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
										width={250}
										height={300}
										// loader = { () => ()}
									/>
									</div>
								</div>
							))}
					</Slider>
				</div>

				<button className="gallery__all-btn">
					<Link href="/gallery">
						<a className="gallery__link"> Koʻproq koʻrish </a>
					</Link>
				</button>
				<div
					className={
						modalOpen
							? 'home-gallery__modal active__gallery__modal'
							: 'home-gallery__modal'
					}
				>
					<div className="model__box">
						<button
							className="gallery__close__modal"
							onClick={closeModal}
						>
							<Image
								className="gallery__close__img"
								src={closeImg}
								alt="Close modal icon"
								maxwidth={30}
								maxheight={30}
								objectFit="cover"
							/>
						</button>
						<div className="gallery__back__btn">
							<svg
								onClick={back}
								width="56"
								height="69"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g>
									<path
										d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z"
										fill="#01A6F8"
									/>
								</g>
								<path
									d="m24 40 9-9-9-9"
									stroke="#fff"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="home-modal__img">
							<img
								className="modal__img"
								src={data[indexImg]}
								alt="Photo gallery"
								width={250}
								height={300}
							/>
						</div>
						<div className="gallery__next__btn">
							<svg
								onClick={next}
								width="56"
								height="69"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g>
									<path
										d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z"
										fill="#01A6F8"
									/>
								</g>
								<path
									d="m24 40 9-9-9-9"
									stroke="#fff"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeGallery;
