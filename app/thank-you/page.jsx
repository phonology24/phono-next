import Script from 'next/script';
import Link from 'next/link';

// Lead forms (Zoho) redirect here after a successful submit, so the Ads conversion fires once per real lead.
export const metadata = {
  title: 'Thank you | Phonology',
  robots: { index: false, follow: false },
};

const ADS_ID = 'AW-16678504638';

const CONVERSION = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS_ID}');gtag('event','conversion_event_submit_lead_form',{event_category:'Form Submission',event_label:'Lead Form',value:1});`;

export default function ThankYou() {
  return (
    <main style={{ maxWidth: 640, margin: '160px auto', padding: '0 20px', textAlign: 'center' }}>
      <h1>Thank you. We got your details.</h1>
      <p>Our team will get in touch with you soon.</p>
      <p><Link href="/">Back to the home page</Link></p>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
      <Script id="lead-conversion" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: CONVERSION }} />
    </main>
  );
}
