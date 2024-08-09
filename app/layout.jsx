import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import TopContactBar from '@/components/TopContactBar';
import '../styles/globals.css'; // Ensure your global styles are imported
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <html lang="en">
    <Head>
    </Head>
    <link rel="icon" href="/favicon.ico" />
      <body>
        <TopContactBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
