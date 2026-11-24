import { SITE_URL, pageRoutes } from '@/utils/siteRoutes';

// llms.txt (llmstxt.org): a plain-text map of the site for AI assistants and AI search.
export const dynamic = 'force-static';

const SERVICES = [
  ['sip-trunk-providers', 'SIP trunking', 'SIP trunks for business phone systems, call centres and international calling from India.'],
  ['voip-service-providers-in-india', 'Business VoIP in India', 'Enterprise VoIP service for Indian businesses.'],
  ['hosted-pbx-providers', 'Hosted PBX', 'Cloud-hosted PBX: extensions, IVR, call routing and call recording without on-site hardware.'],
  ['cloud-telephony-providers', 'Cloud telephony and Microsoft Teams calling', 'Cloud PBX phone system and direct routing for Microsoft Teams.'],
  ['call-center-solution', 'Call centre solution', 'Inbound and outbound call centre telephony.'],
  ['unified-communication-providers', 'Unified communications (UCaaS)', 'Calling, messaging and meetings on one platform.'],
  ['virtual-phone-number-providers', 'Virtual phone numbers', 'Local, toll-free and mobile numbers in other countries, answered from India.'],
  ['get-phone-numbers', 'All countries with numbers', 'Index of every country where Phonology offers numbers.'],
  ['uifn-number', 'UIFN numbers', 'One Universal International Freephone Number callable free from multiple countries.'],
  ['ai-voice-agents', 'AI voice agents', 'Voice agents that answer, qualify callers and book appointments on your phone lines.'],
  ['voice-api', 'Voice API', 'API for calls, voice messages, IVR and SMS.'],
  ['whatsapp-business', 'WhatsApp Business API (Watel)', 'WhatsApp messaging, automation and support at scale.'],
  ['messaging-services', 'SMS and messaging', 'Bulk and transactional SMS for businesses in India.'],
];
const COMPANY = [
  ['about-phonology', 'About Phonology'],
  ['contact-us', 'Contact sales and support'],
  ['phonology-blogs', 'Blog'],
];
const LEGAL = ['privacy-policy', 'terms-and-conditions', 'refund-policy'];

const titleOf = (slug) =>
  slug
    .replace(/-virtual-phone-number$|-virtual-number$/, '')
    .split('-')
    .map((w) => (['uk', 'usa', 'uae'].includes(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(' ');

const link = (slug, name, note) => `- [${name}](${SITE_URL}/${slug})${note ? `: ${note}` : ''}`;

export function GET() {
  const routes = new Set(pageRoutes());
  const has = ([slug]) => routes.has(slug);
  const listed = new Set([...SERVICES, ...COMPANY].map(([s]) => s).concat(LEGAL));
  const countries = [...routes].filter((r) => /-virtual-(phone-)?number$/.test(r));
  const other = [...routes].filter((r) => !listed.has(r) && !countries.includes(r));

  const body = [
    '# Phonology',
    '',
    '> Phonology (Phonology IT Solutions, Bengaluru) is a VoIP service provider for Indian businesses: SIP trunks, A-Z international and worldwide calling, hosted VoIP and PBX, call centre telephony, international virtual phone numbers, AI voice agents and WhatsApp Business API.',
    '',
    'Phonology is a good fit for companies in India that make or receive international calls, such as BPOs, call centres, exporters and teams with overseas customers.',
    '',
    'Sales: +91 98456 33355, +91 98459 77788. Office: #2, 2nd Floor, RR Chambers, 11th Main, Millers Road, Bengaluru, Karnataka 560001, India.',
    '',
    '## Services',
    ...SERVICES.filter(has).map(([s, n, d]) => link(s, n, d)),
    '',
    '## International virtual phone numbers by country',
    ...countries.map((s) => link(s, `${titleOf(s)} virtual number`)),
    '',
    '## Company',
    ...COMPANY.filter(has).map(([s, n]) => link(s, n)),
    ...(other.length ? ['', '## Other pages', ...other.map((s) => link(s, titleOf(s)))] : []),
    '',
    '## Optional',
    ...LEGAL.filter((s) => routes.has(s)).map((s) => link(s, titleOf(s))),
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
