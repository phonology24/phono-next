// pages/index.js

import React from 'react';
import Home from '@/components/Home.jsx';
import styles from '../styles/App.module.css';
import Head from 'next/head';
import Script from 'next/script';
// import favicon from '../app/favicon.ico'
// Metadata for the page
export const metadata = {
  title: 'VoIP Service Provider | VoIP Service Provider In India | Phonology',
  description:
    'Phonology is the best VoIP service provider for international connections. We have many features like calling, SMS, Conference bridge, etc. Experience crystal-clear calls and reliable connectivity tailored to your business needs. Get started today.',
  keywords:
    'Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India',
  alternates: {
    canonical: 'https://www.phonology.io',
  },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  // icon: {favicon},

};

// JSON-LD Schema Markup
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Phonology',
  url: 'https://www.phonology.io/',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.phonology.io/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  url: 'https://www.phonology.io/',
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
      item: 'https://www.phonology.io/',
    },
  ],
};

const Page = () => {
  return (
    
    <div className={styles.body}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico"/>

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
    <script
            type="text/javascript"
            id="zsiqchat"
            dangerouslySetInnerHTML={{
              __html: `
                var $zoho=$zoho || {};
                $zoho.salesiq = $zoho.salesiq || {
                  widgetcode: "siqed8e902c4505673f934b08d408819a9982cdb93c35ad32b2bceabd67e6bb9e4c",
                  values: {},
                  ready: function() {}
                };
                var d=document;s=d.createElement("script");
                s.type="text/javascript";
                s.id="zsiqscript";
                s.defer=true;
                s.src="https://salesiq.zohopublic.in/widget";
                t=d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s,t);
              `,
            }}
          />
      <Home />
    </div>
  );
};

export default Page;
