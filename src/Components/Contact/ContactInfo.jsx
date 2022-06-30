import Image from 'next/image';
import React from 'react';
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';
import contactImg from '../../Assets/images/contact_pic.png';

function ContactInfo({ localization }) {
	const {
		count: { lang },
	} = useSelector((state) => state);
	const { header: hc } = Content[lang];

	return (
		<>
			<section className="contact-info">
				<div className="contact__top"></div>
				<div className="container">
					<h2 className="about-who__heading">{localization}</h2>
					<div className="contact-info__box">
						<div className="contact__img__box">
						<Image
							className="contact-info__image"
							src={contactImg}
							width={350}
							height={300}
						/>
						</div>
						<ul className="contact-info__list">
							<li className="contact-info__item">
								<a
									className="contact__phone__number"
									href="tel:+998712443581"
								>
									+998 (71) 2443581
								</a>
							</li>
							<li className="contact-info__item">
								<a
									href="mailto:ziyo-zukko@gmail.com"
									className="contact__email"
								>
									ziyo-zukko@gmail.com
								</a>
							</li>
							<li className="contact-info__item">
								<a
									href="https://2gis.uz/uz/tashkent/firm/70000001036919062"
									rel="noreferrer"
									className="contact__address--link"
								>
									{hc.address}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactInfo;
