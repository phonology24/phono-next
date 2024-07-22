"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import DirectRoutingHeading from './DirectRouting/DirectRoutingHeader'
import Footer from '../components/Footer'
import DemoForm from '../components/DemoRequestForm'
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
import DirectRouteConnection from './DirectRouting/DirectRouteConnection'
const DirectRouting = () => {
  return (
    <div>
      <DirectRoutingHeading />
      <HostedPbxCards />
      <DirectRouteConnection /> 
            <DemoForm />
      <Footer />

    </div>
  )
}

export default DirectRouting
