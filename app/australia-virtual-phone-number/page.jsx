import Footer from '@/components/Footer'
import AustraliaEightCards from '@/components/InternationalNumbers/australia/AustraliaEightCards'
import AustraliaHeader from '@/components/InternationalNumbers/australia/AustraliaHeader'
import AustraliaSubHeader from '@/components/InternationalNumbers/australia/AustraliaSubHeader'
import BenefitsOfAustraliaNumber from '@/components/InternationalNumbers/australia/BenefitsOfAustraliaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/australia/FAQAccordion'
import AustraliaFeatureCards from '@/components/InternationalNumbers/australia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/australia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Australia Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Enhance your business communication with an Australia virtual phone number. Phonology offers reliable and affordable VoIP solutions tailored for global reach.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Australia-virtual-phone-number',
  alternates: {
    canonical: '/australia-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <AustraliaHeader />
      <AustraliaSubHeader />
      <BenefitsOfAustraliaNumber />
      <AustraliaEightCards />
      <HowToBuy />
      <AustraliaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
