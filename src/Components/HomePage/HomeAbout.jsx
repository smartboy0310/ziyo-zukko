import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import cloud from '../../Assets/images/cloud.png';
const data = [500, 25, 50];
function HomeAbout({localization}) {

// 	const [data, setData] = useState()

// 	useEffect(() => {
// 		fetch('https://school.my-portfolio.uz/general')
// 			 .then(res => res.json())
// 			 .then(data => lang == 'uz' ? setData(data.data.uz[0]) : setData(data.data.ru[0]))
// 			 .catch((e) => console.log(e))
//   }, [])
//   console.log(data);

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
						{localization.title}
					</h2>
					<ul className="homeabout__list">
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{`${data[0]} +`}</p>
								<h3 className="item__heading">
									{localization.students} 
								</h3>
							</div>
						</li>
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{data[1]}</p>
								<h3 className="item__heading">
									{localization.rooms} 
								</h3>
							</div>
						</li>
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{data[2]}</p>
								<h3 className="item__heading">
									{localization.teacher} 
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
