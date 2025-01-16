import React from 'react'
import CallRecordingFeaturesHero from './CallRecordingFeaturesHero'
import Footer from '@/components/Footer'
import CallRecQuestion from './CallRecQuestion'
import CallRecFeatures from './CallRecFeatures'
import CallRecBenefits from './CallRecBenefits'
import CallRecUseCases from './CallRecUseCases'

const CallRecordingIndex = () => {
  return (
    <div>
      <CallRecordingFeaturesHero />
      <CallRecQuestion />
      <CallRecFeatures />
      <CallRecBenefits />
      <CallRecUseCases />
      <Footer />
    </div>
  )
}

export default CallRecordingIndex
