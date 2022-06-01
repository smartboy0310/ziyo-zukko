import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imgBoss from '../../Assets/images/direktor.jpg';



function Management() {
	return (
		<section className="management">
			<h2 className="management__heading">Rahbariyat</h2>
			<div className="container">
				<ul className="management__list">
					<li className="management__item">
						<ul className="management__sub-list">
							<li className="management__sub-item">
							<Link href ="/about/management">
									<a className='management__link'>
									<Image
									className="management__img"
									src={imgBoss}
									width={500}
									height={500}
										/>
									</a>
							</Link>
								<div className="social-set__box">
									<ul className="management__social__list">
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.facebook.com/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="8"
													height="15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7.931.106v2.367l-1.439.004c-1.127 0-1.345.523-1.345 1.288v1.694h2.687l-.349 2.648H5.147V15H2.346V8.107H0V5.46h2.346V3.505C2.346 1.237 3.76 0 5.836 0c.99 0 1.844.073 2.095.106Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.telegram.org/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="14"
													height="14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="m3.294 7.894 1.737 4.353L7.294 9.98l3.87 3.082L13.973.972l-14 5.63 3.32 1.292ZM2.202 6.59l6.673-2.683L3.568 7.12l-1.366-.532Zm7.862-2.445-4.43 4.06-.532 2.011-.985-2.468 5.947-3.603ZM5.966 10.15l.269-1.014.414.33-.683.684Zm4.694 1.463-4.03-3.21 6.068-5.562-2.038 8.772Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.instagram.com/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="14"
													height="14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7 1.353c1.84 0 2.056.008 2.784.04.672.03 1.036.143 1.28.239.322.125.552.273.792.514.241.24.392.47.514.793.094.243.208.607.238 1.28.033.727.041.943.041 2.783 0 1.84-.008 2.056-.04 2.784-.03.672-.143 1.036-.239 1.28a2.137 2.137 0 0 1-.514.792c-.24.24-.47.391-.793.514-.243.093-.607.208-1.28.238-.727.033-.943.041-2.783.041-1.84 0-2.056-.008-2.783-.04-.673-.03-1.037-.143-1.28-.239a2.138 2.138 0 0 1-.793-.514c-.24-.24-.391-.47-.514-.793-.093-.243-.208-.607-.238-1.28-.033-.727-.041-.943-.041-2.783 0-1.84.008-2.056.041-2.784.03-.672.142-1.036.238-1.28.126-.322.273-.552.514-.792.24-.24.47-.391.793-.514.243-.093.607-.208 1.28-.238.727-.036.943-.041 2.783-.041ZM7 .11c-1.87 0-2.105.009-2.84.041-.734.033-1.234.15-1.672.32a3.357 3.357 0 0 0-1.219.796 3.417 3.417 0 0 0-.796 1.22c-.17.437-.287.937-.32 1.673-.032.733-.04.968-.04 2.838S.12 9.105.152 9.84c.033.733.15 1.233.32 1.674.175.454.413.836.796 1.22.383.382.768.617 1.22.795.437.17.937.287 1.673.32.735.033.968.04 2.84.04 1.874 0 2.106-.007 2.842-.04.733-.033 1.233-.15 1.673-.32a3.357 3.357 0 0 0 1.22-.796c.383-.383.618-.768.796-1.22.17-.437.287-.937.32-1.673.032-.735.04-.968.04-2.84 0-1.874-.008-2.106-.04-2.842-.033-.733-.15-1.233-.32-1.673a3.358 3.358 0 0 0-.796-1.22 3.416 3.416 0 0 0-1.22-.795C11.08.3 10.58.182 9.844.15 9.106.12 8.87.11 7 .11Z"
														fill="#fff"
													/>
													<path
														d="M7 3.46a3.539 3.539 0 1 0 .001 7.079 3.539 3.539 0 0 0 0-7.078Zm0 5.836a2.297 2.297 0 1 1 0-4.593 2.297 2.297 0 0 1 0 4.593ZM10.68 4.149a.826.826 0 1 0 0-1.652.826.826 0 0 0 0 1.652Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
									</ul>
									<div className="show__social">
										<svg
											className="show__social__icon"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 1000 1000"
											width="19"
											height="19"
										>
											<path
												d="M911.9 418.3H581.7V88.1C581.7 45 545.2 10 500 10s-81.7 35-81.7 78.1v330.2H88.1C45 418.3 10 454.8 10 500s35 81.7 78.1 81.7h330.2v330.2c0 43.1 36.5 78.1 81.7 78.1s81.7-35 81.7-78.1V581.7h330.2c43.1 0 78.1-36.5 78.1-81.7s-35-81.7-78.1-81.7z"
												fill="#fff"
											/>
										</svg>
									</div>
								</div>
							</li>
							<li className="management__sub-item">
								<p className="management__discription">
									<strong className='management__name'>
										Ismatova Nargiza Kamaritdinovna
									</strong>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Magnam iste doloribus,
									accusamus non quibusdam tempora dolorem
									autem sed architecto error. Quam molestiae
									omnis nulla, sed in repellendus ratione ex
									corrupti optio temporibus excepturi dicta
									nihil ipsa quae, tenetur maiores vitae et
									impedit tempore laudantium, aspernatur vero
									ea harum. Odit, asperiores.
								</p>
							</li>
						</ul>
					</li>
					<li className="management__item">
						<ul className="management__sub-list">
							<li className="management__sub-item">
							<Link href ="/about/management">
									<a>
									<Image
									className="management__img"
									src={imgBoss}
									width={500}
									height={500}
										/>
									</a>
								</Link>
								<div className="social-set__box">
									<ul className="management__social__list">
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.facebook.com/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="8"
													height="15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7.931.106v2.367l-1.439.004c-1.127 0-1.345.523-1.345 1.288v1.694h2.687l-.349 2.648H5.147V15H2.346V8.107H0V5.46h2.346V3.505C2.346 1.237 3.76 0 5.836 0c.99 0 1.844.073 2.095.106Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.telegram.org/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="14"
													height="14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="m3.294 7.894 1.737 4.353L7.294 9.98l3.87 3.082L13.973.972l-14 5.63 3.32 1.292ZM2.202 6.59l6.673-2.683L3.568 7.12l-1.366-.532Zm7.862-2.445-4.43 4.06-.532 2.011-.985-2.468 5.947-3.603ZM5.966 10.15l.269-1.014.414.33-.683.684Zm4.694 1.463-4.03-3.21 6.068-5.562-2.038 8.772Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.instagram.com/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="14"
													height="14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7 1.353c1.84 0 2.056.008 2.784.04.672.03 1.036.143 1.28.239.322.125.552.273.792.514.241.24.392.47.514.793.094.243.208.607.238 1.28.033.727.041.943.041 2.783 0 1.84-.008 2.056-.04 2.784-.03.672-.143 1.036-.239 1.28a2.137 2.137 0 0 1-.514.792c-.24.24-.47.391-.793.514-.243.093-.607.208-1.28.238-.727.033-.943.041-2.783.041-1.84 0-2.056-.008-2.783-.04-.673-.03-1.037-.143-1.28-.239a2.138 2.138 0 0 1-.793-.514c-.24-.24-.391-.47-.514-.793-.093-.243-.208-.607-.238-1.28-.033-.727-.041-.943-.041-2.783 0-1.84.008-2.056.041-2.784.03-.672.142-1.036.238-1.28.126-.322.273-.552.514-.792.24-.24.47-.391.793-.514.243-.093.607-.208 1.28-.238.727-.036.943-.041 2.783-.041ZM7 .11c-1.87 0-2.105.009-2.84.041-.734.033-1.234.15-1.672.32a3.357 3.357 0 0 0-1.219.796 3.417 3.417 0 0 0-.796 1.22c-.17.437-.287.937-.32 1.673-.032.733-.04.968-.04 2.838S.12 9.105.152 9.84c.033.733.15 1.233.32 1.674.175.454.413.836.796 1.22.383.382.768.617 1.22.795.437.17.937.287 1.673.32.735.033.968.04 2.84.04 1.874 0 2.106-.007 2.842-.04.733-.033 1.233-.15 1.673-.32a3.357 3.357 0 0 0 1.22-.796c.383-.383.618-.768.796-1.22.17-.437.287-.937.32-1.673.032-.735.04-.968.04-2.84 0-1.874-.008-2.106-.04-2.842-.033-.733-.15-1.233-.32-1.673a3.358 3.358 0 0 0-.796-1.22 3.416 3.416 0 0 0-1.22-.795C11.08.3 10.58.182 9.844.15 9.106.12 8.87.11 7 .11Z"
														fill="#fff"
													/>
													<path
														d="M7 3.46a3.539 3.539 0 1 0 .001 7.079 3.539 3.539 0 0 0 0-7.078Zm0 5.836a2.297 2.297 0 1 1 0-4.593 2.297 2.297 0 0 1 0 4.593ZM10.68 4.149a.826.826 0 1 0 0-1.652.826.826 0 0 0 0 1.652Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
									</ul>
									<div className="show__social">
										<svg
											className="show__social__icon"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 1000 1000"
											width="19"
											height="19"
										>
											<path
												d="M911.9 418.3H581.7V88.1C581.7 45 545.2 10 500 10s-81.7 35-81.7 78.1v330.2H88.1C45 418.3 10 454.8 10 500s35 81.7 78.1 81.7h330.2v330.2c0 43.1 36.5 78.1 81.7 78.1s81.7-35 81.7-78.1V581.7h330.2c43.1 0 78.1-36.5 78.1-81.7s-35-81.7-78.1-81.7z"
												fill="#fff"
											/>
										</svg>
									</div>
								</div>
							</li>
							<li className="management__sub-item">
								<p className="management__discription">
									<strong  className='management__name'>
										Ismatova Nargiza Kamaritdinovna
									</strong>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Magnam iste doloribus,
									accusamus non quibusdam tempora dolorem
									autem sed architecto error. Quam molestiae
									omnis nulla, sed in repellendus ratione ex
									corrupti optio temporibus excepturi dicta
									nihil ipsa quae, tenetur maiores vitae et
									impedit tempore laudantium, aspernatur vero
									ea harum. Odit, asperiores.
								</p>
							</li>
						</ul>
					</li>
					<li className="management__item">
						<ul className="management__sub-list">
							<li className="management__sub-item">
								<Link href ="/about/management">
									<a>
									<Image
									className="management__img"
									src={imgBoss}
									width={500}
									height={500}
										/>
									</a>
								</Link>
								<div className="social-set__box">
									<ul className="management__social__list">
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.facebook.com/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="8"
													height="15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7.931.106v2.367l-1.439.004c-1.127 0-1.345.523-1.345 1.288v1.694h2.687l-.349 2.648H5.147V15H2.346V8.107H0V5.46h2.346V3.505C2.346 1.237 3.76 0 5.836 0c.99 0 1.844.073 2.095.106Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.telegram.org/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="14"
													height="14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="m3.294 7.894 1.737 4.353L7.294 9.98l3.87 3.082L13.973.972l-14 5.63 3.32 1.292ZM2.202 6.59l6.673-2.683L3.568 7.12l-1.366-.532Zm7.862-2.445-4.43 4.06-.532 2.011-.985-2.468 5.947-3.603ZM5.966 10.15l.269-1.014.414.33-.683.684Zm4.694 1.463-4.03-3.21 6.068-5.562-2.038 8.772Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
										<li className="management__social__item">
											<a
												className="management__social__link"
												href="https://www.instagram.com/"
												target="_blank"
											>
												<svg
													className="socail__icon"
													width="14"
													height="14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7 1.353c1.84 0 2.056.008 2.784.04.672.03 1.036.143 1.28.239.322.125.552.273.792.514.241.24.392.47.514.793.094.243.208.607.238 1.28.033.727.041.943.041 2.783 0 1.84-.008 2.056-.04 2.784-.03.672-.143 1.036-.239 1.28a2.137 2.137 0 0 1-.514.792c-.24.24-.47.391-.793.514-.243.093-.607.208-1.28.238-.727.033-.943.041-2.783.041-1.84 0-2.056-.008-2.783-.04-.673-.03-1.037-.143-1.28-.239a2.138 2.138 0 0 1-.793-.514c-.24-.24-.391-.47-.514-.793-.093-.243-.208-.607-.238-1.28-.033-.727-.041-.943-.041-2.783 0-1.84.008-2.056.041-2.784.03-.672.142-1.036.238-1.28.126-.322.273-.552.514-.792.24-.24.47-.391.793-.514.243-.093.607-.208 1.28-.238.727-.036.943-.041 2.783-.041ZM7 .11c-1.87 0-2.105.009-2.84.041-.734.033-1.234.15-1.672.32a3.357 3.357 0 0 0-1.219.796 3.417 3.417 0 0 0-.796 1.22c-.17.437-.287.937-.32 1.673-.032.733-.04.968-.04 2.838S.12 9.105.152 9.84c.033.733.15 1.233.32 1.674.175.454.413.836.796 1.22.383.382.768.617 1.22.795.437.17.937.287 1.673.32.735.033.968.04 2.84.04 1.874 0 2.106-.007 2.842-.04.733-.033 1.233-.15 1.673-.32a3.357 3.357 0 0 0 1.22-.796c.383-.383.618-.768.796-1.22.17-.437.287-.937.32-1.673.032-.735.04-.968.04-2.84 0-1.874-.008-2.106-.04-2.842-.033-.733-.15-1.233-.32-1.673a3.358 3.358 0 0 0-.796-1.22 3.416 3.416 0 0 0-1.22-.795C11.08.3 10.58.182 9.844.15 9.106.12 8.87.11 7 .11Z"
														fill="#fff"
													/>
													<path
														d="M7 3.46a3.539 3.539 0 1 0 .001 7.079 3.539 3.539 0 0 0 0-7.078Zm0 5.836a2.297 2.297 0 1 1 0-4.593 2.297 2.297 0 0 1 0 4.593ZM10.68 4.149a.826.826 0 1 0 0-1.652.826.826 0 0 0 0 1.652Z"
														fill="#fff"
													/>
												</svg>
											</a>
										</li>
									</ul>
									<div className="show__social">
										<svg
											className={'show__social__icon'}
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 1000 1000"
											width="19"
											height="19"
										>
											<path
												d="M911.9 418.3H581.7V88.1C581.7 45 545.2 10 500 10s-81.7 35-81.7 78.1v330.2H88.1C45 418.3 10 454.8 10 500s35 81.7 78.1 81.7h330.2v330.2c0 43.1 36.5 78.1 81.7 78.1s81.7-35 81.7-78.1V581.7h330.2c43.1 0 78.1-36.5 78.1-81.7s-35-81.7-78.1-81.7z"
												fill="#fff"
											/>
										</svg>
									</div>
								</div>
							</li>
							<li className="management__sub-item">
								<p className="management__discription">
									<strong className="management__name">
										Ismatova Nargiza Kamaritdinovna
									</strong>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Magnam iste doloribus,
									accusamus non quibusdam tempora dolorem
									autem sed architecto error. Quam molestiae
									omnis nulla, sed in repellendus ratione ex
									corrupti optio temporibus excepturi dicta
									nihil ipsa quae, tenetur maiores vitae et
									impedit tempore laudantium, aspernatur vero
									ea harum. Odit, asperiores.
								</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Management;
