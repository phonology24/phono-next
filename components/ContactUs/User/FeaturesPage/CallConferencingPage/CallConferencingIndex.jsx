import React from 'react'
import CallConferencingHero from './CallConferencingHero'
import CallConferencingQuestion from './CallConferencingQuestion'
import CallConferencingFeatures from './CallConferencingFeatures'
import CallConferenceBenefits from './CallConferenceBenefits'
import CallConferenceUSeCases from './CallConferenceUSeCases'
import Footer from '@/components/Footer'

const CallConferencingIndex = () => {
  return (
    <div>
      <CallConferencingHero/> 
      <CallConferencingQuestion /> 
      <CallConferencingFeatures />
      <CallConferenceBenefits />
      <CallConferenceUSeCases />
      <Footer />
    </div>
  )
}

export default CallConferencingIndex
