import React from 'react'
import FeaturesHero from './FeaturesHero'
import Question from './Question'
import KeyFeatures from './KeyFeatures'
import KeyBenefits from './KeyBenefits'
import UseCases from './UseCases'
import Footer from '@/components/Footer'

const FeatureIndex = () => {
  return (
    <div>
      <FeaturesHero/>
      <Question/>
      <KeyFeatures/>
      <KeyBenefits/>
      <UseCases/> 
      <Footer/>
    </div>
  )
}

export default FeatureIndex
