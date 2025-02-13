import React from 'react'
import CallQueuingHero from './CallQueuingHero'
import CallQueueQuestion from './CallQueueQuestion'
import CallQueueingFeatures from './CallQueueingFeatures'
import CallQueueingBenefits from './CallQueueingBenefits'
import CallQueueingUseCases from './CallQueueingUseCases'
import Footer from '@/components/Footer'

const CallQueueingIndex = () => {
  return (
    <div>
      <CallQueuingHero />
      <CallQueueQuestion />
      <CallQueueingFeatures />
      <CallQueueingBenefits />
      <CallQueueingUseCases />
      <Footer />
    </div>
  )
}

export default CallQueueingIndex
