import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfJapanNumber from '@/components/InternationalNumbers/japan/BenefitsOfJapanNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/japan/FAQAccordion'
import JapanFeatureCards from '@/components/InternationalNumbers/japan/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/japan/HowToBuy'
import JapanEightCards from '@/components/InternationalNumbers/japan/JapanEightCards'
import JapanHeader from '@/components/InternationalNumbers/japan/JapanHeader'
import JapanSubHeader from '@/components/InternationalNumbers/japan/JapanSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a Japan Virtual Phone Number | Phonology VoIP',
  description: 'Enhance your international communication with a Japan virtual phone number. Phonology provides scalable, reliable, and affordable VoIP solutions.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Japan-virtual-phone-number',
  alternates: {
    canonical: '/japan-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <JapanHeader />
  <JapanSubHeader />
  <BenefitsOfJapanNumber />
  <JapanEightCards />
  <HowToBuy />
  <JapanFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
