import React from 'react';
import Campaign1 from '@/components/Campaign1';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'VoIP service providers | SIP Trunk Providers',
  description:
    'Get the best VoIP service providers and SIP Trunk Providers for seamless business connectivity. Boost your business communication today!',
  keywords:
    'virtual numbers, virtual number, number virtual, ca virtual number, uk virtual number, free virtual numbers, virtual phone numbers, local virtual numbers, usa virtual number, buy virtual number, get virtual number, buy number virtual, free virtual number, free number virtual, number virtual free, virtual number free, virtual phone number sms, virtual phone number, onoff number virtual, virtual dubai number, virtualphonenumber, virtual mobile number',
  alternates: {
    canonical: 'https://www.phonology.io/voip-form',
  },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large', // Robots meta tag
};

const Page = () => {
  return (
    <>
      <Head>
        {/* Add metadata, title, and other head elements */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <meta name="robots" content={metadata.robots} />
        <GoogleAnalytics gaId="G-FHPV037WGM" />

      </Head>
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
      {/* Google Tag Manager Script */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16678504638"></script> */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16678504638');
          `,
        }}
      /> */}
              {/* <GoogleTagManager gtmId="GTM-T4FS3L3Q" /> */}
      <div>
        <Campaign1 />
      </div>
    </>
  );
};

export default Page;
