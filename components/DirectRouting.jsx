"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import DirectRoutingHeading from './DirectRouting/DirectRoutingHeader'
import Footer from '../components/Footer'
import DemoForm from '../components/DemoRequestForm'
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
import DirectRouteConnection from './DirectRouting/DirectRouteConnection'

const DirectRouting = () => {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const additionalComponents = scrollY > 400 ? : null;
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
