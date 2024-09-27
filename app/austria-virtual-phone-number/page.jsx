import React from 'react'
import Footer from '@/components/Footer'
import AustriaEightCards from '@/components/InternationalNumbers/austria/AustriaEightCards'
import AustriaHeader from '@/components/InternationalNumbers/austria/AustriaHeader'
import AustriaSubHeader from '@/components/InternationalNumbers/austria/AustriaSubHeader'
import BenefitsOfAustriaNumber from '@/components/InternationalNumbers/austria/BenefitsOfAustriaNumber'
import HowToBuy from '@/components/InternationalNumbers/austria/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import FAQAccordionComponent from '@/components/InternationalNumbers/austria/FAQAccordion'
import AustriaFeatureCards from '@/components/InternationalNumbers/austria/FeatureCards'

export const metadata = {
  title: 'Get an Austria Virtual Phone Number | Phonology',
  description: 'Enhance your business communication with an Austria virtual phone number from Phonology. Enjoy seamless call forwarding, international presence, and cost-effective VoIP solutions.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Austria-virtual-phone-number',
  alternates: {
    canonical: '/austria-virtual-phone-number',
  },
};


const page = () => {
  return (
    <div>
      <AustriaHeader/>
      <AustriaSubHeader/>
      <BenefitsOfAustriaNumber/>
      <AustriaEightCards/>
      <HowToBuy/>
      <AustriaFeatureCards/>
      <FAQAccordionComponent/>
      <PhoneNumbers/>
      <Footer/>
    </div>
  )
}

export default page