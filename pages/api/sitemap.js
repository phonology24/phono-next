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
      { loc: `${baseUrl}/cloud-telephony-providers`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/terms-and-conditions`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/privacy-policy`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/austria-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/belgium-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/bulgaria-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/croatia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/cyprus-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/czech-republic-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/denmark-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/estonia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/finland-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/france-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/georgia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/germany-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/greece-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/hungary-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/iceland-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/ireland-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/italy-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/latvia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/luxembourg-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/malta-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/netherlands-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/norway-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/poland-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/portugal-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/romania-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/russia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/serbia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/slovakia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/spain-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/sweden-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/switzerland-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/uk-toll-free-virtual-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/bahrain-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/bangladesh-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/cambodia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/china-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/indonesia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/israel-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/japan-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/myanmar-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/malaysia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/pakistan-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/singapore-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/singapore-toll-free-virtual-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/south-korea-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/taiwan-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/thailand-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/turkey-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/uae-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/ukraine-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/vietnam-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/belize-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/canada-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/canada-toll-free-virtual-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/costa-rica-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/el-salvador-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/panama-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/usa-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/usa-toll-free-virtual-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/australia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/australia-toll-free-virtual-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/new-zealand-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/argentina-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/brazil-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/chile-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/colombia-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/peru-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/ghana-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/uganda-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 },
      { loc: `${baseUrl}/south-africa-virtual-phone-number`, lastmod: new Date().toISOString(), priority: 0.80 }
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
