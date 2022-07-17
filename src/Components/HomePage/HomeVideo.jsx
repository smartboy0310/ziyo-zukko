import React from 'react';
import Link from 'next/link';

const data = [
	'https://www.youtube.com/embed/02WiRlg4kc8',
	'https://www.youtube.com/embed/yOhmuN7X8c8',
	'https://www.youtube.com/embed/WMh7ZEiO6A0',
];

function HomeVideo({ localization }) {
	return (
		<section className="home-video">
			<div className="container">
				<h2 className="home-video__heading">{localization.title}</h2>
				<div className="home__videos">
					<div className="video__box">
						<iframe
							className={'video__iframe'}
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
							className={'video__iframe'}
							width="400"
							height="315"
							src={data[1]}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="video__box close__video">
						<iframe
							className={'video__iframe'}
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
