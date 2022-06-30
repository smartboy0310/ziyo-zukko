import React from 'react'
import ContactForm from './ContactForm'
import ContactHero from './ContactHero'
import ContactInfo from './ContactInfo'
import ContactLocation from './ContactLocation'
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';

function ContactPage() {

  const {
		count: { lang },
	} = useSelector((state) => state);

	const { contact } = Content[lang];

  return (
    <>
      <ContactHero localization = {contact.hero} />
      <ContactInfo localization = {contact.info} />
      <ContactLocation localization = {contact.location} /> 
      <ContactForm localization = {contact.formData} />     
    </>
  )
}

export default ContactPage
