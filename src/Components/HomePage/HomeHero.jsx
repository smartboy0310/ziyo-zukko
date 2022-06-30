import React from 'react';
import Link from 'next/link';

function HomeHero ({localization}) {
	
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__info">
					<h2 className="hero__heading">
						{localization.title}
					</h2>
					<p className="hero__discription hero__dis__desktop">
						{localization.subtitle}
					</p>
					<p className="hero__discription hero__dis__mobile">
						<span className="span">{localization.sub_one}</span>{' '}
						<span className="span">{localization.sub_two}</span>{' '}
						<span className="span">{localization.sub_three}</span>
					</p>
					<Link href="/contact">
						<a className="hero__link">{localization.button}</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
