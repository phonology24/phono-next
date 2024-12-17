"use client"
import React from 'react'
import ContactUsHero from './ContactUsHero'
import Footer from '../Footer'
import TalkToSales from './TalkToSales'
import OurOffices from './OurOffices'

const ContactUsIndex = () => {
  return (
    <div className='contactusIndex'>
      <ContactUsHero />
      <TalkToSales/>
      <OurOffices/>
      <Footer/>
    </div>
  )
}

export default ContactUsIndex
