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
const page = () => {
  return (
    <div>
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