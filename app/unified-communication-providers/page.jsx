// pages/unified-communication-providers.js

import React from 'react';
import UnifiedCommunications from '@/components/UnifiedCommunications';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Unified Communications Providers | UCaaS Providers',
  description:
    'A leading UCaaS provider offering tailored unified communications services. Streamline collaboration and connectivity while maximizing productivity with our advanced technology suite. Explore our comprehensive offerings today.',
  keywords:
    'unified communications, unified communications as a service, unified communications explained, unified communications providers in Berkshire, UCaaS, unified communications news, what is unified communications, top unified communications providers, cloud communications, unified communications provider, unified communication, unified communications and collaboration, UCaaS unified communications as a service, unified communication done for you',
  alternates: {
    canonical: 'https://www.phonology.io/unified-communication-providers',
  },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large', // Robots meta tag

};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/unified-communication-providers',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/unified-communication-providers/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/unified-communication-providers',
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
      name: 'Unified Communication Providers',
      item: 'https://www.phonology.io/unified-communication-providers',
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

      <UnifiedCommunications />
    </div>
  );
};

export default Page;
