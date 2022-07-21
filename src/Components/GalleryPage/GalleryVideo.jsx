import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import pageBtn from '../../Assets/images/page_btn.png';

function GalleryVideo({ langTitle }) {
	const {
		count: { lang },
	} = useSelector((state) => state);

	const [dataFetch, setDataFetch] = useState();
	let data = [];
	useEffect(() => {
		fetch('https://school.my-portfolio.uz/video')
			.then((res) => res.json())
			.then((data) => setDataFetch(data.data))
			.catch((e) => console.log(e));
	}, []);
	if (lang == 'uz') {
		data = dataFetch?.uz;
	} else {
		data = dataFetch?.ru;
	}

	const [page, setPage] = useState(0);
	let pageLeng = Math.ceil((data?.length - 1) / 12);

	const pageIndex = [];
	for (let i = 0; i < pageLeng; i++) [pageIndex.push(i)];

	const BackPage = () => {
		if (page != 0) {
			setPage(page - 1);
		} else {
			setPage(pageLeng - 1);
		}
	};
	const NextPage = () => {
		if (page != pageLeng - 1) {
			setPage(page + 1);
		} else {
			setPage(0);
		}
	};

	const CheckPage = (e) => {
		setPage(e.target.dataset.pageId - 0);
	};
	let pageData = data?.slice((page - 0) * 12, (page + 1) * 12);

	
	return (
		<>
			<h2 className="gallery-video__heading gallery-info__heading">
				{langTitle}
			</h2>
			<ul className="gallery-box__box gallery_video">
				{pageData &&
					pageData.map((e, i) => (
						<li
							key={i}
							className="gallery-box__img"
						>
							<iframe
								className={'gallery_video__iframe'}
								width="250"
								height="250"
								src={e.video_url}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</li>
					))}
			</ul>
			<div className="employees__pagenation">
				<ul className="employees__pagenation__list">
					<li
						onClick={BackPage}
						className="employees__pagenation__item"
					>
						<button className="employees__pagenation__button">
							<Image
								className="employees__btn__img back"
								src={pageBtn}
								alt='back btn icon'
								width={20}
								height={20}
							/>
						</button>
					</li>
					{pageIndex.map((e, i) => (
						<li
							key={i}
							onClick={CheckPage}
							className="employees__pagenation__item "
						>
							<button
								data-page-id={i}
								className={
									page == i
										? 'employees__pagenation__button pagenation pageClick'
										: 'employees__pagenation__button pagenation'
								}
							>
								{e + 1}
							</button>
						</li>
					))}
					<li
						onClick={NextPage}
						className="employees__pagenation__item"
					>
						<button className="employees__pagenation__button">
							<Image
								className="employees__btn__img"
								src={pageBtn}
								alt='next btn icon'
								width={20}
								height={20}
							/>
						</button>
					</li>
				</ul>
			</div>
		</>
	);
}
export default GalleryVideo;
