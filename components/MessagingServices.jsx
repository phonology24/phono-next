"use client"
import React from 'react'
import Header from './MessagingServices/Header'
import MessagingServicesCards from './MessagingServices/MesasgingServicesCard'
import Footer  from '../components/Footer'
import SixTextCards from './MessagingServices/SixCards'
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
import DemoForm from '../components/DemoRequestForm'

const MessagingServices = () => {
  return (
    <div>
      <Header />
      <MessagingServicesCards />
      <SixTextCards />
      <HostedPbxCards />
      {/* <DemoForm /> */}
      <Footer />
    </div>
  )
}

export default MessagingServices
