// pages/call-center-solution.js

import React from 'react';
import HostedCallCenter from '@/components/HostedCallCenter';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Call Center Solutions | Call Center Solution Provider',
  description:
    'Phonology offers innovative Call Center Solutions as a leading Call Center Solution Provider, delivering efficient tools for customer interaction and support.',
  keywords:
    'hosted call center, call center, call center software, hosted call center pricing, cloud based call center phone system, hosted call centre, virtual call center software, telax hosted call center, contact center, call center hardware, hosted contact center, cloud call center, cloud based call center, top hosted call center, call center solution, oracle hosted call center, what is hosted call center, contact center vs call center',
  alternates: {
    canonical: 'https://www.phonology.io/call-center-solution',
  },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large', // Robots meta tag

};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/call-center-solution',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/call-center-solution/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/call-center-solution',
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
      name: 'Call Center Solution',
      item: 'https://www.phonology.io/call-center-solution',
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

      <HostedCallCenter />
    </div>
  );
};

export default Page;
