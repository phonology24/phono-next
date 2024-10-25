import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSlovakiaNumber from '@/components/InternationalNumbers/slovakia/benefitsOfSlovakiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/slovakia/FAQAccordion'
import SlovakiaFeatureCards from '@/components/InternationalNumbers/slovakia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/slovakia/howToBuy'
import SlovakiaEightCards from '@/components/InternationalNumbers/slovakia/SlovakiaEightCards'
import SlovakiaHeader from '@/components/InternationalNumbers/slovakia/SlovakiaHeader'
import SlovakiaSubHeader from '@/components/InternationalNumbers/slovakia/SlovakiaSubHeader'
import React from 'react'
export const metadata = {
  title: 'Slovakia Virtual Phone Number for Your Business | Phonology',
  description: 'Boost your business presence with a Slovakia virtual phone number. Phonology offers affordable VoIP solutions with excellent call quality and support.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Slovakia-virtual-phone-number',
  alternates: {
    canonical: '/slovakia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <SlovakiaHeader />
  <SlovakiaSubHeader />
  <BenefitsOfSlovakiaNumber />
  <SlovakiaEightCards />
  <HowToBuy />
  <SlovakiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
