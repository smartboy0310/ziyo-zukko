import React from 'react';
import Link from 'next/link';
const HomeHero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__info">
					<h2 className="hero__heading">
						Ziyo-Zukko bu siz izlagan ta'lim maskani
					</h2>
					<p className="hero__discription">
           Sifatli ta'lim | Oʻyin maydonchasi | Foydali mashgʻulotlar 
          </p>
					<Link href="/contact">
						<a className="hero__link">
							Hoziroq bogʻlaning
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
