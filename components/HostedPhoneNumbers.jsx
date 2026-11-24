"use client";
import React from 'react';
// Plain imports so the page HTML is rendered on the server and search engines can read it.
import HostedPhoneNumberHeader from './HostedNumbers/HostedPhoneNumbersHeading';
import Footer from '../components/Footer';
import DemoForm from '../components/DemoRequestForm';
import HostedNumbersTwoCards from './HostedNumbers/HostedNumbersTwoCards';
import HostedPbxCards from '../components/HostedNumbers/HostedPbxCards';

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
