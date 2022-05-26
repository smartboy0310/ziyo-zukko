import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import Content from '../../Localization/Content';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';


import Logo from '../../Assets/images/logo.svg';
import LocationImg from '../../Assets/images/map-icon.svg';
import humburgerImg from '../../Assets/images/humburger.svg'


const Header = () => {
	
	const router = useRouter();
	const [openNavbar, setOpenNavbar] = useState(true)
	const [checkBtn, setCheckBtn] = useState(true)

	const langValue = useRef();

	const dispatch = useDispatch();

	const { count: { lang }} = useSelector((state) => state);

	function getLang() {
		dispatch({ type: window.localStorage.getItem('lang') || 'uz' });
	}

	langValue.current = getLang;

	useEffect(() => {
		langValue.current();
	}, []);

	const { header: h } = Content[lang];

	const clickBtn = () => {
		setCheckBtn(!checkBtn)
	}
	
	return (
		<>
			<div className="container">
				<div className="header__top">
					<div className="phone">
						<a className="phone__number" href="tel:+998712443581">
							+998 (71) 2443581
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
						<ul className="lang__list active__lang">
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
						<ul className="lang__list mobile__lang">
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
								Uz
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
								Ру
								<span className="under_line"></span>
							</li>
						</ul>
					</div>
					<div className="header__address">
						<a
							href="https://2gis.uz/uz/tashkent/firm/70000001036919062"
							target="_blank"
							className="header__address--link"
						>
							<div className="location__img">
								<Image
									className="header__loc__img"
									src={LocationImg}
									alt="Location icon"
									maxwidth={25}
									maxheight={25}
									objectFit="contain"
								/>
							</div>
							<p className="location__discription">{h.address}</p>
						</a>
					</div>
				</div>
				<div className="header__bottom">
					<div className="header__logo__info">
						<Link href="/">
							<a className="logo__link">
								<div className="logo__box">
									<Image
										className="logo__img"
										src={Logo}
										alt="School logo"
										width={90}
										height={90}
										objectFit="cover"
									/>
								</div>
								<p className="header__heading">{h.heading}</p>
							</a>
						</Link>
					</div>

					<nav className="header__navbar close-deskto__navbar">
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
								<Link href="/about">
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
								<Link href="/gallery">
									<a
										className={`navbar__item-link ${
											router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
										}`}
									>
										{h.gallery}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/news">
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
								<Link href="/contact">
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
					<div className="header__social close-deskto__navbar">
						<ul className="social__list">
							<li className="social__item">
								<a
									className="social__link"
									href="https://www.facebook.com/"
									target="_blank"
								>
									<div className="social__content"></div>
								</a>
							</li>
							<li className="social__item">
								<a
									className="social__link"
									href="https://www.instagram.com/"
									target="_blank"
								>
									<div className="social__content"></div>
								</a>
							</li>
							<li className="social__item">
								<a
									className="social__link"
									href="https://web.telegram.org/"
									target="_blank"
								>
									<div className="social__content"></div>
								</a>
							</li>
						</ul>
					</div>
					
					
					<div className="reponsev__navbar">
						<div className="openNavar__btn" onClick={clickBtn}>
								{
									checkBtn ? 
									<>
										<div className="navbar__btn__box">
										<Image 
											src={humburgerImg}
											alt = "Show navbar pic"
										/>
										</div>
									</> 
									:
									<>
									</>
								}
						</div>
					</div>
					
					
				</div>
				
			</div>
			<div className="header__line">
					
			</div>
		</>
	);
};

export default Header;
