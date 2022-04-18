import React from 'react'
import HomeAbout from './HomeAbout'
import HomeAd from './HomeAd'
import HomeHero from './HomeHero'
import HomeChouse from './HomeChouse'
import HomeGallery from './HomeGallery'
import HomeAchievements from './HomeAchievements'
import HomeNews from './HomeNews'
import HomeForm from './HomeForm'


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
      <HomeForm />
    </>
  )
}

export default HomePage
