// pages/messaging-services.js

import React from 'react';
import SipTrunking from '@/components/SipTrunking';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Messaging Service Provider | Best SMS Service Provider In India',
  description:
    'Experience seamless communication solutions with Phonology, your trusted messaging service provider. Elevate your messaging experience with our innovative technology and reliable services. Discover the power of efficient and secure communication today.',
  keywords:
    'bulk sms service provider, text messaging service provider, bulk sms service, text messaging provider, text messaging service, bulk sms services, sms text messaging services provider, short message service, online sms service provider, bulk messaging, phone service provider, it service provider, bulk sms services provider, short messaging service, best bulk sms service provider, voip mms messaging service, top bulk sms service provider',
  alternates: {
    canonical: 'https://www.phonology.io/messaging-services',
  },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large', // Robots meta tag

};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/messaging-services',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/messaging-services{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/messaging-services',
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
      name: 'Home',
      item: 'https://www.phonology.io',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Messaging Services',
      item: 'https://www.phonology.io/messaging-services',
    },
  ],
};

const Page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <Head>
        {/* Using metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <meta name="robots" content={metadata.robots} />

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

      <SipTrunking />
    </div>
  );
};

export default Page;
