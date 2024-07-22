import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import TopContactBar from '@/components/TopContactBar'
import '../styles/globals.css';  // Ensure your global styles are imported

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>My Application</title> */}
        {/* Add other meta tags or links to stylesheets here */}
      </head>
      <body>
        <TopContactBar />
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> Uncomment this if you have a footer component */}
      </body>
    </html>
  );
}
