import React from 'react'
import DirectRouting from '@/components/DirectRouting'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Microsoft Teams Direct Routing Service Provider',
  description: 'Microsoft Teams Direct Routing allows you to connect with ease. Our guide offers step-by-step instructions to optimize your communication and collaboration.',
  keywords: 'direct routing,direct routing cubase,direct routing as a service,microsoft teams direct routing,microsoft teams phone system direct routing,direct routing demo,microsoft direct routing,routing for ms teams,what is direct routing as a service,pro tips for direct routing & e911 | odfp116,cubase bus routing,operator connect vs direct routing as a service,should our company do operator connect or direct routing',
};

const page = () => {
  return (
    <div>
      <DirectRouting/>
    </div>
  )
}

export default page
