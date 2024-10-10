import React from 'react'
import UifnHeader from '../components/Uifn/UifnHeader'
import UifnTwoCards from '../components/Uifn/UifnTwoCards'
import UifnHowItWorks from '../components/Uifn/UifnHowItWorks'
import UifnPainPoints from '../components/Uifn/UifnPoints'
import Footer from './Footer'

const UifnPage = () => {
    return (
        <div>
            <UifnHeader />
            <UifnTwoCards />
            <UifnHowItWorks />
            <UifnPainPoints />
            <Footer />
        </div>
    )
}

export default UifnPage
