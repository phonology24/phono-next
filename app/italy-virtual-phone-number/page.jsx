import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfItalyNumber from '@/components/InternationalNumbers/italy/BenefitsOfItalyNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/italy/FaAQAccordion'
import ItalyFeatureCards from '@/components/InternationalNumbers/italy/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/italy/HowToBuy'
import ItalyEightCards from '@/components/InternationalNumbers/italy/ItalyEightCards'
import ItalyHeader from '@/components/InternationalNumbers/italy/ItalyHeader'
import ItalySubHeader from '@/components/InternationalNumbers/italy/ItalySubHeader'
import React from 'react'
export const metadata = {
  title: 'Italy Virtual Phone Number | Reliable VoIP Solutions by Phonology',
  description: 'Enhance your business communication with an Italy virtual phone number. Phonology offers affordable VoIP services tailored for businesses of all sizes.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Italy-virtual-phone-number',
  alternates: {
    canonical: '/italy-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
    <ItalyHeader />
    <ItalySubHeader />
    <BenefitsOfItalyNumber />
    <ItalyEightCards />
    <HowToBuy />
    <ItalyFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
