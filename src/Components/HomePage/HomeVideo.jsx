import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import closeImg from '../../Assets/images/close_btn.svg';

const data = [
	'https://www.youtube.com/embed/02WiRlg4kc8',
	'https://www.youtube.com/embed/yOhmuN7X8c8',
	'https://www.youtube.com/embed/WMh7ZEiO6A0',
];

function HomeVideo() {
	const [openVideo, setOpenVideo] = useState(false);

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

	const bigVideoBox = (e) => {
		setOpenVideo(true);
		setIndexImg(e.target.dataset.imgId - 0);
	};
	const closeModal = () => {
		setOpenVideo(false);
	};

	return (
		<section className="home-video">
			<div className="container">
				<h2 className="home-video__heading">Xalq ta'limi va Biz</h2>
				<div className="home__videos">
					<div className="video__box">
						<iframe
							onMouseUp={bigVideoBox}
							className={
								openVideo
									? 'video__frame open__video'
									: 'video__frame'
							}
							width="400"
							height="315"
							src={data[0]}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="video__box">
						<iframe
							onMouseUp={bigVideoBox}
							className={
								openVideo
									? 'video__frame open__video'
									: 'video__frame'
							}
							width="400"
							height="315"
							src={data[1]}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="video__box">
						<iframe
							onMouseUp={bigVideoBox}
							className={
								openVideo
									? 'video__frame open__video'
									: 'video__frame'
							}
							width="400"
							height="315"
							src={data[2]}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
				<button className="gallery__all-btn">
					<Link href="/">
						<a className="gallery__link"> Koʻproq koʻrish </a>
					</Link>
				</button>

				<div
					className={
						openVideo
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

export default HomeVideo;