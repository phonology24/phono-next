
import Footer from '@/components/Footer'
import BenefitsOfCanadaTollFreeNumber from '@/components/InternationalNumbers/canada-tf/BenefitsOfCanadaTollFreeNumber'
import CanadaTollFreeEightCards from '@/components/InternationalNumbers/canada-tf/CanadaTollFreeEightCards'
import CanadaTollFreeHeader from '@/components/InternationalNumbers/canada-tf/CanadaTollFreeHeader'
import CanadaTollFreeSubHeader from '@/components/InternationalNumbers/canada-tf/CanadaTollFreeSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/canada-tf/FAQAccordion'
import CanadaTollFreeFeatureCards from '@/components/InternationalNumbers/canada-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/canada-tf/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Get a Canada Toll-Free Virtual Number | Phonology VoIP',
  description: 'Offer your clients easy access with a Canada toll-free number. Phonology provides reliable and affordable VoIP solutions for smooth customer communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Canada-Toll-Free-virtual-phone-number',
  alternates: {
    canonical: '/canada-toll-free-virtual-phone-number',
  },
};

const CanadaTollFreePage = () => {
  return (
    <div>
      <CanadaTollFreeHeader/>
      <CanadaTollFreeSubHeader />
      <BenefitsOfCanadaTollFreeNumber />
      <CanadaTollFreeEightCards />
      <HowToBuy />
      <CanadaTollFreeFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default CanadaTollFreePage
