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
      { loc: `${baseUrl}/austria-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/belgium-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/bulgaria-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/croatia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/cyprus-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/czech-republic-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/denmark-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/estonia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/finland-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/france-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/georgia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/germany-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/greece-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/hungary-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/iceland-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/ireland-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/italy-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/latvia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/luxembourg-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/malta-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/netherlands-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/norway-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/poland-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/portugal-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/romania-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/russia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/serbia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/slovakia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/spain-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/sweden-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/switzerland-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/uk-toll-free-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/bahrain-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/bangladesh-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/cambodia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/china-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/indonesia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/israel-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/japan-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/myanmar-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/malaysia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/pakistan-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/singapore-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/singapore-toll-free-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/south-korea-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/taiwan-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/thailand-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/turkey-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/uae-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/ukraine-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/vietnam-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/belize-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/canada-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/canada-toll-free-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/costa-rica-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/el-salvador-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/panama-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/usa-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/usa-toll-free-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/australia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/australia-toll-free-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/new-zealand-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/argentina-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/brazil-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/chile-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/colombia-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/peru-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/ghana-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/uganda-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/south-africa-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 }
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
