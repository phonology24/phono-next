import fs from 'fs';
import path from 'path';

export const SITE_URL = 'https://www.phonology.io';

// Pages that exist but should stay out of search results and AI indexes.
const HIDDEN = new Set(['add-news', 'edit-post', 'support', 'voip-form', 'thank-you']);

// Public page folders under app/, read at build time (used by sitemap.xml and llms.txt).
export function pageRoutes() {
  const appDir = path.join(process.cwd(), 'app');
  return fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('admin-') && !HIDDEN.has(d.name))
    .filter((d) => fs.existsSync(path.join(appDir, d.name, 'page.jsx')))
    .map((d) => d.name)
    .sort();
}
