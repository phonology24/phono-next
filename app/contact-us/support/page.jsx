import QuickFindTopics from '@/components/ContactUs/User/QuickFindTopics'
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
      {/* <ContactUsCategories/> */}
      <Footer/>
      {/* <ResourceLinks/> */}
    </div>
  )
}

export default page
