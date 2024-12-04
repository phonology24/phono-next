import CombinedLayout from '@/components/ContactUs/User/CombinedLayout'
import ContactUsCategories from '@/components/ContactUs/User/ContactUsCategories'
import ResourceLinks from '@/components/ContactUs/User/ResourceLinks'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <ContactUsCategories/> */}
      <CombinedLayout/>
      <Footer/>
      {/* <ResourceLinks/> */}
    </div>
  )
}

export default page
