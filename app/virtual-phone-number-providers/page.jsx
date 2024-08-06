// pages/virtual-phone-number-providers.js

import React from 'react';
import VirtualNumber from '@/components/VirtualNumber.jsx';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Virtual Phone Number Providers',
  description:
    'Unlock the power of seamless communication with the top virtual phone number providers. Elevate your business connectivity with reliable, feature-rich solutions tailored to your needs. Explore our comprehensive range of services and take your communication strategy to new heights today.',
  keywords:
    'virtual numbers, virtual number, number virtual, ca virtual number, uk virtual number, free virtual numbers, virtual phone numbers, local virtual numbers, usa virtual number, buy virtual number, get virtual number, buy number virtual, free virtual number, free number virtual, number virtual free, virtual number free, virtual phone number sms, virtual phone number, onoff number virtual, virtual dubai number, virtualphonenumber, virtual mobile number',
  alternates: {
    canonical: 'https://www.phonology.io/virtual-phone-number-providers',
  },
};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/virtual-phone-number-providers',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/virtual-phone-number-providers/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/virtual-phone-number-providers',
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
      item: 'https://www.phonology.io/virtual-phone-number-providers',
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

      <VirtualNumber />
    </div>
  );
};

export default Page;
