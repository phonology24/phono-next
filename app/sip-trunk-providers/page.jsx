// pages/messaging-services.js

import React from 'react';
import MessagingServices from '@/components/MessagingServices';
import Head from 'next/head';
import Script from 'next/script';

// Define metadata for the page
export const metadata = {
  title: 'Sip Trunk Providers | SIP Trunking Solutions',
  description:
    'Discover top SIP Trunk Providers offering reliable SIP trunking solutions to streamline your business communication with cost-effective, scalable, and secure VoIP services.',
  keywords:
    'sip trunking,sip trunking explained,what is sip trunking,sip,sip trunk,sip trunking for dummies,sip trunks,sip trunking vs voip,what is a sip trunk,trunking,pbx sip trunking,global sip trunking,softtop sip trunking,sip trunking service,explain sip trunking,elastic sip trunking,sip trunking benefits,sip trunking provider,business sip trunking,wholesale sip trunking,call center sip trunking,sip trunking applications,understanding sip trunking',
  alternates: {
    canonical: 'https://www.phonology.io/sip-trunk-providers',
  },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large', // Robots meta tag

};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/sip-trunk-providers',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/sip-trunk-providers/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/sip-trunk-providers',
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
      name: 'SIP Trunking Providers',
      item: 'https://www.phonology.io/sip-trunk-providers',
    },
  ],
};

const Page = () => {
  return (
    <div>
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <meta name="robots" content={metadata.robots} />

      </Head> */}

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

      <MessagingServices />
    </div>
  );
};

export default Page;
