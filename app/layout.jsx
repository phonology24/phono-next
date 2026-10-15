import '../styles/globals.css'; // first, so component CSS can override the primitives
import { Unbounded, Figtree, Martian_Mono } from 'next/font/google';
import SiteChrome from '@/components/SiteChrome';

const display = Unbounded({ subsets: ['latin'], weight: '500', variable: '--font-display' });
const sans = Figtree({ subsets: ['latin'], variable: '--font-sans' });
const mono = Martian_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SiteChrome />
        {children}
      </body>
    </html>
  );
}
