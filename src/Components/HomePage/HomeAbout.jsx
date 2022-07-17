import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import cloud from '../../Assets/images/cloud.png';

function HomeAbout({localization}) {

	const {
		count: { lang },
	} = useSelector((state) => state);

	const [data, setData] = useState()

	useEffect(() => {
		fetch('https://school.my-portfolio.uz/about')
			 .then(res => res.json())
			 .then(data => lang == 'uz' ? setData(data?.data.uz) : setData(data?.data.ru))
			 .catch((e) => console.log(e))
  }, [lang])
  
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
								<p className="item__count">{data && data[0].about_count}+</p>
								<h3 className="item__heading">
									{localization.students} 
								</h3>
							</div>
						</li>
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{ data && data[1].about_count}</p>
								<h3 className="item__heading">
									{localization.rooms} 
								</h3>
							</div>
						</li>
						<li className="homeabout__item">
							<div className="item__info">
								<p className="item__count">{data && data[2].about_count}</p>
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
