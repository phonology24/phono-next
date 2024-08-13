import React from 'react';
import Campaign1 from '@/components/Campaign1';
import Head from 'next/head';

export const metadata = {
  title: 'VoIP service providers | SIP Trunk Providers',
  description:
    'Phonology is a leading VoIP service provider, offering seamless communication solutions. We specialize in SIP trunking, Virtual numbers, Hosted PBX, and Unified Communications, empowering businesses with innovative, scalable, and reliable technology to enhance connectivity and boost productivity.',
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
      <div>
        <Campaign1 />
      </div>
    </>
  );
};

export default Page;
