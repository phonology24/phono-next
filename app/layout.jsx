"use client";

import Navbar from '../components/Navbar';
import TopContactBar from '@/components/TopContactBar';
import '../styles/globals.css'; // Ensure your global styles are imported
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google'


export default function Layout({ children }) {
  const pathname = usePathname();

  // Routes where the navbar should not be displayed
  const noNavbarRoutes = ['/voip-form', '/admin-post-editor'];

  // Check if the current path starts with '/phonology-blogs/', '/edit-post/', or is in noNavbarRoutes
  const shouldHideNavbar = noNavbarRoutes.includes(pathname) ||
    pathname.startsWith('/phonology-blogs/') ||
    pathname.startsWith('/edit-post/');

  return (
    <html lang="en">
      <Head>
        


        <link rel="icon" href="/favicon.ico" />


        <GoogleTagManager gtmId="GTM-T4FS3L3Q" />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4FS3L3Q"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </Head>
      <body>


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
