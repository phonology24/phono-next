import React from 'react'
import HostedPhoneNumbers from '@/components/HostedPhoneNumbers'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Hosted PBX | Cloud PBX | IP PBX |Providers in India',
  description: 'Phonology Hosted PBX, Cloud PBX, and IP PBX solutions. Elevate your business with our advanced telephony services tailored for modern connectivity needs, 24x7 Support, and a free trial option.',
  keywords: 'hosted pbx,cloud pbx,cloud phone system,cloud hosted phone system,hosted voip,cloud communications,cloud pbx system,cloud pbx phone system,hosted ip pbx,cloud pbx sytem,hosted pbx voip,hosted pbx phone,fonality hosted pbx,cloud pbx explained,cloud pbx phone sytem,pbx cloud,benefits of hosted pbx,cloud voip',
  alternates: {
    canonical: 'https://www.phonology.io/hosted-pbx-providers',
}
};


const page = () => {
  return (
    <div>
      <HostedPhoneNumbers/>
    </div>
  )
}

export default page
