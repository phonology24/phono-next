import React from 'react'
import UifnHeader from './Uifn/Uifn-header'
import UifnTwoCards from './Uifn/Uifn-twoCards'
import UifnHowItWorks from './Uifn/Uifn-howItWorks'
import UifnPainPoints from './Uifn/Uifn-Points'
import Footer from 'react-bootstrap-modal/lib/Footer'

const UifnPage = () => {
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

export default UifnPage
