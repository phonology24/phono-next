import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfIsraelNumber from '@/components/InternationalNumbers/israel/BenefitsOfIsraelNumber'
import IsraelFeatureCards from '@/components/InternationalNumbers/israel/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/israel/HowToBuy'
import IsraelEightCards from '@/components/InternationalNumbers/israel/IsraelEightCards'
import IsraelHeader from '@/components/InternationalNumbers/israel/IsraelHeader'
import IsraelSubHeader from '@/components/InternationalNumbers/israel/IsraelSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/USA/FAQAccordion'
import React from 'react'
export const metadata = {
  title: 'Israel Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Strengthen your business communication with an Israel virtual phone number. Phonology offers affordable and reliable VoIP solutions tailored for global business.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Israel-virtual-phone-number',
  alternates: {
    canonical: '/israel-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <IsraelHeader />
  <IsraelSubHeader />
  <BenefitsOfIsraelNumber />
  <IsraelEightCards />
  <HowToBuy />
  <IsraelFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
