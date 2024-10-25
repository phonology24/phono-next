import React from 'react'
import CountryDropdown from '@/components/Get-Phone-Numbers/GetPhoneNumbers'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'International Reach Simplified – Virtual Numbers from 100+ Countries',
  description: 'Expand your business effortlessly with our international virtual numbers. Phonology virtual phone numbers provide seamless global connectivity, ensuring you stay connected with customers worldwide.',
  keywords: 'Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India, ',
  alternates: {
    canonical: 'https://www.phonology.io/get-phone-numbers',
}
};


const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <CountryDropdown/>
    </div>
  )
}

export default page
