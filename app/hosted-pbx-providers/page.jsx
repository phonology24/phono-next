// pages/hosted-pbx-providers.js

import React from 'react';
import HostedPhoneNumbers from '@/components/HostedPhoneNumbers';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Hosted PBX | Cloud PBX | IP PBX | Providers in India',
  description:
    'Phonology Hosted PBX, Cloud PBX, and IP PBX solutions. Elevate your business with our advanced telephony services tailored for modern connectivity needs, 24x7 Support, and a free trial option.',
  keywords:
    'hosted pbx, cloud pbx, cloud phone system, cloud hosted phone system, hosted voip, cloud communications, cloud pbx system, cloud pbx phone system, hosted ip pbx, cloud pbx sytem, hosted pbx voip, hosted pbx phone, fonality hosted pbx, cloud pbx explained, cloud pbx phone sytem, pbx cloud, benefits of hosted pbx, cloud voip',
  alternates: {
    canonical: 'https://www.phonology.io/hosted-pbx-providers',
  },
};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/hosted-pbx-providers',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/hosted-pbx-providers{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/hosted-pbx-providers',
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
      name: 'Hosted PBX Providers',
      item: 'https://www.phonology.io/hosted-pbx-providers',
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

      <HostedPhoneNumbers />
    </div>
  );
};

export default Page;
