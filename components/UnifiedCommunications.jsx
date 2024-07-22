import React from 'react'
import CommunicationsHeader from './Unified-Communications/Communications-Header'
import CommunicationsTwoCards from './Unified-Communications/CommunicationTwoCards'
import HowItWorks from './Unified-Communications/HowItWorks'
import Footer from '../components/Footer'
import DemoForm from '../components/DemoRequestForm'
import PainPoints from './Unified-Communications/PainPoints'
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
const UnifiedCommunications = () => {
  return (
    <div>
      <CommunicationsHeader />
      <CommunicationsTwoCards />
      <HowItWorks />
      <PainPoints />
      <HostedPbxCards />
      <DemoForm />
            <Footer />
    </div>
  )
}

export default UnifiedCommunications
