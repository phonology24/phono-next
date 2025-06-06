import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPeruNumber from '@/components/InternationalNumbers/peru/BenefitsOfPeruNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/peru/FAQAccordion'
import PeruFeatureCards from '@/components/InternationalNumbers/peru/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/peru/HowToBuy'
import PeruEightCards from '@/components/InternationalNumbers/peru/PeruEightCards'
import PeruHeader from '@/components/InternationalNumbers/peru/PeruHeader'
import PeruSubHeader from '@/components/InternationalNumbers/peru/PeruSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a Peru Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Enhance your business communication with a Peru virtual phone number. Phonology’s VoIP services offer reliable, scalable, and affordable global calling.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Peru-virtual-phone-number',
  alternates: {
    canonical: '/peru-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <PeruHeader />
      <PeruSubHeader />
      <BenefitsOfPeruNumber />
      <PeruEightCards />
      <HowToBuy />
      <PeruFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
