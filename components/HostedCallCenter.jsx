"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import HostedCallCenterHeading from './HostedCallCenter/HostedCallCenterHeading'
import Footer from '../components/Footer'
import DemoForm from '../components/DemoRequestForm'
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
import HostedCallCenterSubHeading from './HostedCallCenter/hostedCallCenterSubHeading'
import { Helmet } from 'react-helmet';

const HostedCallCenter = () => {


  return (
    <div>
   
      <HostedCallCenterHeading />
      <HostedPbxCards />
      <HostedCallCenterSubHeading /> 
      <DemoForm />

      <Footer />
    </div>
  )
}

export default HostedCallCenter
