import Image from 'next/image';
import React from 'react';

import chouseOne from '../../Assets/images/chouse_one.png';
import chouseTwo from '../../Assets/images/chouse_two.png';
import chouseThree from '../../Assets/images/chouse_three.png';
import chouseFour from '../../Assets/images/chouse_four.png';
function HomeChouse() {
	return (
		<section className="home-chouse">
			<div className="container">
				<h2 className="home-chouse__heading">
					Nima uchun bizni tanlashadi
				</h2>
				<div className="home-chouse__box">
					<ul className="home__chouse__list">
						<li className="home__chouse__item">
							<div className="chouse__item__img">
								<Image
									className="chouse__img"
									src={chouseOne}
									alt="Target Skillsets icon"
									width={100}
									height={110}
								/>
							</div>
							<h3 className="chouse__title">
								Maqsadli mahorat toplami
							</h3>
						</li>
            <li className="home__chouse__item">
							<div className="chouse__item__img">
								<Image
									className="chouse__img"
									src={chouseTwo}
									alt="Target Skillsets icon"
									width={100}
									height={110}
								/>
							</div>
							<h3 className="chouse__title">
              Qoʻshimcha qiziqarli tadbirlar
							</h3>
						</li>
            <li className="home__chouse__item">
							<div className="chouse__item__img">
								<Image
									className="chouse__img"
									src={chouseThree}
									alt="Target Skillsets icon"
									width={100}
									height={110}
								/>
							</div>
							<h3 className="chouse__title">
							Toʻliq kuzatish
							</h3>
						</li>
            <li className="home__chouse__item">
							<div className="chouse__item__img">
								<Image
									className="chouse__img"
									src={chouseFour}
									alt="Target Skillsets icon"
									width={100}
									height={110}
								/>
							</div>
							<h3 className="chouse__title">
								Maxsus qoʻshimcha kurslar
							</h3>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default HomeChouse;
