import Footer from '@/components/Footer'
import BenefitsOfBelizeNumber from '@/components/InternationalNumbers/belize/BenefitsOfBelizeNumber'
import BelizeEightCards from '@/components/InternationalNumbers/belize/BelizeEightCards'
import BelizeHeader from '@/components/InternationalNumbers/belize/BelizeHeader'
import BelizeSubHeader from '@/components/InternationalNumbers/belize/BelizeSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/belize/FAQAccordion'
import BelizeFeatureCards from '@/components/InternationalNumbers/belize/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/belize/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const BelizePhoneNumbersPage = () => {
  return (
    <div>
      <BelizeHeader />
      <BelizeSubHeader />
      <BenefitsOfBelizeNumber />
      <BelizeEightCards />
      <HowToBuy />
      <BelizeFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default BelizePhoneNumbersPage
