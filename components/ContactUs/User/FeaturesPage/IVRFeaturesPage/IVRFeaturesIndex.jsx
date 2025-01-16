import React from 'react'
import IVRFeaturesHero from './IVRFeaturesHero'
import Footer from '@/components/Footer'
import IVRQuestion from './IVRQuestion'
import IVRKeyFeatures from './IVRKeyFeatures'
import IVRKeyBenefits from './IVRKeyBenefits'
import IVRUseCases from './IVRUseCases'

const IVRFeaturesIndex = () => {
  return (
    <div>
      <IVRFeaturesHero />
      <IVRQuestion />
      <IVRKeyFeatures />
      <IVRKeyBenefits />
      <IVRUseCases />
      <Footer />
    </div>
  )
}

export default IVRFeaturesIndex
