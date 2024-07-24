import React from 'react'
import VirtualNumber from '@/components/VirtualNumber.jsx'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Virtual Phone Number Providers',
  description: 'Unlock the power of seamless communication with the top virtual phone number providers. Elevate your business connectivity with reliable, feature-rich solutions tailored to your needs. Explore our comprehensive range of services and take your communication strategy to new heights today.',
  keywords: 'virtual numbers,virtual number,number virtual,ca virtual number,uk virtual number,free virtual numbers,virtual phone numbers,local virtual numbers,usa virtual number,buy virtual number,get virtual number,buy number virtual,free virtual number,free number virtual,number virtual free,virtual number free,virtual phone number sms,virtual phone number,onoff number virtual,virtual dubai number,virtualphonenumber,virtual mobile number',
  alternates: {
    canonical: 'https://www.phonology.io/virtual-phone-number-providers',
}
};

const page = () => {
  return (
    <div>
      <VirtualNumber/>
    </div>
  )
}

export default page
