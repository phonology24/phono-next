import Footer from '@/components/Footer'
import BenefitsOfCambodiaNumber from '@/components/InternationalNumbers/cambodia/BenefitsOfCambodiaNumber'
import CambodiaEightCards from '@/components/InternationalNumbers/cambodia/CambodiaEightCards'
import CambodiaHeader from '@/components/InternationalNumbers/cambodia/CambodiaHeader'
import CambodiaSubHeader from '@/components/InternationalNumbers/cambodia/CambodiaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/cambodia/FAQAccordion'
import CambodiaFeatureCards from '@/components/InternationalNumbers/cambodia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/cambodia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Cambodia Virtual Phone Number | Affordable VoIP Solutions',
  description: 'Enhance your business reach with a Cambodia virtual phone number. Phonology’s VoIP services offer cost-effective and reliable global connectivity.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Cambodia-virtual-phone-number',
  alternates: {
    canonical: '/cambodia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <CambodiaHeader />
  <CambodiaSubHeader />
  <BenefitsOfCambodiaNumber />
  <CambodiaEightCards />
  <HowToBuy />
  <CambodiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
