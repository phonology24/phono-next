import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfGreeceNumber from '@/components/InternationalNumbers/greece/BenefitsOfGreeceNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/greece/FAQAccordion'
import GreeceFeatureCards from '@/components/InternationalNumbers/greece/FeatureCards'
import GreeceEightCards from '@/components/InternationalNumbers/greece/GreeceEightCards'
import GreeceHeader from '@/components/InternationalNumbers/greece/GreeceHeader'
import GreeceSubHeader from '@/components/InternationalNumbers/greece/GreeceSubHeader'
import HowToBuy from '@/components/InternationalNumbers/greece/HowToBuy'
import React from 'react'
export const metadata = {
  title: 'Greece Virtual Phone Number | Affordable VoIP Solutions',
  description: 'Expand your international presence with a Greece virtual phone number. Phonology offers reliable VoIP services that are flexible and budget-friendly.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Greece-virtual-phone-number',
  alternates: {
    canonical: '/greece-virtual-phone-number',
  },
};


const page = () => {
  return (
<div>
    <GreeceHeader />
    <GreeceSubHeader />
    <BenefitsOfGreeceNumber />
    <GreeceEightCards />
    <HowToBuy />
    <GreeceFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
