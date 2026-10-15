'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const NO_NAVBAR = ['/voip-form', '/admin-post-editor'];

export default function SiteChrome() {
  const pathname = usePathname();
  const hideNavbar = NO_NAVBAR.includes(pathname) ||
    pathname.startsWith('/phonology-blogs/') ||
    pathname.startsWith('/edit-post/') ||
    pathname.includes('support-document-admin');

  return hideNavbar ? null : <Navbar />;
}
