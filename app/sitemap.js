import slugify from 'slugify';
import { SITE_URL as BASE, pageRoutes } from '@/utils/siteRoutes';

// Built once at build time from the app/ folders, so a new page joins the sitemap on its own.
export const dynamic = 'force-static';

// shortcut: blog posts are read once at build; if blog.phonology.io is down the sitemap ships without them.
async function blogPosts() {
  try {
    const res = await fetch('https://blog.phonology.io/api/get-posts', { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return [];
    const posts = await res.json();
    return posts.map((p) => ({
      url: `${BASE}/phonology-blogs/${slugify(p.title, { lower: true })}?id=${p._id}`,
      lastModified: p.updatedAt && !isNaN(new Date(p.updatedAt)) ? new Date(p.updatedAt) : undefined,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const pages = [{ url: `${BASE}/`, priority: 1 }, ...pageRoutes().map((r) => ({ url: `${BASE}/${r}` }))];
  return [...pages, ...(await blogPosts())];
}
