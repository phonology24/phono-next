import React from 'react'
import CallBargingFeaturesHero from './CallBargingFeaturesHero'
import CallBargingQuestion from './CallBargingQuestion'
import CallBargingFeatures from './CallBargingFeatures'
import Footer from '@/components/Footer'
import CallBargingBenefits from './CallBargingBenefits'
import CallBargingUseCases from './CallBargingUseCases'

const CallBargingIndex = () => {
  return (
    <div>
      <CallBargingFeaturesHero />
      <CallBargingQuestion/>
      <CallBargingFeatures />
      <CallBargingBenefits />
      <CallBargingUseCases />
      <Footer />
    </div>
  )
}

export default CallBargingIndex
