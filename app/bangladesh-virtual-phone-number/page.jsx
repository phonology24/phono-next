import Footer from '@/components/Footer'
import BangladeshEightCards from '@/components/InternationalNumbers/bangladesh/BangladeshEightCards'
import BangladeshHeader from '@/components/InternationalNumbers/bangladesh/BangladeshHeader'
import BangladeshSubHeader from '@/components/InternationalNumbers/bangladesh/BangladeshSubHeader'
import BenefitsOfBangladeshNumber from '@/components/InternationalNumbers/bangladesh/BenefitsOfBangladeshNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/bangladesh/FAQAccordion'
import BangladeshFeatureCards from '@/components/InternationalNumbers/bangladesh/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/bangladesh/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Bangladesh Virtual Phone Number | Reliable VoIP by Phonology',
  description: 'Expand your business with a Bangladesh virtual phone number. Phonology’s VoIP services offer crystal-clear calls and affordable global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Bangladesh-virtual-phone-number',
  alternates: {
    canonical: '/bangladesh-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <BangladeshHeader />
  <BangladeshSubHeader />
  <BenefitsOfBangladeshNumber />
  <BangladeshEightCards />
  <HowToBuy />
  <BangladeshFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
