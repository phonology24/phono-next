import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import TopContactBar from '@/components/TopContactBar'
import '../styles/globals.css';  // Ensure your global styles are imported
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <title>My Application</title> */}
        {/* Add other meta tags or links to stylesheets here */}
   
      </head>
      <body>
        <TopContactBar/>
          <Navbar/>
        {children}
      </body>
    </html>
  );
}
