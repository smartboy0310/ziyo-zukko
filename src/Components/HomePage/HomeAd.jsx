import Link from 'next/link';
import React from 'react';

const adImg = 'https://picsum.photos/300/350';
function HomeAd() {
	return (
		<section className="home-ad">
			<div className="container">
				<h2 className="home-ad__heading">E'lon</h2>
				<div className="home-ad__box">
					<div className="home-ad__img">
						<img
							className="ad__img"
							src={adImg}
							alt="Ad info"
							width={300}
							height={350}
						/>
					</div>
					<div className="home-ad__info">
						<h2 className="home-ad__title">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Id dolorum commodi distinctio labore eos
							incidunt dolores cupiditate molestiae iste! Eum?
						</h2>
						<Link href="/">
							<a className="home-ad__link">batafsil...</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeAd;
