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

const page = () => {
  return (
    <div>
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
