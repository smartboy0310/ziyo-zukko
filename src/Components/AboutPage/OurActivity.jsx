import React, { useContext } from 'react';
import Image from 'next/image';
import imgOne  from '../../Assets/images/our_one.jpg'
import imgTwo  from '../../Assets/images/our_two.jpg'
import imgThree  from '../../Assets/images/our_three.jpg'
import imgFour  from '../../Assets/images/our_four.jpg'

const data = [
	imgOne,
	imgTwo,
	imgThree,
	imgFour
];
function OurActivity({ localization }) {
	

	return (
		<section className="our-activity">
			<h2 className="our-activity__heading">{localization}</h2>

			<div className="container">
				<p className="our-activity__discription">
					Bugungi kunda maktabda 100 nafar 1-sinf va 100 nafar 2-sinf
					o’quvchilari ta’lim olmoqdalar. Maktabda ta’lim o’zbek va
					rus tillarida olib boriladi. Boshlang’ich sinf
					o’qituvchilari va fan o’qituvchilarining barchasi oliy
					ma’lumotli, tajribali mutaxasislardir.Ularning 3 nafari
					“O’zbekiston Respublikasi xalq ta’limi a’lochisi “ ko’krak
					nishoniga ega. “ZIYO-ZUKKO TA’LIM MASKANI” Nodavlat ta’lim
					muassasasi boshlang’ich ta’lim bo’yicha ta’lim xizmatlarini
					ko’rsatadi. Ta’lim O’zbekiston Respublikasi xalq ta’limi
					vazirligi tomonidan tasdiqlangan tayanch o’quv reja asosida
					olib boriladi. O’quvchilar kun davomida 8:30 dan 18.00 gacha
					ta’lim muassasasi hududida bo’ladi. O’quvchilarga sifatli
					ta’lim-tarbiya, qo’shimcha bilimlar, malakali meditsina
					xizmat ko’rsatiladi. Maktabda o’quvchilarni sog’lom
					ovqatlantirish yo’lga qo’yilgan bo’lib, kun davomida ularga
					uch mahal sifatli, foydali mahsulotlardan tayyorlangan issiq
					ovqat beriladi. Darslardan so’ng o’quvchilar sayrga chiqib
					dam oladilar va so’ngra 2 nafar pedagog yordamida uyga
					berilgan vazifalarni to’liq bajaradilar. Kunning 16.00 dan
					18.00 gacha bo’lgan vaqtida ular turli to’garaklarga
					qatnashadilar. Ular uchun 1-sinfdan ingliz va rus tili ,
					2-sinfdan arab tili fan to’garaklari faoliyat ko’rsatadi.
					Shu bilan birga ularning aqlan va jismonan soqlom bo’lishi,
					qar tomonlama rivojlanishi uchun shaxmat, TAEKWON-DO ,
					badiiy gimnastika kabi to’garaklar faoliyat olib boradi.
					Maktabda o’quvchilar uchun qiziqarli ma’naviy va ma’rifiy
					tadbirlar ham tashkil etiladi. Bular “Bilimdonlar ko’rik
					tanlovi, “She’rxonlik kechasi”, “Ingliz tili festivali” ,“
					Sport-bizning do’stimiz”, “Shaxmatchilar turniri” va
					ota-onalar uchun turli bayram tadbirlari o’tkaziladi. har
					chorak o’quvchilar teatr va muzeylarga sayohat qiladilar.
					O’quvchilar kun davomida o’qituvchi, tarbiyachi hamda
					hamshira nazoratida bo’ladilar. Ishontirib aytamizki,
					bizning ta’lim muassasamizda kelajak avlod haqiqiy o’zbekona
					ta’lim va tarbiya uyg’unligida kamolga yetadi.
				</p>
				<div className="our-activity__img-box">
					{data &&
						data.map((e, i) => (
							<div key={i} className="our-activity__img-content">
								<Image
									className="our-activity__img"
									src={e}
									alt="our activity info"
									width={350}
									height={350}
								/>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}

export default OurActivity;
