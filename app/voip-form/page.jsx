import React from 'react';
import Campaign1 from '@/components/Campaign1';
import Head from 'next/head';
import Script from 'next/script'; // To handle external scripts

export const metadata = {
  title: 'VoIP service providers | SIP Trunk Providers',
  description:
    'Get the best VoIP service providers and SIP Trunk Providers for seamless business connectivity. Boost your business communication today!',
  keywords:
    'virtual numbers, virtual number, number virtual, ca virtual number, uk virtual number, free virtual numbers, virtual phone numbers, local virtual numbers, usa virtual number, buy virtual number, get virtual number, buy number virtual, free virtual number, free number virtual, number virtual free, virtual number free, virtual phone number sms, virtual phone number, onoff number virtual, virtual dubai number, virtualphonenumber, virtual mobile number',
  alternates: {
    canonical: 'https://www.phonology.io/voip-form',
  },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
};

const Page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <meta name="robots" content={metadata.robots} />
      </Head>

      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16678504638"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16678504638');
          `,
        }}
      />

      <div style={{maxWidth:"85vw", margin:"0 auto"}}>
        <Campaign1 />
      </div>
    </>
  );
};

export default Page;
