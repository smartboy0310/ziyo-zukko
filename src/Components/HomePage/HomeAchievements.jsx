import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
const data = [
	{
		name: 'Lorem ipsum dolor sit.',
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem!',
		img: 'https://via.placeholder.com/300X400',
	},
	{
		name: 'Lorem ipsum dolor sit.',
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem!',
		img: 'https://via.placeholder.com/301X400',
	},
	{
		name: 'Lorem ipsum dolor sit.',
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem!',
		img: 'https://via.placeholder.com/302X400',
	},
	{
		name: 'Lorem ipsum dolor sit.',
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem!',
		img: 'https://via.placeholder.com/303X400',
	},
	{
		name: 'Lorem ipsum dolor sit.',
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem!',
		img: 'https://via.placeholder.com/304X400',
	},
	{
		name: 'Lorem ipsum dolor sit.',
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, voluptatem!',
		img: 'https://via.placeholder.com/305X400',
	},
];

function HomeAchievements() {
	const [indexWinOne, setIndexWinOne] = useState(0);
	const [indexWinTwo, setIndexWinTwo] = useState(1);
	const [indexWinThree, setIndexWinThree] = useState(2);

	const sizeImg = data.length - 1;

	const next = () => {
		if (indexWinOne == sizeImg) {
			setIndexWinOne(0);
		} else {
			setIndexWinOne(indexWinOne + 1);
		}
		if (indexWinTwo == sizeImg) {
			setIndexWinTwo(0);
		} else {
			setIndexWinTwo(indexWinTwo + 1);
		}
		if (indexWinThree == sizeImg) {
			setIndexWinThree(0);
		} else {
			setIndexWinThree(indexWinThree + 1);
		}
	};
	const back = () => {
		if (indexWinOne == 0) {
			setIndexWinOne(sizeImg);
		} else {
			setIndexWinOne(indexWinOne - 1);
		}
		if (indexWinTwo == 0) {
			setIndexWinTwo(sizeImg);
		} else {
			setIndexWinTwo(indexWinTwo - 1);
		}
		if (indexWinThree == 0) {
			setIndexWinThree(sizeImg);
		} else {
			setIndexWinThree(indexWinThree - 1);
		}
	};
	return (
		<section className="home-achievements">
			<div className="container">
				<h2 className="home-achievements__heading">
					Bizning yutuqlarimiz
				</h2>
				<div className="home-achievements__box">
					<div className="achievements__back__btn">
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
					<div className="home-achievements__img">
						<img
							data-img-id={indexWinOne}
							className="achievements__img"
							src={data[indexWinOne].img}
							alt="Photo achievements"
							maxwidth={300}
							maxheight={400}
						/>
						<div className="home-achievements__img__info">
							<h3 className="home-achievements__img__heading">
								{data[indexWinOne].name}
							</h3>
							<p className="home-achievements__img__discription">
								{data[indexWinOne].title}
							</p>
						</div>
					</div>
					<div className="home-achievements__img">
						<img
							data-img-id={indexWinTwo}
							className="achievements__img"
							src={data[indexWinTwo].img}
							alt="Photo achievements"
							maxwidth={300}
							maxheight={400}
						/>
						<div className="home-achievements__img__info">
							<h3 className="home-achievements__img__heading">
								{data[indexWinTwo].name}
							</h3>
							<p className="home-achievements__img__discription">
								{data[indexWinTwo].title}
							</p>
						</div>
					</div>
					<div className="home-achievements__img">
						<img
							data-img-id={indexWinThree}
							className="achievements__img"
							src={data[indexWinThree].img}
							alt="Photo achievements"
							width={300}
							height={400}
						/>
						<div className="home-achievements__img__info">
							<h3 className="home-achievements__img__heading">
								{data[indexWinThree].name}
							</h3>
							<p className="home-achievements__img__discription">
								{data[indexWinThree].title}
							</p>
						</div>
					</div>
					<div className="achievements__next__btn">
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
				<button className="achievements__all-btn">
					<Link href="/">
						<a className="achievements__link"> Koʻproq koʻrish </a>
					</Link>
				</button>
			</div>
		</section>
	);
}

export default HomeAchievements;
