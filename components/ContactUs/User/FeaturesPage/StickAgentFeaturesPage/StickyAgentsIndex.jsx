import React from 'react'
import StickyAgentsHero from './StickyAgentsHero'
import StickAgentQuestion from './StickAgentQuestion'
import StickyAgentFeatures from './StickyAgentFeatures'
import StickyAgentBenefits from './StickyAgentBenefits'
import StickyAgentUseCases from './StickyAgentUseCases'
import Footer from '@/components/Footer'

const StickyAgentsIndex = () => {
  return (
    <div>
      <StickyAgentsHero/>
      <StickAgentQuestion />
      <StickyAgentFeatures />
      <StickyAgentBenefits />
      <StickyAgentUseCases />
      <Footer />
    </div>
  )
}

export default StickyAgentsIndex
