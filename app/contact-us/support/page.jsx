import CombinedLayout from '@/components/ContactUs/User/CombinedLayout'
import ContactUsCategories from '@/components/ContactUs/User/ContactUsCategories'
import QuickFindTopics from '@/components/ContactUs/User/QUickFindTopics'
import ResourceLinks from '@/components/ContactUs/User/ResourceLinks'
import SupportPage from '@/components/ContactUs/User/SupportPage'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <ContactUsCategories/> */}
      {/* <CombinedLayout/> */}
      <SupportPage/>
      <QuickFindTopics/>
      <ContactUsCategories/>
      <Footer/>
      {/* <ResourceLinks/> */}
    </div>
  )
}

export default page
