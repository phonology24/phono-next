import CountryDropdown from '@/components/Get-Phone-Numbers/GetPhoneNumbers';
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Buy International Virtual Phone Numbers Online | Phonology',
  description: 'Pick a toll-free, local or mobile number, choose where its calls go (your PBX, SIP trunk or a phone number) and buy it online. Numbers in 69 countries for businesses in India.',
  alternates: { canonical: '/get-phone-numbers' },
};

export default function Page() {
  return (
    <main style={{ width: 'min(1240px, 100% - 32px)', margin: '0 auto' }}>
      <CountryDropdown />
      <section style={{ paddingBlock: 'clamp(72px, 10vw, 120px)' }}>
        <PhoneNumbers title="Numbers by country" />
      </section>
      <Footer />
    </main>
  );
}
