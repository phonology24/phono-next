import React from 'react'
import TfHero from './TfHero'
import Footer from '@/components/Footer'
import TfQuestions from './TfQuestions'
import TfFeatures from './TfFeatures'
import TfBenefits from './TfBenefits'
import TfUseCases from './TfUseCases'

const TfIndex = () => {
  return (
    <div>
      <TfHero />
      <TfQuestions />
      <TfFeatures />
      <TfBenefits />
      <TfUseCases />
      <Footer />
    </div>
  )
}

export default TfIndex
