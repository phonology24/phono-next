"use client";

import Navbar from '../components/Navbar';
import TopContactBar from '@/components/TopContactBar';
import '../styles/globals.css'; // Ensure your global styles are imported
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google'
import { SmoothScrollWrapper } from '@/utils/ScrollWrapper';


export default function Layout({ children }) {
  const pathname = usePathname();

  const noNavbarRoutes = ['/voip-form', '/admin-post-editor'];

  const shouldHideNavbar = noNavbarRoutes.includes(pathname) ||
    pathname.startsWith('/phonology-blogs/') ||
    pathname.startsWith('/edit-post/') ||  pathname.includes('support-document-admin')

  return (
    <html lang="en">
      <Head>


        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SmoothScrollWrapper>
      <body>


        {!shouldHideNavbar && (
          <>
            {/* <TopContactBar /> */}
            <Navbar />
          </>
        )}
        {children}
      </body>
      </SmoothScrollWrapper>
    </html>
  );
}
