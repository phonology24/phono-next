import React from 'react'
import PostsList from '@/components/Blog/User-Blog-Components/BlogMain'
import { Metadata } from 'next';

// Define metadata for the page
export const metadata = {
  title: 'Phonology Blogs',
  description: 'Experience seamless communication solutions with Phonology, your trusted messaging service provider. Elevate your messaging experience with our innovative technology and reliable services, Discover the power of efficient and secure communication today.',
  keywords: 'bulk sms service provider,text messaging service provider,bulk sms service,text messaging provider,text messaging service,bulk sms services,sms text messaging services provider,short message service,online sms service provider,bulk messaging,phone service provider,it service provider,bulk sms services provider,short messaging service,best bulk sms service provider,voip mms messaging service,top bulk sms service provider',
};

const page = () => {
  return (
    <div>
      <PostsList/>
    </div>
  )
}

export default page
