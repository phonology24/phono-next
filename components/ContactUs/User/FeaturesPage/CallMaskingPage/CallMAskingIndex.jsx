import React from 'react'
import CallMaskingFeaturesHero from './CallMaskingFeaturesHero'
import CallMaskingQuestion from './CallMaskingQuestion'
import CallMaskingFeatures from './CallMaskingFeatures'
import Footer from '@/components/Footer'
import CallMaskingUseCases from './CallMaskingUseCases'
import CallMaskingBenefits from './CallMaskingBenefits'

const CallMAskingIndex = () => {
  return (
    <div>
      <CallMaskingFeaturesHero />
      <CallMaskingQuestion />
      <CallMaskingFeatures />
      <CallMaskingBenefits />
      <CallMaskingUseCases />
      <Footer />
    </div>
  )
}

export default CallMAskingIndex
