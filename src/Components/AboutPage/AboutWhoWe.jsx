import React from 'react';
import Image from 'next/image';

import aboutCert from '../../Assets/images/about_certificate.jpg';

function AboutWhoWe({ localization }) {
	return (
		<section className="about-who">
			<div className="about__top"></div>
			<div className="container">
				<h2 className="about-who__heading">{localization}</h2>
				<div className="about-who__info">
					<div className="about-who__info__box">
						<h3 className="info__title">
							Ziyo-Zukko ta’lim maskani
						</h3>
						<p className="info__discription">
							Toshkent Islom Universiteti ta’sischiligida tashkil
							etilgan «ZIYO- ZUKKO TA’LIM MASKANI» Nodavlat ta’lim
							muassasi 2016 yil sentyabr oyidan o’z ish
							faoliyatini boshlagan.Maktabda ta’lim o’zbek va rus
							tillarida olib boriladi. Boshlang’ich sinf
							o’qituvchilari va fan o’qituvchilarining barchasi
							oliy ma’lumotli, tajribali mutaxasislardir. Ularning
							3 nafari “O’zbekiston Respublikasi xalq ta’limi
							a’lochisi “ ko’krak nishoniga ega. “ZIYO-ZUKKO
							TA’LIM MASKANI” Nodavlat ta’lim muassasasi
							boshlang’ich ta’lim bo’yicha ta’lim xizmatlarini
							ko’rsatadi. Ta’lim O’zbekiston Respublikasi xalq
							ta’limi vazirligi tomonidan tasdiqlangan tayanch
							o’quv reja asosida olib boriladi. O’quvchilar kun
							davomida 8:30 dan 18.00 gacha ta’lim muassasasi
							hududida bo’ladi. O’quvchilarga sifatli
							ta’lim-tarbiya, qo’shimcha bilimlar, malakali
							meditsina xizmat ko’rsatiladi.
						</p>
					</div>
					<div className="about__cert__img-box">
					<Image
						className="about__cert"
						src={aboutCert}
						alt="About me"
					/>
					</div>

				</div>
			</div>
		</section>
	);
}

export default AboutWhoWe;
