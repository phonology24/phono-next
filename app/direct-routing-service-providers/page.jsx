// pages/direct-routing-service-providers.js

import React from 'react';
import DirectRouting from '@/components/DirectRouting';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Microsoft Teams Direct Routing Service Provider',
  description:
    'Microsoft Teams Direct Routing allows you to connect with ease. Our guide offers step-by-step instructions to optimize your communication and collaboration.',
  keywords:
    'direct routing, direct routing cubase, direct routing as a service, microsoft teams direct routing, microsoft teams phone system direct routing, direct routing demo, microsoft direct routing, routing for ms teams, what is direct routing as a service, pro tips for direct routing & e911 | odfp116, cubase bus routing, operator connect vs direct routing as a service, should our company do operator connect or direct routing',
  alternates: {
    canonical: 'https://www.phonology.io/direct-routing-service-providers',
  },
};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/direct-routing-service-providers',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/direct-routing-service-providers{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/direct-routing-service-providers',
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
      name: 'Direct Routing Service Providers',
      item: 'https://www.phonology.io/direct-routing-service-providers',
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

      <DirectRouting />
    </div>
  );
};

export default Page;
