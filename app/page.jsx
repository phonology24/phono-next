import Home from '@/components/Home.jsx';

export const metadata = {
  title: 'SIP Trunks & International Calling for Businesses in India | Phonology',
  description:
    'SIP trunks, A-Z international calling to 150+ countries, hosted PBX and virtual numbers for businesses in India. Works with your PBX, dialler or Microsoft Teams. Ask for a rate card.',
  alternates: { canonical: '/' },
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
};

// Phonology's office, for local search (Google Business Profile should show the same details).
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phonology',
  legalName: 'Phonology IT Solutions',
  url: 'https://www.phonology.io/',
  logo: 'https://www.phonology.io/icon.svg',
  email: 'info@phonology.io',
  telephone: '+91-98456-33355',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '# 2, 2nd Floor, RR Chambers, 11th Main, Millers Rd',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560052',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 12.9914423, longitude: 77.5937171 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:30',
    closes: '18:30',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Home />
    </>
  );
}
