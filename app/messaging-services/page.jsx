import React from 'react'
import SipTrunking from '@/components/SipTrunking'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Sip Trunk Providers | SIP Trunking Solutions ',
  description: 'Explore top-tier SIP trunking solutions with Phonology, your trusted SIP trunk provider. Streamline your communication infrastructure with reliable, scalable, and cost-efficient SIP trunking services tailored to your business requirements.',
  keywords: 'sip trunking,sip trunking explained,what is sip trunking,sip,sip trunk,sip trunking for dummies,sip trunks,sip trunking vs voip,what is a sip trunk,trunking,pbx sip trunking,global sip trunking,softtop sip trunking,sip trunking service,explain sip trunking,elastic sip trunking,sip trunking benefits,sip trunking provider,business sip trunking,wholesale sip trunking,call center sip trunking,sip trunking applications,understanding sip trunking',
  alternates: {
    canonical: 'https://www.phonology.io/sip-trunk-providers',
}
};const page = () => {
  return (
    <div>
      <SipTrunking/>
    </div>
  )
}

export default page