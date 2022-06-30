import React from 'react'
import GalleryHero from './GalleryHero'
import GalleryInfo from './GalleryInfo'
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';

function GalleryPage() {

  const {
		count: { lang },
	} = useSelector((state) => state);

	const { photogallery: pg } = Content[lang];

  return (
    <>
       <GalleryHero localization = { pg.hero } />
       <GalleryInfo localization = { pg.info } photoLoc = {pg.photo_title} videoLoc = {pg.video_title} />
    </>
  )
}

export default GalleryPage
