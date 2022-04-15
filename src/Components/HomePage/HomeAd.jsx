import Link from 'next/link';
import React, { useState } from 'react';
const data = [
	{
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://picsum.photos/300/350'
	},
	{
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X350'
	}
]

function HomeAd() {
	const [adIndex, setAdIndex] = useState(0)
	const next = () => {
		if(adIndex == data.length -1) {
			setAdIndex(0)
		}else{
			setAdIndex(adIndex + 1)
		}
	}
	const back = () => {
		if(adIndex == 0) {
			setAdIndex(data.length - 1)
		}else{
			setAdIndex(adIndex - 1)
		}
	}

	return (
		<section className="home-ad">
			<div className="container">
				<h2 className="home-ad__heading">E'lon</h2>
				<div className="home-ad__box">
				<div className="back__btn" >
						<svg onClick={back} width="56" height="69" viewBox="0 0 56 69" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_d_400_2178)">
									<path d="M56 29.4401C56 16.2213 46.9275 4.73078 34.0705 1.66602L30.0119 0.698569C14.1416 -3.08448 -1.29698 8.97961 0.0865113 25.2378V25.2378C0.238657 27.0257 0.312557 28.9995 0.325815 31.0818C0.435047 48.2378 13.8563 63.1466 30.9672 61.9304V61.9304C45.0706 60.928 56 49.1928 56 35.0521V29.4401Z" fill="#B4B4B4" />
								</g>
								<path d="M22 40L31 31L22 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<defs>
									<filter id="filter0_d_400_2178" x="0" y="0" width="56" height="69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
										<feOffset dy="7" />
										<feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
										<feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_400_2178" />
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_2178" result="shape" />
									</filter>
								</defs>
							</svg>
						</div>
					<div className="home-ad__img">
						<img
							className="ad__img"
							src={data[adIndex].img}
							alt="Ad info"
							width={300}
							height={350}
						/>
					</div>
					<div className="home-ad__info">
						
						<h2 className="home-ad__title">
						{data[adIndex].title}
						</h2>
						<Link href="/">
							<a className="home-ad__link">batafsil...</a>
						</Link>
						
					</div>
					
						<div className="next__btn">
							<svg onClick={next} width="56" height="69" viewBox="0 0 56 69" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_d_400_2178)">
									<path d="M56 29.4401C56 16.2213 46.9275 4.73078 34.0705 1.66602L30.0119 0.698569C14.1416 -3.08448 -1.29698 8.97961 0.0865113 25.2378V25.2378C0.238657 27.0257 0.312557 28.9995 0.325815 31.0818C0.435047 48.2378 13.8563 63.1466 30.9672 61.9304V61.9304C45.0706 60.928 56 49.1928 56 35.0521V29.4401Z" fill="#B4B4B4" />
								</g>
								<path d="M22 40L31 31L22 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<defs>
									<filter id="filter0_d_400_2178" x="0" y="0" width="56" height="69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
										<feOffset dy="7" />
										<feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
										<feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_400_2178" />
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_2178" result="shape" />
									</filter>
								</defs>
							</svg>

						</div>
				</div>
			</div>
		</section>
	);
}

export default HomeAd;
