'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const NO_NAVBAR = ['/voip-form', '/admin-post-editor'];

// Routes fully on design tokens get the dark theme (see the gate in globals.css).
// ponytail: grows phase by phase; admin routes never match.
const THEMED = /^\/(([a-z-]+-virtual-phone-number|canada-toll-free-virtual-number|about-phonology)|(contact-us|phonology-blogs)(\/.*)?)?$/;

export default function SiteChrome() {
  const pathname = usePathname();
  const themed = THEMED.test(pathname);
  const hideNavbar = NO_NAVBAR.includes(pathname) ||
    pathname.startsWith('/edit-post/') ||
    pathname.includes('support-document-admin');

  return (
    <>
      {themed && <i data-theme-ready="" hidden />}
      {!hideNavbar && <Navbar themed={themed} />}
    </>
  );
}
