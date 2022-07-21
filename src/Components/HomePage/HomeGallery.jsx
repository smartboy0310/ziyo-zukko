import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';





function HomeGallery({ localization }) {
	const {
		count: { lang },
	} = useSelector((state) => state);

	const [dataFetch, setDataFetch] = useState()
	let data = []
	useEffect(() => {
		fetch('https://school.my-portfolio.uz/photo')
			 .then(res => res.json())
			 .then(data => setDataFetch(data.data))
			 .catch((e) => console.log(e))
  }, [])
if(lang == 'uz' ) {
	data = dataFetch?.uz
}
else {
	data = dataFetch?.ru
}

let pageData = data?.slice(0, 20);
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
						pageData && pageData?.map((e, i) => (
								<div
									key={i}
									className="home-gallery__slider"
									
								>
									<div className="home-gallery__img">
									<Image
										loader={() => e.photo_url}
										data-img-id={e.id}
										className="gallery__img"
										src={e.photo_url}
										alt="Photo gallery"
										width={270}
										height={350}
										
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
