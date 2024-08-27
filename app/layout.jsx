"use client";

import Navbar from '../components/Navbar';
import TopContactBar from '@/components/TopContactBar';
import '../styles/globals.css'; // Ensure your global styles are imported
import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();

  // Routes where the navbar should not be displayed
  const noNavbarRoutes = ['/voip-form', '/phonology-blogs'];

  // Check if the current path starts with '/phonology-blogs/' or is in noNavbarRoutes
  const shouldHideNavbar = noNavbarRoutes.includes(pathname) || pathname.startsWith('/phonology-blogs/');

  // Return must be inside the component function
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer' ? '&l='+l : ''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-T4FS3L3Q');`}
        </script>
        {/* End Google Tag Manager */}
        
        {/* reCAPTCHA */}
        <script src="https://www.google.com/recaptcha/api.js?render=reCAPTCHA_6LfJjSwqAAAAACCGN5biITkYEHR4fkfXL-vhWkOI"></script>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4FS3L3Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {!shouldHideNavbar && (
          <>
            <TopContactBar />
            <Navbar />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
