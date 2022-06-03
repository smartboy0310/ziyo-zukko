import Image from 'next/image';
import React, { useState } from 'react';

import closeImg from '../../Assets/images/close_btn.svg';
import pageBtn from '../../Assets/images/page_btn.png';

const data = [
	'https://via.placeholder.com/301X350',
	'https://via.placeholder.com/302X350',
	'https://via.placeholder.com/303X350',
	'https://via.placeholder.com/304X350',
	'https://via.placeholder.com/305X350',
	'https://via.placeholder.com/306X350',
	'https://via.placeholder.com/307X350',
	'https://via.placeholder.com/308X350',
	'https://via.placeholder.com/309X350',
	'https://via.placeholder.com/310X350',
	'https://via.placeholder.com/311X350',
	'https://via.placeholder.com/312X350',
	'https://via.placeholder.com/313X350',
	'https://via.placeholder.com/314X350',
	'https://via.placeholder.com/315X350',
	'https://via.placeholder.com/316X350',
	'https://via.placeholder.com/301X350',
	'https://via.placeholder.com/302X350',
	'https://via.placeholder.com/303X350',
	'https://via.placeholder.com/304X350',
	'https://via.placeholder.com/305X350',
	'https://via.placeholder.com/306X350',
	'https://via.placeholder.com/307X350',
	'https://via.placeholder.com/308X350',
	'https://via.placeholder.com/309X350',
	'https://via.placeholder.com/310X350',
	'https://via.placeholder.com/311X350',
	'https://via.placeholder.com/312X350',
	'https://via.placeholder.com/313X350',
	'https://via.placeholder.com/314X350',
	'https://via.placeholder.com/315X350',
	'https://via.placeholder.com/316X350',
];

function GalleryVideo() {
	const [modalOpen, setModalOpen] = useState(false);
	const [indexImg, setIndexImg] = useState(0);
	
   const [page, setPage] = useState(0);
	let pageLeng = Math.ceil((data.length - 1) / 12);

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
	let pageData = data.slice((page - 0) * 12, (page + 1) * 12);



	const openModal = (e) => {
		setModalOpen(true);
		setIndexImg(e.target.dataset.imgId - 0);
	};
	const closeModal = () => {
		setModalOpen(false);
	};
	return (
		<>
         <h2 className="gallery-video__heading gallery-info__heading"> Video lavhalar</h2>
			<ul className="gallery-box__box">
				{
            pageData &&
					pageData.map((e, i) => (
						<li 
							key={i}
							className="gallery-box__img"
							onMouseUp={openModal}
						>
							<img
								data-img-id={i}
								className="gallery-box__img"
								src={e}
								alt="Photo gallery"
								width={250}
								height={300}
							/>
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
										width={20}
										height={20}
									/>
								</button>
							</li>
						</ul>
					</div>
			<div
				className={
					modalOpen
						? 'home-gallery__modal active__gallery__modal'
						: 'home-gallery__modal'
				}
			>
				<div className="model__box">
					<button
						className="gallery__close__modal"
						onClick={closeModal}
					>
						<Image
							className="gallery__close__img"
							src={closeImg}
							alt="Close modal icon"
							maxwidth={30}
							maxheight={30}
							objectFit="cover"
						/>
					</button>
					
					<div className="home-modal__img">
						<img
							className="modal__img"
							src={data[indexImg]}
							alt="Photo gallery"
							width={400}
							height={500}
						/>
					</div>
					
				</div>
			</div>
		</>
	);
}
export default GalleryVideo;
