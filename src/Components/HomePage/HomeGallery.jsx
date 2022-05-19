import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import closeImg from '../../Assets/images/close_btn.svg'

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
];

function HomeGallery() {
   const [modalOpen, setModalOpen] = useState(false)
	const [indexImg, setIndexImg] = useState(0);
	const [indexImgOne, setIndexImgOne] = useState(0);
	const [indexImgTwo, setIndexImgTwo] = useState(1);
	const [indexImgThree, setIndexImgThree] = useState(2);
	const [indexImgFour, setIndexImgFour] = useState(3);

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

	const slider = setTimeout(() => {
		if (indexImgOne == sizeImg) {
			setIndexImgOne(0);
		} else {
			setIndexImgOne(indexImgOne + 1);
		}
		if (indexImgTwo == sizeImg) {
			setIndexImgTwo(0);
		} else {
			setIndexImgTwo(indexImgTwo + 1);
		}
		if (indexImgThree == sizeImg) {
			setIndexImgThree(0);
		} else {
			setIndexImgThree(indexImgThree + 1);
		}
		if (indexImgFour == sizeImg) {
			setIndexImgFour(0);
		} else {
			setIndexImgFour(indexImgFour + 1);
		}
	}, 3000);

	setInterval(() => {
		slider;
	}, 100000000);

   const openModal = (e) => {
      setModalOpen(true)
      setIndexImg(e.target.dataset.imgId - 0)
   }
   const closeModal = () => {
      setModalOpen(false)
   }
	return (
		<section className="home-gallery">
			<div className="container">
				<h2 className="home-gallery__heading">
					Bizning foto galereyamiz
				</h2>
				<div className="home-gallery__box">
					<div className="home-gallery__img" onMouseUp={openModal}>
						<img
                     data-img-id = {indexImgOne}
							className="gallery__img"
							src={data[indexImgOne]}
							alt="Photo gallery"
							width={250}
							height={300}
						/>
					</div>
					<div className="home-gallery__img" onMouseUp={openModal}>
						<img
                     data-img-id = {indexImgTwo}
							className="gallery__img"
							src={data[indexImgTwo]}
							alt="Photo gallery"
							width={250}
							height={300}
						/>
					</div>
					<div className="home-gallery__img" onMouseUp={openModal}>
						<img
                     data-img-id = {indexImgThree}
							className="gallery__img"
							src={data[indexImgThree]}
							alt="Photo gallery"
							width={250}
							height={300}
						/>
					</div>{' '}
					<div className="home-gallery__img" onMouseUp={openModal}>
						<img
                     data-img-id = {indexImgFour}
							className="gallery__img"
							src={data[indexImgFour]}
							alt="Photo gallery"
							width={250}
							height={300}
						/>
					</div>
				</div>

				<button className="gallery__all-btn">
					<Link href="/gallery">
						<a className="gallery__link"> Koʻproq koʻrish </a>
					</Link>
				</button>
				<div className={modalOpen ? 'home-gallery__modal active__gallery__modal' : 'home-gallery__modal' }>
					<div className="model__box">
						<button className="gallery__close__modal" onClick={closeModal} >
							<Image 
                        className="gallery__close__img" 
                        src={closeImg}   
                        alt = 'Close modal icon'
                        maxwidth={30}
                        maxheight={30}
                        objectFit = 'cover'
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
