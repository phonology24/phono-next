import React from 'react'
import PostsList from '@/components/Blog/User-Blog-Components/BlogMain'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Phonology Blog Expert Insights and Trends in VoIP Technology',
  description: 'Stay updated with the latest insights and trends in VoIP technology with Phonology blog. Discover expert tips, industry news, and innovative solutions for SIP Trunking, Hosted PBX, Cloud Telephony, and more. Elevate your business communication with Phonology.',
  keywords: 'bulk sms service provider,text messaging service provider,bulk sms service,text messaging provider,text messaging service,bulk sms services,sms text messaging services provider,short message service,online sms service provider,bulk messaging,phone service provider,it service provider,bulk sms services provider,short messaging service,best bulk sms service provider,voip mms messaging service,top bulk sms service provider',
  alternates: {
    canonical: 'https://www.phonology.io/phonology-blogs',
}
};

const page = () => {
  return (
    <div>
      <PostsList/>
    </div>
  )
}

export default page
