import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Content from '../../Localization/Content';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Logo from '../../Assets/images/logo.jpg';
import LocationImg from '../../Assets/images/map-icon.svg';


const Header = () => {
	const router = useRouter();

	const langValue = useRef();

	const dispatch = useDispatch();

	const {
		count: { lang },
	} = useSelector((state) => state);

	function getLang() {
		dispatch({ type: window.localStorage.getItem('lang') || 'ru' });
	}

	langValue.current = getLang;

	useEffect(() => {
		langValue.current();
	}, []);

	const { header: h } = Content[lang];

	return (
		<>
			<div className="container">
				<div className="header__top">					
					<div className="phone">
						<a
							className="phone__number"
							href="tel:+998998760310"
						>
							+99899 876-03-10
						</a>
					</div>
					<div className="email__address">
						<a href="mailto:ziyo-zukko@gmail.com" className="email">
							ziyo-zukko@gmail.com
						</a>
					</div>
					<div className="work__time">
						<time className="time__info">Du-Sha 8:00 - 18:00</time>
					</div>
					
					<div className="lang__box">
						<ul className="lang__list">
							<li
								className={
									lang === 'uz'
										? 'lang__item lang__item--active'
										: 'lang__item'
								}
								onClick={() => {
									dispatch({ type: 'uz' });
								}}
							>
								O'zbekcha
								<span className="under_line"></span>
							</li>
							<li
								className={
									lang == 'ru'
										? 'lang__item lang__item--active'
										: 'lang__item'
								}
								onClick={() => {
									dispatch({ type: 'ru' });
								}}
							>
								Русский
								<span className="under_line"></span>
							</li>
						</ul>
					</div>
					<div className="header__address">
						<a href="https://2gis.uz/uz/tashkent/firm/70000001036919062" target="_blank" className="header__address--link">
							<Image
								className="location__img"
								src={LocationImg}
								alt="Location icon"
								width={40}
								height={40}
								objectFit="contain"
							/>
							<p className="location__discription">
								100011, Toshkent shahar, Abdulla Qodiriy
								ko’chasi, 11-uy
							</p>
						</a>
					</div>
				</div>
				<div className="header__bottom">
					<div className="header__info">
						<div className="logo">
							<Link href="/">
								<a className="logo__link">
									<div className="logo__box">
										<Image
											className="logo__img"
											src={Logo}
											alt="Ministry logo"
											width={80}
											height={80}
										/>
									</div>
								</a>
							</Link>
						</div>
						<p className="header__heading">{h.heading}</p>
					</div>

					<nav className="header__navbar">
						<ul className="navbar__list">
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${
											router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
										}`}
									>
										{h.home}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${
											router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
										}`}
									>
										{h.about}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${
											router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
										}`}
									>
										{h.courses}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${
											router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
										}`}
									>
										{h.news}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>

							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${
											router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
										}`}
									>
										{h.contact}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
						</ul>
					</nav>
					<div className="header__social">
						<ul className="social__list">
							<li className="social__item">
								<a
									className="social__link"
									href="https://www.facebook.com/"
								></a>
							</li>
							<li className="social__item">
								<a
									className="social__link"
									href="https://www.instagram.com/"
								></a>
							</li>
							<li className="social__item">
								<a
									className="social__link"
									href="https://web.telegram.org/"
								></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
