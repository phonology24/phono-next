import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfTurkeyNumber from '@/components/InternationalNumbers/turkey/BenefitsOfTurkeyNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/turkey/FAQAccordion'
import TurkeyFeatureCards from '@/components/InternationalNumbers/turkey/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/turkey/HowToBuy'
import TurkeyEightCards from '@/components/InternationalNumbers/turkey/TurkeyEightCards'
import TurkeyHeader from '@/components/InternationalNumbers/turkey/TurkeyHeader'
import TurkeySubHeader from '@/components/InternationalNumbers/turkey/TurkeySubHeader'
import React from 'react'
export const metadata = {
  title: 'Turkey Virtual Phone Number | Affordable VoIP by Phonology',
  description: 'Expand your international presence with a Turkey virtual phone number. Phonology offers reliable VoIP services that provide clear and seamless communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Turkey-virtual-phone-number',
  alternates: {
    canonical: '/turkey-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <TurkeyHeader />
  <TurkeySubHeader />
  <BenefitsOfTurkeyNumber />
  <TurkeyEightCards />
  <HowToBuy />
  <TurkeyFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
