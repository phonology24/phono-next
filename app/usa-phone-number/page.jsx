import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUSANumber from '@/components/InternationalNumbers/USA/BenefitsOfUSANumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/USA/FAQAccordion'
import USAFeatureCards from '@/components/InternationalNumbers/USA/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/USA/HowToBuy'
import USAEightCards from '@/components/InternationalNumbers/USA/USAEightCards'
import USAHeader from '@/components/InternationalNumbers/USA/USAHeader'
import USASubHeader from '@/components/InternationalNumbers/USA/USASubHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <USAHeader />
      <USASubHeader />
      <BenefitsOfUSANumber />
      <USAEightCards />
      <HowToBuy />
      <USAFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
