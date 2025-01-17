import React from 'react'
import CallWhisperingHero from './CallWhisperingHero'
import CallWhisperingQuestion from './CallWhisperingQuestion'
import CallWhisperingFeatures from './CallWhisperingFeatures'
import CallWhisperingBenefits from './CallWhisperingBenefits'
import CallWhisperingUseCases from './CallWhisperingUseCases'
import Footer from '@/components/Footer'

const CallWhisperingIndex = () => {
  return (
    <div>
      <CallWhisperingHero />
      <CallWhisperingQuestion />
      <CallWhisperingFeatures />
      <CallWhisperingBenefits />
      <CallWhisperingUseCases />
      <Footer />
    </div>
  )
}

export default CallWhisperingIndex
