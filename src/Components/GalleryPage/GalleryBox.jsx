import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import pageBtn from '../../Assets/images/page_btn.png';



function GalleryBox( { langTitle }) {
	const {
		count: { lang },
	} = useSelector((state) => state);

	const [dataFetch, setDataFetch] = useState()
	let data = []

	useEffect(() => {
		fetch('https://school.my-portfolio.uz/photo')
			 .then(res => res.json())
			 .then(data => setDataFetch(data.data))
			 .catch((e) => console.log(e))
  }, [])
if(lang == 'uz' ) {
	data = dataFetch?.uz
}
else {
	data = dataFetch?.ru
}
	const [modalOpen, setModalOpen] = useState(false);
	const [indexImg, setIndexImg] = useState();
	
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

	console.log(pageData, data);

	const openModal = (e) => {
		setModalOpen(true);
		setIndexImg(e.target.dataset.imgId - 0);
	};
	const closeModal = () => {
		setModalOpen(false);
	};

	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`;
	};
	
	return (
		<>
			 <h2 className="gallery-info__heading"> {langTitle} </h2>
			<ul className="gallery-box__box">
				{
            pageData &&
					pageData.map((e, i) => (
						<li 
							key={i}
							className="gallery-box__img-box"
							onMouseUp={openModal}
						>
							<Image
								loader={() => e.photo_url}
								data-img-id={i + 1}
								className="gallery-box__img"
								src={e.photo_url}
								alt="Photo gallery"
								width={250}
								height={300}
								layout='intrinsic'
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
			<div
				onClick={closeModal}
				className={
					modalOpen
						? 'home-gallery__modal active__gallery__modal'
						: 'home-gallery__modal'
				}
			>
				<div 
					onClick={closeModal}
					className="model__box">
					
						{
							indexImg && <Image
							onClick={closeModal}
							loader={() => pageData[indexImg - 1]?.photo_url}
							className="modal__img modal__img-single"
							src={pageData[indexImg - 1]?.photo_url}
							alt="Photo gallery"
							width={700}
							height={600}
						/>
}
					
				</div>
			</div>
		</>
	);
}
export default GalleryBox;
