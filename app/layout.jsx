import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import TopContactBar from '@/components/TopContactBar';
import '../styles/globals.css'; // Ensure your global styles are imported

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </head>
      <body>
        <TopContactBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
