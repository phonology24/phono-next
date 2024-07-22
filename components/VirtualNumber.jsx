"use client"
import React from 'react'
import Header from './Virtual-Numbers/Header'
import SubHeadingVirtualNumbers from './Virtual-Numbers/SubHeadingVirtualNumbers'
// import HowItWorks from './Virtual-Numbers/HowItWorks'
import VirtualNumberCards from './Virtual-Numbers/VirtualNumberCards'
import Footer from '../components/Footer'

import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
import DemoForm from '../components/DemoRequestForm'
const VirtualNumber = () => {
  return (
    <div>
      <Header />
      
      <SubHeadingVirtualNumbers />
      <VirtualNumberCards />
      <HostedPbxCards />
      <DemoForm />
      <Footer />
    </div>
  )
}

export default VirtualNumber
