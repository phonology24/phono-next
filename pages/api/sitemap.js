import axios from 'axios';
import slugify from 'slugify';

export default async function handler(req, res) {
  try {
    // Fetch blog posts from the API
    const response = await axios.get('https://blog.phonology.io/api/get-posts');
    const posts = response.data;

    // Base URL of your site
    const baseUrl = 'https://www.phonology.io';

    // Static URLs you want to include in the sitemap (taken from your XML)
    const staticPages = [
      { loc: `${baseUrl}/`, lastmod: new Date().toISOString(), priority: 1.00 },
      { loc: `${baseUrl}/about-phonology`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/get-phone-numbers`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/phonology-blogs`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/voip-service-providers-in-india`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/virtual-phone-number-providers`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/sip-trunk-providers`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/unified-communication-providers`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/call-center-solution`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/messaging-services`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/hosted-pbx-providers`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/direct-routing-service-providers`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/terms-and-conditions`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/privacy-policy`, lastmod: new Date().toISOString(), priority: 0.80 },
    ];

    // Generate the sitemap dynamically for blog posts
    const dynamicSitemap = posts.map(post => {
      const slugifiedTitle = slugify(post.title, { lower: true });
      const url = `${baseUrl}/phonology-blogs/${slugifiedTitle}?id=${post._id}`;

      // Validate date and fall back to current date if `updatedAt` is invalid
      const lastMod = post.updatedAt && !isNaN(new Date(post.updatedAt)) 
        ? new Date(post.updatedAt).toISOString()
        : new Date().toISOString();  // Fallback to current date

      return `
        <url>
          <loc>${url}</loc>
          <lastmod>${lastMod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    }).join('');

    // Generate the sitemap for static pages
    const staticSitemap = staticPages.map(page => {
      return `
        <url>
          <loc>${page.loc}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `;
    }).join('');

    // Combine both static and dynamic sitemaps
    const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticSitemap}
        ${dynamicSitemap}
      </urlset>
    `;

    // Set response content type to XML and send sitemap
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemap);

  } catch (error) {
    console.log('Error generating sitemap:', error);
    res.status(500).send('Failed to generate sitemap');
  }
}
