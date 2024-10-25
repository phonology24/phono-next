import React from 'react'
import Footer from '@/components/Footer'
import BenefitsOfCroatiaNumber from '@/components/InternationalNumbers/croatia/BenefitsOfCroatiaNumber'
import CroatiaEightCards from '@/components/InternationalNumbers/croatia/CroatiaEightCards'
import CroatiaHeader from '@/components/InternationalNumbers/croatia/CroatiaHeader'
import CroatiaSubHeader from '@/components/InternationalNumbers/croatia/CroatiaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/croatia/FAQAccordion'
import CroatiaFeatureCards from '@/components/InternationalNumbers/croatia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/croatia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
export const metadata = {
  title: 'Croatia Virtual Phone Number for Businesses | Phonology',
  description: 'Get a Croatia virtual phone number and strengthen your business communication. Benefit from Phonology’s VoIP solutions with flexible, scalable, and affordable plans.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Croatia-virtual-phone-number',
  alternates: {
    canonical: '/croatia-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <CroatiaHeader />
      <CroatiaSubHeader />
      <BenefitsOfCroatiaNumber />
      <CroatiaEightCards />
      <HowToBuy />
      <CroatiaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page