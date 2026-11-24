import '../styles/globals.css'; // first, so component CSS can override the primitives
import { Unbounded, Figtree, Martian_Mono } from 'next/font/google';
import SiteChrome from '@/components/SiteChrome';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

const GTM_ID = 'GTM-T4FS3L3Q';

// Relative canonicals in page metadata resolve against this host.
export const metadata = { metadataBase: new URL('https://www.phonology.io') };

// Zoho SalesIQ chat, on every page so any visitor can start a conversation.
const SALESIQ_SCRIPT = `var $zoho=$zoho||{};$zoho.salesiq=$zoho.salesiq||{widgetcode:"siqed8e902c4505673f934b08d408819a9982cdb93c35ad32b2bceabd67e6bb9e4c",values:{},ready:function(){}};var d=document,s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`;

const display = Unbounded({ subsets: ['latin'], weight: '500', variable: '--font-display' });
const sans = Figtree({ subsets: ['latin'], variable: '--font-sans' });
const mono = Martian_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

// Apply the saved light/dark choice (see ThemePicker) before first paint to avoid a flash.
const THEME_SCRIPT = "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <SiteChrome />
        {children}
        <Script id="pagesense" src="https://cdn-in.pagesense.io/js/phonology/e13bd7015ee44d6da3db0e837cce6739.js" strategy="afterInteractive" />
        <Script id="zsiqchat" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: SALESIQ_SCRIPT }} />
      </body>
    </html>
  );
}
