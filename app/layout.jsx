import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import TopContactBar from '@/components/TopContactBar';
import '../styles/globals.css'; // Ensure your global styles are imported
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <html lang="en">
    <Head>
    <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MJFGQBVW');`,
          }}
        />
    </Head>
    <link rel="icon" href="/favicon.ico" />
      <body>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJFGQBVW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <TopContactBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
