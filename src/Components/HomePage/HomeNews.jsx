import Link from 'next/link';
import React, { useState } from 'react';
const data = [
	{
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '18.04.2022',
	},
	{
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
];

function HomeNews() {
	const [newIndexOne, setNewIndexOne] = useState(0);
	const [newIndexTwo, setNewIndexTwo] = useState(1);
  const dataSize = data.length - 1
	const next = () => {
		if (newIndexOne == dataSize) {
			setNewIndexOne(0);
		} else {
			setNewIndexOne(newIndexOne + 1);
		}
    if (newIndexTwo == dataSize) {
			setNewIndexTwo(0);
		} else {
			setNewIndexTwo(newIndexTwo + 1);
		}
	};
	const back = () => {
		if (newIndexOne == 0) {
			setNewIndexOne(dataSize);
		} else {
			setNewIndexOne(newIndexOne - 1);
		}
    if (newIndexTwo == 0) {
			setNewIndexTwo(dataSize);
		} else {
			setNewIndexTwo(newIndexTwo - 1);
		}
	};

	return (
		<section className="home-new">
			<div className="container">
				<h2 className="home-new__heading">So'ngi yangliklar</h2>
				<div className="home-new__box">
					<div className="new__back__btn">
						<svg
							onClick={back}
							width="56"
							height="69"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#a)">
								<path
									d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z"
									fill="#B4B4B4"
								/>
							</g>
							<path
								d="m24 40 9-9-9-9"
								stroke="#fff"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<defs>
								<filter
									id="a"
									x="0"
									y="0"
									width="56"
									height="69"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="7" />
									<feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
									<feBlend
										mode="multiply"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_38_217"
									/>
									<feBlend
										in="SourceGraphic"
										in2="effect1_dropShadow_38_217"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</div>
          <div className="home__new__info">
          <ul className="home-new__list">
						<li className="home-new__item">
							<div className="home-new__img">
								<img
									className="new__img"
									src={data[newIndexOne].img}
									alt="new info"
									maxwidth={300}
									maxheight={400}
								/>
							</div>
							<div className="home-new__info">
								<h2 className="home-new__title">
									{data[newIndexOne].name}
								</h2>
								<div className="new__created">
									<time
										datatime={data[newIndexOne].create_at}
										className="new__created__time"
									>
										{data[newIndexOne].create_at}
									</time>
								</div>
								<p className="new__discription">
									{data[newIndexOne].title}
								</p>
								<Link href="/news/single">
									<a className="home-new__link">
										batafsil...
									</a>
								</Link>
							</div>
						</li>
						<li className="home-new__item">
							<div className="home-new__img">
								<img
									className="ad__img"
									src={data[newIndexTwo].img}
									alt="new info"
									maxwidth={300}
									maxheight={400}
								/>
							</div>
							<div className="home-new__info">
								<h2 className="home-new__title">
									{data[newIndexTwo].name}
								</h2>
								<div className="new__created">
									<time
										datatime={data[newIndexTwo].create_at}
										className="new__created__time"
									>
										{data[newIndexTwo].create_at}
									</time>
								</div>
								<p className="new__discription">
									{data[newIndexTwo].title}
								</p>
								<Link href="/news/single">
									<a className="home-new__link">
										batafsil...
									</a>
								</Link>
							</div>
						</li>
					</ul>
          <button className="gallery__all-btn">
					<Link href="/news">
						<a className="gallery__link"> Koʻproq koʻrish </a>
					</Link>
				</button>
          </div>
					<div className="new__next__btn">
						<svg
							onClick={next}
							width="56"
							height="69"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#a)">
								<path
									d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z"
									fill="#B4B4B4"
								/>
							</g>
							<path
								d="m24 40 9-9-9-9"
								stroke="#fff"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<defs>
								<filter
									id="a"
									x="0"
									y="0"
									width="56"
									height="69"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="7" />
									<feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
									<feBlend
										mode="multiply"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_38_217"
									/>
									<feBlend
										in="SourceGraphic"
										in2="effect1_dropShadow_38_217"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeNews;
