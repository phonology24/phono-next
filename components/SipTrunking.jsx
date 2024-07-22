"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import SIPTrunkingHeading from './SipTrunking/SipHeader'
import DemoForm from '../components/DemoRequestForm'
import Footer from '../components/Footer'
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards'
import SipSubHeader from './SipTrunking/SipSubHeader'
import TwoCardsSip from './SipTrunking/TwoCardsSip'
const SipTrunking = () => {
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
  // const additionalComponents = scrollY > 200 ? : null;


  return (
    <div>

      <SIPTrunkingHeading />
      <SipSubHeader />
      <TwoCardsSip />
            <HostedPbxCards />
      <DemoForm />
      <Footer />

    </div>
  )
}

export default SipTrunking
