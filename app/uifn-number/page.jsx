import React from 'react'
import UifnHeader from '@/components/uifn/Uifn-header'
import UifnTwoCards from '@/components/uifn/Uifn-twoCards'
import UifnHowItWorks from '@/components/uifn/Uifn-howItWorks'
import UifnPainPoints from '@/components/uifn/Uifn-Points'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
      <UifnHeader />
      <UifnTwoCards/>
      <UifnHowItWorks/>
      <UifnPainPoints/>
      <Footer/>
    </div>
  )
}

export default page
