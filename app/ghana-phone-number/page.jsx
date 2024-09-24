import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfGhanaNumber from '@/components/InternationalNumbers/ghana/BenefitsOfGhanaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/ghana/FAQAccordion'
import GhanaFeatureCards from '@/components/InternationalNumbers/ghana/FeatureCards'
import GhanaEightCards from '@/components/InternationalNumbers/ghana/GhanaEightCards'
import GhanaHeader from '@/components/InternationalNumbers/ghana/GhanaHeader'
import GhanaSubHeader from '@/components/InternationalNumbers/ghana/GhanaSubHeader'
import HowToBuy from '@/components/InternationalNumbers/ghana/howToBuy'
import React from 'react'

const page = () => {
  return (
    <div>
    <GhanaHeader />
    <GhanaSubHeader />
    <BenefitsOfGhanaNumber />
    <GhanaEightCards />
    <HowToBuy />
    <GhanaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  )
}

export default page
