import React from 'react'
import HomeAbout from './HomeAbout'
import HomeAd from './HomeAd'
import HomeHero from './HomeHero'
import HomeChouse from './HomeChouse'
import HomeGallery from './HomeGallery'
import HomeAchievements from './HomeAchievements'
import HomeNews from './HomeNews'
import HomeForm from './HomeForm'
import HomeVideo from './HomeVideo'
import HomePartner from './HomePartner'
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';



const HomePage = () => {
  const {
		count: { lang },
	} = useSelector((state) => state);
	const { home: h } = Content[lang];
  return (
    <>
      <HomeHero localization = {h.hero} />
      <HomeAbout localization = {h.about} />
      <HomeAd localization = {h.ad} />      
      <HomeChouse localization = {h.chouse} />
      <HomeAchievements localization = {h.win} />      
      <HomeVideo localization = {h.video} />
      <HomeGallery localization = {h.photo} />
      <HomeNews localization = {h.new} />
      <HomePartner localization = {h.partner} />
      <HomeForm localization = {h.contact} />
    </>
  )
}

export default HomePage
