import React from 'react'
import CallQueuingHero from './CallQueuingHero'
import CallQueueQuestion from './CallQueueQuestion'
import CallQueueingFeatures from './CallQueueingFeatures'
import CallQueueingBenefits from './CallQueueingBenefits'

const CallQueueingIndex = () => {
  return (
    <div>
      <CallQueuingHero />
      <CallQueueQuestion />
      <CallQueueingFeatures />
      <CallQueueingBenefits />
    </div>
  )
}

export default CallQueueingIndex
