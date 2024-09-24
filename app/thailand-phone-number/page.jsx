import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfThailandNumber from '@/components/InternationalNumbers/thailand/BenefitsOfThailandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/thailand/FAQAccordion'
import ThailandFeatureCards from '@/components/InternationalNumbers/thailand/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/thailand/HowToBuy'
import ThailandEightCards from '@/components/InternationalNumbers/thailand/ThailandEightCards'
import ThailandHeader from '@/components/InternationalNumbers/thailand/ThailandHeader'
import ThailandSubHeader from '@/components/InternationalNumbers/thailand/ThailandSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <ThailandHeader />
  <ThailandSubHeader />
  <BenefitsOfThailandNumber />
  <ThailandEightCards />
  <HowToBuy />
  <ThailandFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>


  )
}

export default page
