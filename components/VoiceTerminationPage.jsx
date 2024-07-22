import React from 'react'
import HeaderVoiceTermination from './voice-termination/Header'
import SubHeading from './voice-termination/subHeading'
import VoiceTerminationCard from './voice-termination/VoiceTerminationCard'
// import SelfServiceBanner from './voice-termination/SelfServiceBanner'
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
import DemoForm from '../components/DemoRequestForm'
import Footer from './Footer'
const VoiceTerminationPage = () => {
  return (
    <div>
      <HeaderVoiceTermination />
      <SubHeading />
      <VoiceTerminationCard />
      <HostedPbxCards />
      <DemoForm />
      <Footer/>
    </div>
  )
}

export default VoiceTerminationPage
