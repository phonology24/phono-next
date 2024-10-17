"use client"
import React from 'react'
import UifnHeader from '../components/Uifn/UifnHeader'
import UifnTwoCards from '../components/Uifn/UifnTwoCards'
import UifnHowItWorks from '../components/Uifn/UifnHowItWorks'
import UifnPainPoints from '../components/Uifn/UifnPoints'
import Footer from './Footer'
import HowItWorks from './Unified-Communications/HowItWorks'
import HostedPbxCards from './HostedNumbers/HostedPbxCards'

const UifnPage = () => {
    return (
        <div>
            <UifnHeader />
            <UifnTwoCards />
            <UifnHowItWorks />
            <HostedPbxCards/>
            <Footer />
        </div>
    )
}

export default UifnPage
