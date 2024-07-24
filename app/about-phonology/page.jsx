import React from 'react';
import About from '@/components/About';
import Head from 'next/head';

// Define metadata for the page
export const metadata = {
  title: 'About Us | Phonology | VoIP Service Provider In India',
  description: 'Welcome to our About Us page, where innovation meets integrity in providing exceptional VoIP services for international communication. With a dedication to excellence and a commitment to customer satisfaction, we strive to redefine the standards of global connectivity.',
  robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India',
  alternates: {
    canonical: 'https://www.phonology.io/about-phonology',
}
};

const Page = () => {
  return (
    <div>    
      <About />
    </div>
  );
};

export default Page;
