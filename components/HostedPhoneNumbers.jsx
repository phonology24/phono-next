"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const HostedPhoneNumberHeader = dynamic(() => import('./HostedNumbers/HostedPhoneNumbersHeading'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const DemoForm = dynamic(() => import('../components/DemoRequestForm'), { ssr: false });
const HostedNumbersTwoCards = dynamic(() => import('./HostedNumbers/HostedNumbersTwoCards'), { ssr: false });
const HostedPbxCards = dynamic(() => import('../components/HostedNumbers/HostedPbxCards'), { ssr: false });

const HostedPhoneNumbers = () => {
  return (
    <div>
      <HostedPhoneNumberHeader />
      <HostedPbxCards />
      <HostedNumbersTwoCards />
      <DemoForm />
      <Footer />
    </div>
  );
};

export default HostedPhoneNumbers;
