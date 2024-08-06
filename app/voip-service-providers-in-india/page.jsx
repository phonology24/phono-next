// pages/voip-service-providers-in-india.js

import React from 'react';
import VoiceTerminationPage from '@/components/VoiceTerminationPage';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Leading VoIP Service Provider In India',
  description:
    'The leading VoIP service provider in India with Phonology. Enjoy crystal-clear communication, seamless connectivity, and cost-effective solutions tailored to your business needs. Call us for the best VoIP Calling rates with HD quality and 100% Client satisfaction.',
  keywords:
    'Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India',
  alternates: {
    canonical: 'https://www.phonology.io/voip-service-providers-in-india',
  },
};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/voip-service-providers-in-india',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.phonology.io/voip-service-providers-in-india/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/voip-service-providers-in-india',
  telephone: '9845633355',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '# 2 , 2nd Floor, RR Chambers 11th Main, Millers Rd,',
    addressLocality: 'Bangalore',
    postalCode: '560052',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9914423,
    longitude: 77.59371709999999,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:30',
    closes: '18:30',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Phonology home',
      item: 'https://www.phonology.io/voip-service-providers-in-india',
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Head>
        {/* Using metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />
      </Head>

      {/* JSON-LD for WebSite */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* JSON-LD for LocalBusiness */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* JSON-LD for BreadcrumbList */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <VoiceTerminationPage />
    </div>
  );
};

export default Page;
