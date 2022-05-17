import React from 'react'
import ContactForm from './ContactForm'
import ContactHero from './ContactHero'
import ContactInfo from './ContactInfo'
import ContactLocation from './ContactLocation'

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactLocation /> 
      <ContactForm />     
    </>
  )
}

export default ContactPage
