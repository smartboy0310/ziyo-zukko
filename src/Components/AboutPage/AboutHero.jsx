import React from 'react';
// import Link from 'next/link';

function AboutHero({ localization }) {
	return (
		<section className="about-hero">
			<div className="container">
				<div className="about-hero__info">
					<h2 className="about-hero__heading">
						{localization.title}
					</h2>
					<p className="about-hero__discription">
						{localization.discription}
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutHero;
