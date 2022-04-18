import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Content from '../../Localization/Content';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Logo from '../../Assets/images/logo.svg';


const Footer = () => {
	const router = useRouter();

	const langValue = useRef();

	const dispatch = useDispatch();

	const {
		count: { lang },
	} = useSelector((state) => state);

	function getLang() {
		dispatch({ type: window.localStorage.getItem('lang') || 'uz' });
	}

	langValue.current = getLang;

	useEffect(() => {
		langValue.current();
	}, []);

	const { header: h } = Content[lang];

	return (
		<>
			<footer id="footer">
				<div className="container">
				<div className="footer__bottom">
				<div className="footer__logo__info">				
							<Link href="/">
								<a className="footer__logo__link">
									<div className="footer__logo__box">
										<Image
											className="footer__logo__img"
											src={Logo}
											alt="Ministry logo"
											width={90}
											height={90}
											objectFit = 'cover'
										/>
									</div>
									<p className="footer__heading">{h.heading}</p>
								</a>
							</Link>
						
						
					</div>

					<nav className="footer__navbar">
						<ul className="footer__navbar__list">
							<li className="footer__navbar__item">
								<Link href="/">
									<a
										className={`footer__navbar__item-link ${
											router.pathname == '/'
												? 'footer__navbar__item-link--active'
												: ''
										}`}
									>
										{h.about}
									</a>
								</Link>
							</li>
							<li className="footer__navbar__item">
								<Link href="/">
									<a
										className={`footer__navbar__item-link ${
											router.pathname == '/'
												? 'footer__navbar__item-link--active'
												: ''
										}`}
									>
										{h.gallery}
									</a>
								</Link>
							</li>
							<li className="footer__navbar__item">
								<Link href="/">
									<a
										className={`footer__navbar__item-link ${
											router.pathname == '/'
												? 'footer__navbar__item-link--active'
												: ''
										}`}
									>
										{h.news}
									</a>
								</Link>
								
							</li>

							<li className="footer__navbar__item">
								<Link href="/">
									<a
										className={`footer__navbar__item-link ${
											router.pathname == '/'
												? 'footer__navbar__item-link--active'
												: ''
										}`}
									>
										{h.contact}
									</a>
								</Link>
								
							</li>
						</ul>
					</nav>
					<div className="footer__social">
						<ul className="footer__social__list">
							<li className="footer__social__item">
								<a
									className="footer__social__link"
									href="https://www.facebook.com/"
								></a>
							</li>
							<li className="footer__social__item">
								<a
									className="footer__social__link"
									href="https://www.instagram.com/"
								></a>
							</li>
							<li className="footer__social__item">
								<a
									className="footer__social__link"
									href="https://web.telegram.org/"
								></a>
							</li>
						</ul>
					</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
