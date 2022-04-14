import Image from 'next/image';
import React from 'react';

import cloud from '../../Assets/images/cloud.png';
const data = [500, 25, 50];
function HomeAbout() {
	return (
		<section className="homeabout">
			<div className="container">
				<div className="homeabout__top">
					<Image
						className="top__cloud"
						src={cloud}
						alt="Cloud background"
					/>
				</div>
				<div className="homeabout__info">
					<h2 className="homeabout__heading">
						Biz haqimizda qisqacha
					</h2>
					<ul className="homeabout__list">
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{`${data[0]} +`}</p>
								<h3 className="item__heading">
									Oʻquvchilarimiz 
								</h3>
							</div>
						</li>
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{data[1]}</p>
								<h3 className="item__heading">
									Sinflarimiz 
								</h3>
							</div>
						</li>
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{data[2]}</p>
								<h3 className="item__heading">
									Oʻqituvchilarimiz 
								</h3>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default HomeAbout;
