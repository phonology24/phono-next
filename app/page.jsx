// pages/index.js

import React from 'react';
import Home from '@/components/Home.jsx';
import styles from '../styles/App.module.css';
import Head from 'next/head';


// pages/_app.js or pages/_document.js

export const metadata = {
title: 'VoIP Service Provider | VoIP Service Provider In India | Phonology',
description: 'Phonology is the best VoIP service provider for international connections. We have many features like calling, SMS, Conference bridge, etc. Experience crystal-clear calls and reliable connectivity tailored to your business needs. Get started today.',
keywords: 'Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India',
alternates: {
  canonical: 'https://www.phonology.io',
},
};
const Page = () => {

  return (
    <div className={styles.body}>
      <Head>
        {/* Using metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />

        {/* JSON-LD for WebSite */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Phonology",
              "url": "https://www.phonology.io/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.phonology.io/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}} />

        {/* JSON-LD for LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Phonology",
              "url": "https://www.phonology.io/",
              "telephone": "9845633355",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "# 2 , 2nd Floor, RR Chambers 11th Main, Millers Rd,",
                "addressLocality": "Bangalore",
                "postalCode": "560052",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9914423,
                "longitude": 77.59371709999999
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:30",
                "closes": "18:30"
              }
            }
          `}} />

        {/* JSON-LD for BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org/", 
              "@type": "BreadcrumbList", 
              "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "Phonology home",
                "item": "https://www.phonology.io/" 
              }]
            }
          `}} />
      </Head>
      <Home />
    </div>
  );
};

export default Page;
