import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfRussiaNumber from '@/components/InternationalNumbers/russia/BenefitsOfRussiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/russia/FAQAccordion'
import RussiaFeatureCards from '@/components/InternationalNumbers/russia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/russia/HowToBuy'
import RussiaEightCards from '@/components/InternationalNumbers/russia/RussiaEightCards'
import RussiaHeader from '@/components/InternationalNumbers/russia/RussiaHeader'
import RussiaSubHeader from '@/components/InternationalNumbers/russia/RussiaSubHeader'
import React from 'react'
export const metadata = {
  title: 'Russia Virtual Phone Number | Reliable VoIP by Phonology',
  description: 'Strengthen your communication with a Russia virtual phone number. Phonology’s VoIP solutions offer seamless, affordable, and reliable global calling.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Russia-virtual-phone-number',
  alternates: {
    canonical: '/russia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <RussiaHeader />
  <RussiaSubHeader />
  <BenefitsOfRussiaNumber />
  <RussiaEightCards />
  <HowToBuy />
  <RussiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
