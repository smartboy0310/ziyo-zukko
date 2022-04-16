import Link from 'next/link';
import React, { useState } from 'react';
const data = [
	{
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X350'
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
				<svg onClick={back} width="56" height="69" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g filter="url(#a)">
                        <path d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z" fill="#B4B4B4" /></g>
                     <path d="m24 40 9-9-9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <defs>
                        <filter id="a" x="0" y="0" width="56" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
                           <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                           <feOffset dy="7" />
                           <feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
                           <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_38_217" />
                           <feBlend in="SourceGraphic" in2="effect1_dropShadow_38_217" result="shape" />
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
						<svg onClick={next} width="56" height="69" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g filter="url(#a)">
                        <path d="M56 29.44c0-13.219-9.072-24.71-21.93-27.774L30.013.699C14.142-3.084-1.297 8.979.087 25.238c.152 1.788.226 3.762.239 5.844.109 17.156 13.53 32.065 30.641 30.848C45.071 60.928 56 49.193 56 35.052V29.44Z" fill="#B4B4B4" /></g>
                     <path d="m24 40 9-9-9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <defs>
                        <filter id="a" x="0" y="0" width="56" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
                           <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                           <feOffset dy="7" />
                           <feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.811765 0 0 0 0 0.839216 0 0 0 0.75 0" />
                           <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_38_217" />
                           <feBlend in="SourceGraphic" in2="effect1_dropShadow_38_217" result="shape" />
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
