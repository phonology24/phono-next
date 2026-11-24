import ContactUsIndex from '@/components/ContactUs/ContactUsIndex'
import React from 'react'

export const metadata = {
  title: 'Contact Phonology | VoIP, SIP Trunking and Virtual Numbers',
  description: 'Talk to Phonology sales or support about SIP trunks, international calling, virtual numbers and cloud telephony. Office in Bengaluru.',
  alternates: { canonical: '/contact-us' },
};

const page = () => {
  return (
    <div >
      <ContactUsIndex/>
    </div>
  )
}

export default page
