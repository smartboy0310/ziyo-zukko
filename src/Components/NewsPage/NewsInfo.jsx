import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import pageBtn from '../../Assets/images/page_btn.png';
import { Context } from '../../Context/GlobalState';
import activeCategory from '../../Assets/images/category_active.png'

const data = [
	{
		id: 1,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '18.04.2022',
	},
	{
		id: 2,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 3,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '12.04.2022',
	},
	{
		id: 4,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '23.04.2022',
	},
	{
		id: 5,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '24.04.2022',
	},
	{
		id: 6,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 7,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '13.04.2022',
	},
	{
		id: 8,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 9,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '18.04.2022',
	},
	{
		id: 10,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 11,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '18.04.2022',
	},
	{
		id: 12,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 13,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '18.04.2022',
	},
	{
		id: 14,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 15,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '12.04.2022',
	},
	{
		id: 16,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '23.04.2022',
	},
	{
		id: 17,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '24.04.2022',
	},
	{
		id: 18,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 19,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '13.04.2022',
	},
	{
		id: 20,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 21,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '18.04.2022',
	},
	{
		id: 22,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
	{
		id: 23,
		name: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
		title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/300X400',
		create_at: '18.04.2022',
	},
	{
		id: 24,
		name: 'Lorem ipsum dolor sit',
		title: 'Assalomu alaykum. Non doloremque sint quo modi voluptatibus quas distinctio numquam doloribus excepturi vel.',
		img: 'https://via.placeholder.com/301X400',
		create_at: '15.04.2022',
	},
];

function NewsInfo() {
	const { newSingle, setNewSingle } = useContext(Context);
	const [page, setPage] = useState(0);
	const [selectCategory, setSelectCategory] = useState();
	let pageLeng = Math.ceil((data.length - 1) / 5);

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
	let pageData = data.slice((page - 0) * 5, (page + 1) * 5);
	const SelectNew = (e) => {
		const foundNewId = e.target.dataset.newId;
		const foundNew = data.find((e) => e.id == foundNewId);
		setNewSingle(foundNew.id);
	};
	const checkCategory = (e) => {
		setSelectCategory(e.target.dataset.categoryId)
	}
	
	return (
		<>
			<section className="news-info">
				<div className="contact__top"></div>
				<div className="container">
					<h2 className="news-info__heading">Yangiliklar</h2>
					<div className="news-info__box">
						<ul className="news-info__list">
							{pageData &&
								pageData.map((e, i) => (
									<li className="news-info__item" key={i} >
										<div className="news-info__img-box">
											<img
												className="news-info__img"
												src={e.img}
												alt="new info"
												width={220}
												height={270}
											/>
										</div>
										<div 
											data-new-id = {e.id}
											className="news-info__info">
											<h2 className="news-info__title">
												{e.name}
											</h2>
											<div className="news-info__created">
												<time
													datatime={e.create_at}
													className="news-info__created__time"
												>
													{e.create_at}
												</time>
											</div>
											<p className="news-info__discription">
												{e.title}
											</p>
											<Link href="/news/single">
												<a 
												onClick={SelectNew}
												data-new-id = {e.id}
												className="news-info__link">
													batafsil...
												</a>
											</Link>
										</div>
									</li>
								))}
						</ul>
						<div className="news-info__search">
							<form className="news-info__form">
								<input
									className="news-search__input"
									type="text"
									name="search-data"
									placeholder="Qidirish..."
								/>
								<button className="news-search__btn">
									<span className="news-search__line"></span>
								</button>
							</form>
							<div className="news-info__recent-posts">
								<h3 className="news-info__recent-posts__heading">
									Soʻnggi xabarlar
								</h3>
								<ul className="recent-posts__list">
									<li className="recent-posts__item">
										<Link href="/news/single">
											<a className="recent-posts__link">
												<div className="recent-posts__img-box">
													<img
														className="recent-posts__img"
														src={data[0].img}
														alt="new info"
														width={120}
														height={120}
													/>
												</div>
												<div className="recent-posts__info">
													<div className="recent-posts__created">
														<time
															datatime={
																data[0]
																	.create_at
															}
															className="recent-posts__created__time"
														>
															{data[0].create_at}
														</time>
													</div>
													<h2 className="recent-posts__title">
														{data[0].name}
													</h2>
												</div>
											</a>
										</Link>
									</li>
									<li className="recent-posts__item">
										<Link href="/news/single">
											<a className="recent-posts__link">
												<div className="recent-posts__img-box">
													<img
														className="recent-posts__img"
														src={data[1].img}
														alt="new info"
														width={120}
														height={120}
													/>
												</div>
												<div className="recent-posts__info">
													<div className="recent-posts__created">
														<time
															datatime={
																data[1]
																	.create_at
															}
															className="recent-posts__created__time"
														>
															{data[1].create_at}
														</time>
													</div>
													<h2 className="recent-posts__title">
														{data[1].name}
													</h2>
												</div>
											</a>
										</Link>
									</li>
									<li className="recent-posts__item">
										<Link href="/news/single">
											<a className="recent-posts__link">
												<div className="recent-posts__img-box">
													<img
														className="recent-posts__img"
														src={data[2].img}
														alt="new info"
														width={120}
														height={120}
													/>
												</div>
												<div className="recent-posts__info">
													<div className="recent-posts__created">
														<time
															datatime={
																data[2]
																	.create_at
															}
															className="recent-posts__created__time"
														>
															{data[2].create_at}
														</time>
													</div>
													<h2 className="recent-posts__title">
														{data[2].name}
													</h2>
												</div>
											</a>
										</Link>
									</li>
									<li className="recent-posts__item">
										<Link href="/news/single">
											<a className="recent-posts__link">
												<div className="recent-posts__img-box">
													<img
														className="recent-posts__img"
														src={data[3].img}
														alt="new info"
														width={120}
														height={120}
													/>
												</div>
												<div className="recent-posts__info">
													<div className="recent-posts__created">
														<time
															datatime={
																data[3]
																	.create_at
															}
															className="recent-posts__created__time"
														>
															{data[3].create_at}
														</time>
													</div>
													<h2 className="recent-posts__title">
														{data[3].name}
													</h2>
												</div>
											</a>
										</Link>
									</li>
									<li className="recent-posts__item">
										<Link href="/news/single">
											<a className="recent-posts__link">
												<div className="recent-posts__img-box">
													<img
														className="recent-posts__img"
														src={data[4].img}
														alt="new info"
														width={120}
														height={120}
													/>
												</div>
												<div className="recent-posts__info">
													<div className="recent-posts__created">
														<time
															datatime={
																data[4]
																	.create_at
															}
															className="recent-posts__created__time"
														>
															{data[4].create_at}
														</time>
													</div>
													<h2 className="recent-posts__title">
														{data[4].name}
													</h2>
												</div>
											</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className="news-info__category">
								<h3 className="news-info__recent-posts__heading">
									Kategoriyalar
								</h3>
								<ul className="news-info__category__list">
									<li data-category-id = {1} className="news-info__category__item" onClick={checkCategory}>
										<div className="category-active">
											<div className="category-active__img">
												{
													selectCategory == 1 && (<Image 
														className='category-active__active'
														src={activeCategory}
														width={10}
														height={9}
														layout='intrinsic'
													/>)
												}
											</div>
										</div>
										<h4 data-category-id = {1} className="category__item__heading" onClick={checkCategory}>
											Yangiliklar
										</h4>
									</li>
									<li data-category-id = {2} className="news-info__category__item" onClick={checkCategory}>
										<div className="category-active">
											<div className="category-active__img">
												{
													selectCategory == 2 && (<Image 
														className='category-active__active'
														src={activeCategory}
														width={10}
														height={9}
														layout='intrinsic'
													/>)
												}
											</div>
										</div>
										<h4 data-category-id = {2} className="category__item__heading" onClick={checkCategory}>
											Maqolalar
										</h4>
									</li>
									<li data-category-id = {3} className="news-info__category__item" onClick={checkCategory}>
										<div className="category-active">
											<div className="category-active__img">
												{
													selectCategory == 3 && (<Image 
														className='category-active__active'
														src={activeCategory}
														width={10}
														height={9}
														layout='intrinsic'
													/>)
												}
											</div>
										</div>
										<h4 data-category-id = {3} className="category__item__heading" onClick={checkCategory}>
											E’lonlar
										</h4>
									</li>
									<li data-category-id = {4} className="news-info__category__item" onClick={checkCategory}>
										<div className="category-active">
											<div className="category-active__img">
												{
													selectCategory == 4 && (<Image 
														className='category-active__active'
														src={activeCategory}
														width={10}
														height={9}
														layout='intrinsic'
													/>)
												}
											</div>
										</div>
										<h4 data-category-id = {4} className="category__item__heading" onClick={checkCategory}>
											Yutuqlarimiz
										</h4>
									</li>
								</ul>
							</div>
						</div>
					</div>
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
				</div>
			</section>
		</>
	);
}

export default NewsInfo;
