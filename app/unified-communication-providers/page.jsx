import React from 'react'
import UnifiedCommunications from '@/components/UnifiedCommunications'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Unified Communications Providers | Ucaas Providers',
  description: 'A leading UCaaS provider offering tailored unified communications services. Streamline collaboration and connectivity while maximizing productivity with our advanced technology suite. Explore our comprehensive offerings today.',
  keywords: 'unified communications,unified communications as a service,unified communications explained,unified communications providers in berkshire,ucaas,unified communications news,what is unified communications,top unified communications providers,cloud communications,unified communications provider,unified communication,unified communications and collaboration,ucaas unified communications as a service,unified communication done for you',
  alternates: {
    canonical: 'https://www.phonology.io/unified-communication-providers',
}
};

const page = () => {
  return (
    <div>
      <UnifiedCommunications/>
    </div>
  )
}

export default page
