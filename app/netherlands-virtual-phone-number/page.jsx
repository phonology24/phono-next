import React from 'react'
import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfNetherLandsNumber from '@/components/InternationalNumbers/netherlands/BenefitsOfNetherlandsNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/netherlands/FAQAccordion'
import NetherlandsFeatureCards from '@/components/InternationalNumbers/netherlands/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/netherlands/HowToBuy'
import NetherlandsEightCards from '@/components/InternationalNumbers/netherlands/NetherlandsEightCards'
import NetherlandsHeader from '@/components/InternationalNumbers/netherlands/NetherlandsHeader'
import NetherlandsSubHeader from '@/components/InternationalNumbers/netherlands/NetherlandsSubHeader'
export const metadata = {
  title: 'Get a Netherlands Virtual Phone Number | Phonology VoIP',
  description: 'Enhance your business communication with a Netherlands virtual phone number. Phonology offers reliable and affordable VoIP services to keep you connected globally.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Netherlands-virtual-phone-number',
  alternates: {
    canonical: '/netherlands-virtual-phone-number',
  },
};


const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}> 
      <NetherlandsHeader />
      <NetherlandsSubHeader />
      <BenefitsOfNetherLandsNumber />
      <NetherlandsEightCards />
      <HowToBuy />
      <NetherlandsFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>

  )
}

export default page
