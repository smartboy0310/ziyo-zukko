import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';


function HomeVideo({ localization }) {
	const {
		count: { lang },
	} = useSelector((state) => state);

	const [dataFetch, setDataFetch] = useState();
	let data = [];
	useEffect(() => {
		fetch('https://school.my-portfolio.uz/video')
			.then((res) => res.json())
			.then((data) => setDataFetch(data.data))
			.catch((e) => console.log(e));
	}, []);
	if (lang == 'uz') {
		data = dataFetch?.uz;
	} else {
		data = dataFetch?.ru;
	}

	let pageData = data?.slice(0, 3);
	console.log(pageData);
	return (
		<section className="home-video">
			<div className="container">
				<h2 className="home-video__heading">{localization.title}</h2>
				<div className="home__videos">
					{pageData &&
						pageData.map((e, i) => (
							<div key = {i}className="video__box">
								<iframe
									className={'video__iframe'}
									width={400}
									height={315}
									src={e.video_url}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						))}
				</div>
				<button className="gallery__all-btn ">
					<Link href="/gallery">
						<a className="gallery__link video__all-btn">
							{localization.button}
						</a>
					</Link>
				</button>
			</div>
		</section>
	);
}

export default HomeVideo;
