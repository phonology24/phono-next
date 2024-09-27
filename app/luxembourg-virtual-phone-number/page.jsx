import React from 'react'
import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfLuxembourgNumber from '@/components/InternationalNumbers/luxembourg/BenefitsOfLuxembourgNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/luxembourg/FAQAccordion'
import LuxembourgFeatureCards from '@/components/InternationalNumbers/luxembourg/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/luxembourg/HowToBuy'
import LuxembourgEightCards from '@/components/InternationalNumbers/luxembourg/LuxembourgEightCards'
import LuxembourgHeader from '@/components/InternationalNumbers/luxembourg/LuxembourgHeader'
import LuxembourgSubHeader from '@/components/InternationalNumbers/luxembourg/LuxembourgSubHeader'
export const metadata = {
  title: 'Get a Luxembourg Virtual Phone Number | Phonology',
  description: 'Expand your business with a Luxembourg virtual phone number. Phonology provides scalable, affordable VoIP solutions for global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Luxembourg-virtual-phone-number',
  alternates: {
    canonical: '/luxembourg-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div>
      <LuxembourgHeader />
      <LuxembourgSubHeader />
      <BenefitsOfLuxembourgNumber />
      <LuxembourgEightCards />
      <HowToBuy />
      <LuxembourgFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
