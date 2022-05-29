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


const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeAd />      
      <HomeChouse />
      <HomeAchievements />      
      <HomeVideo />
      <HomeGallery />
        {/*<HomeNews />
      <HomePartner />
      <HomeForm /> */}
    </>
  )
}

export default HomePage
