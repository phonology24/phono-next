import React from 'react'
import VoiceMailFeaturesHero from './VoiceMailFeaturesHero'
import VoiceMAilFefaturesQuestion from './VoiceMAilFefaturesQuestion'
import VoiceKeyFeatures from './VoiceKeyFeatures'
import VoiceKeyBenefits from './VoiceKeyBenefits'
import VoiceMailUseCases from './VoiceMailUseCases'
import Footer from '@/components/Footer'

const VoicemailFeaturesIndex = () => {
  return (
    <div>
      <VoiceMailFeaturesHero />
      <VoiceMAilFefaturesQuestion />
      <VoiceKeyFeatures />
      <VoiceKeyBenefits />
      <VoiceMailUseCases />
      <Footer />
    </div> 
  )
}

export default VoicemailFeaturesIndex
