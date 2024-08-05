"use client"
import React from 'react';
import Campaign1 from '@/components/Campaign1';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

const Page = () => {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  // Define the URL to match
  const targetPath = '/voip-form';

  // Check if the current path matches the target path
  const isTargetPage = pathname === targetPath;

  return (
    <>
        {isTargetPage && (
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
        )}
      <div>
        <Campaign1 />
      </div>
    </>
  );
};

export default Page;
