import React from 'react'
import CallRecordingFeaturesHero from './CallRecordingFeaturesHero'
import Footer from '@/components/Footer'
import CallRecQuestion from './CallRecQuestion'
import CallRecFeatures from './CallRecFeatures'

const CallRecordingIndex = () => {
  return (
    <div>
      <CallRecordingFeaturesHero />
      <CallRecQuestion />
      <CallRecFeatures />
      <Footer />
    </div>
  )
}

export default CallRecordingIndex
