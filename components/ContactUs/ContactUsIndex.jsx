"use client"
import React from 'react'
import ContactUsHero from './ContactUsHero'
import Footer from '../Footer'
import TalkToSales from './TalkToSales'

const ContactUsIndex = () => {
  return (
    <div className='contactusIndex'>
      <ContactUsHero />
      <TalkToSales/>
      {/* <OurOffices/> */}
      <Footer/>
    </div>
  )
}

export default ContactUsIndex
