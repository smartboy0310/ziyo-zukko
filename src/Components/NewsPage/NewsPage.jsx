import React from 'react';
import NewsHero from './NewsHero';
import NewsInfo from './NewsInfo';
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';

function NewsPage() {

	const {
		count: { lang },
	} = useSelector((state) => state);

	const { news } = Content[lang];

	return (
		<>
			<NewsHero localization = { news.hero } />
			<NewsInfo localization = { news.info }/>
		</>
	);
}

export default NewsPage;
