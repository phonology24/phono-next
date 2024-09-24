import Footer from '@/components/Footer'
import BenefitsOfFinlandNumber from '@/components/InternationalNumbers/finland/BenefitsOfFinlandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/finland/FAQAccordion'
import FinlandFeatureCards from '@/components/InternationalNumbers/finland/FeatureCards'
import FinlandEightCards from '@/components/InternationalNumbers/finland/FinlandEightCards'
import FinlandHeader from '@/components/InternationalNumbers/finland/FinlandHeader'
import FinlandSubHeader from '@/components/InternationalNumbers/finland/FinlandSubHeader'
import HowToBuy from '@/components/InternationalNumbers/finland/HowtToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
    <FinlandHeader />
    <FinlandSubHeader />
    <BenefitsOfFinlandNumber />
    <FinlandEightCards />
    <HowToBuy />
    <FinlandFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
