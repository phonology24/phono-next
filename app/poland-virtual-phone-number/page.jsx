import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPolandNumber from '@/components/InternationalNumbers/poland/BenefitsOfPolandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/poland/FAQAccordion'
import PolandFeatureCards from '@/components/InternationalNumbers/poland/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/poland/HowToBuy'
import PolandEightCards from '@/components/InternationalNumbers/poland/PolandEightCards'
import PolandHeader from '@/components/InternationalNumbers/poland/PolandHeader'
import PolandSubHeader from '@/components/InternationalNumbers/poland/PolandSubHeader'
import React from 'react'
export const metadata = {
  title: 'Poland Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Boost your business with a Poland virtual phone number. Phonology offers crystal-clear VoIP services, ensuring efficient global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Poland-virtual-phone-number',
  alternates: {
    canonical: '/poland-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <PolandHeader />
  <PolandSubHeader />
  <BenefitsOfPolandNumber />
  <PolandEightCards />
  <HowToBuy />
  <PolandFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
