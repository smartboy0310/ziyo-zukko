import React from 'react'
import AboutHero from './AboutHero'
import AboutWhoWe from './AboutWhoWe'
import Employees from './Employees'
import Management from './Management'
import OurActivity from './OurActivity'
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';

function AboutPage() {

    const {
	  	count: { lang },
	  } = useSelector((state) => state);

	  const { about: a } = Content[lang];

  return (
    <>
      <AboutHero localization = {a.hero} />
      <AboutWhoWe localization = {a.about}/>
      <OurActivity localization = {a.activity} />
      <Management localization = {a.management}/>
      <Employees localization = {a.employees}/>
    </>
  )
}

export default AboutPage
