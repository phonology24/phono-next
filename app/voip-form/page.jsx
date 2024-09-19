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

      {/* Zoho SalesIQ Chat Script */}
      <Script
        id="zsiqchat"
        strategy="lazyOnload" // Load it only after the page has loaded
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

      {/* Google Tag Manager */}
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4FS3L3Q');
          `,
        }}
      />

      {/* Event Tracking for Form Submission */}
      <Script
        id="event-tracking"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion_event_submit_lead_form', {
              'event_category': 'Form Submission',
              'event_label': 'Lead Form',
              'value': 1
            });
          `,
        }}
      />

      <div>
        <Campaign1 />
      </div>
    </>
  );
};

export default Page;
