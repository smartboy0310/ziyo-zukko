import React from 'react'
import HomeAbout from './HomeAbout'
import HomeAd from './HomeAd'
import HomeHero from './HomeHero'
import HomeChouse from './HomeChouse'
import HomeGallery from './HomeGallery'
import HomeAchievements from './HomeAchievements'
import HomeNews from './HomeNews'


const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeAd />
      <HomeChouse />
      <HomeAchievements />
      <HomeGallery />
      <HomeNews />
    </>
  )
}

export default HomePage
