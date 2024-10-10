import React from 'react'
import UifnHeader from '@/components/Uifn/Uifn-header'
import UifnTwoCards from '@/components/Uifn/Uifn-twoCards'
import UifnHowItWorks from '@/components/Uifn/Uifn-howItWorks'
import UifnPainPoints from '@/components/Uifn/Uifn-Points'
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
