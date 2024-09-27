import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfGhanaNumber from '@/components/InternationalNumbers/ghana/BenefitsOfGhanaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/ghana/FAQAccordion'
import GhanaFeatureCards from '@/components/InternationalNumbers/ghana/FeatureCards'
import GhanaEightCards from '@/components/InternationalNumbers/ghana/GhanaEightCards'
import GhanaHeader from '@/components/InternationalNumbers/ghana/GhanaHeader'
import GhanaSubHeader from '@/components/InternationalNumbers/ghana/GhanaSubHeader'
import HowToBuy from '@/components/InternationalNumbers/ghana/howToBuy'
import React from 'react'
export const metadata = {
  title: 'Ghana Virtual Phone Number | Phonology VoIP Services',
  description: 'Boost your business communication with a Ghana virtual phone number. Phonology offers scalable, affordable, and reliable VoIP solutions for global reach.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Ghana-virtual-phone-number',
  alternates: {
    canonical: '/ghana-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div>
    <GhanaHeader />
    <GhanaSubHeader />
    <BenefitsOfGhanaNumber />
    <GhanaEightCards />
    <HowToBuy />
    <GhanaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  )
}

export default page
