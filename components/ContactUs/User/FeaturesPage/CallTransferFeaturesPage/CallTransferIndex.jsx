import React from 'react'
import CallTransferHero from './CallTransferHero'
import CallTransferQuestion from './CallTransferQuestion'
import Footer from '@/components/Footer'
import CallForwardKEyFeatures from '../CallForwardingFeatures/CallForwardKEyFeatures'
import CallTransferBenefits from './CallTransferBenefits'
import CallTransferFeatures from './CallTransferFeatures'
import CallTransferUseCases from './CallTransferUseCases'

const CallTransferIndex = () => {
  return (
    <div>
      <CallTransferHero />
      <CallTransferQuestion />
      <CallTransferFeatures />
      <CallTransferBenefits />
      <CallTransferUseCases />
      <Footer />
    </div>
  )
}

export default CallTransferIndex
