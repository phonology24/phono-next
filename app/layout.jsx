import '../styles/globals.css'; // first, so component CSS can override the primitives
import { Unbounded, Figtree, Martian_Mono } from 'next/font/google';
import SiteChrome from '@/components/SiteChrome';

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
      <body>
        <SiteChrome />
        {children}
      </body>
    </html>
  );
}
