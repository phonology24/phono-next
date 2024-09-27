import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfNorwayNumber from '@/components/InternationalNumbers/norway/BenefitsOfNorwayNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/norway/FAQAccordion'
import NorwayFeatureCards from '@/components/InternationalNumbers/norway/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/norway/HowToBuy'
import NorwayEightCards from '@/components/InternationalNumbers/norway/NorwayEightCards'
import NorwayHeader from '@/components/InternationalNumbers/norway/NorwayHeader'
import NorwaySubHeader from '@/components/InternationalNumbers/norway/NorwaySubHeader'
import React from 'react'
export const metadata = {
  title: 'Norway Virtual Phone Number | Affordable VoIP Solutions',
  description: 'Expand your international presence with a Norway virtual phone number. Phonology’s VoIP services provide seamless communication at competitive prices.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Norway-virtual-phone-number',
  alternates: {
    canonical: '/norway-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <NorwayHeader />
  <NorwaySubHeader />
  <BenefitsOfNorwayNumber />
  <NorwayEightCards />
  <HowToBuy />
  <NorwayFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
