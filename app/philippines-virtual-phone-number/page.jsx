import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPhilippinessNumber from '@/components/InternationalNumbers/philippiness/BenefitsOfPhilippinessNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/philippiness/FAQAccordion'
import PhilippinessFeatureCards from '@/components/InternationalNumbers/philippiness/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/philippiness/HowToBuy'
import PhilippinessEightCards from '@/components/InternationalNumbers/philippiness/PhilippinessEightCards'
import PhilippinessHeader from '@/components/InternationalNumbers/philippiness/PhilippinessHeader'
import PhilippinessSubHeader from '@/components/InternationalNumbers/philippiness/PhilippinessSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a Philippines Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Expand your business reach with a Philippines virtual phone number. Phonology offers reliable, scalable VoIP services at affordable rates.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Philippines-virtual-phone-number',
  alternates: {
    canonical: '/philippines-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <PhilippinessHeader />
  <PhilippinessSubHeader />
  <BenefitsOfPhilippinessNumber />
  <PhilippinessEightCards />
  <HowToBuy />
  <PhilippinessFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>
  )
}

export default page
