import React from 'react'
import CallForwardingFeaturesHero from './CallForwardingFeaturesHero'
import Footer from '@/components/Footer'
import CallForwardingQuestion from './CallForwardingQuestion'
import CallForwardKEyFeatures from './CallForwardKEyFeatures'
import CallForwardingKeyBenefits from './CallForwardingKeyBenefits'
import CallForwardingUseCases from './CallForwardingUseCases'

const CallForwardingINdex = () => {
  return (
    <div>
      <CallForwardingFeaturesHero />
      <CallForwardingQuestion />
      <CallForwardKEyFeatures />
      <CallForwardingKeyBenefits />
      <CallForwardingUseCases />
      <Footer />
    </div>
  )
}

export default CallForwardingINdex
