import React from 'react'
import HostedCallCenter from '@/components/HostedCallCenter'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Virtual Call Center Software | Call Center Solutions | Call Center Solution Provider',
  description: 'Phonology Virtual Call Center Software Explore comprehensive Call Center Solutions tailored to your business needs. As your trusted Call Center Solution Provider, we ensure seamless communication and exceptional service delivery.',
  keywords: 'hosted call center,call center,call center software,hosted call center pricing,cloud based call center phone system,hosted call centre,virtual call center software,telax hosted call center,contact center,call center hardware,hosted contact center,cloud call center,cloud based call center,top hosted call center,call center solution,oracle hosted call center,what is hosted call center,contact center vs call center',
};

const page = () => {
  return (
    <div>
      <HostedCallCenter/>
    </div>
  )
}

export default page
