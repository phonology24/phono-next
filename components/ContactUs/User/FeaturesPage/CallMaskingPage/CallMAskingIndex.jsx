import React from 'react'
import CallMaskingFeaturesHero from './CallMaskingFeaturesHero'
import CallMaskingQuestion from './CallMaskingQuestion'
import CallMaskingFeatures from './CallMaskingFeatures'
import Footer from '@/components/Footer'
import CallMaskingUseCases from './CallMaskingUseCases'

const CallMAskingIndex = () => {
  return (
    <div>
      <CallMaskingFeaturesHero />
      <CallMaskingQuestion />
      <CallMaskingFeatures />
      <CallMaskingUseCases />
      <Footer />
    </div>
  )
}

export default CallMAskingIndex
