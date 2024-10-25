import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSriLankaNumber from '@/components/InternationalNumbers/sreelanka/BenefitsOfSrilankaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/sreelanka/FAQAccordion'
import SriLankaFeatureCards from '@/components/InternationalNumbers/sreelanka/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/sreelanka/HowToBuy'
import SriLankaSubHeader from '@/components/InternationalNumbers/sreelanka/SriankaSubHeader'
import SriLankaEightCards from '@/components/InternationalNumbers/sreelanka/SrilankaEightCards'
import SriLankaHeader from '@/components/InternationalNumbers/sreelanka/SrilankaHeader'
import React from 'react'
export const metadata = {
  title: 'Sri Lanka Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Get a Sri Lanka virtual phone number to improve your international communication. Phonology offers scalable, reliable, and affordable VoIP services.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Sri-Lanka-virtual-phone-number',
  alternates: {
    canonical: '/sri-lanka-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <SriLankaHeader />
  <SriLankaSubHeader />
  <BenefitsOfSriLankaNumber />
  <SriLankaEightCards />
  <HowToBuy />
  <SriLankaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
