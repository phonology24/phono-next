import Footer from '@/components/Footer'
import BenefitsOfBrazilNumber from '@/components/InternationalNumbers/brazil/BenefitsOfBrazilNumber'
import BrazilEightCards from '@/components/InternationalNumbers/brazil/BrazilEightCards'
import BrazilHeader from '@/components/InternationalNumbers/brazil/BrazilHeader'
import BrazilSubHeader from '@/components/InternationalNumbers/brazil/BrazilSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/brazil/FAQAccordion'
import BrazilFeatureCards from '@/components/InternationalNumbers/brazil/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/brazil/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <BrazilHeader />
      <BrazilSubHeader />
      <BenefitsOfBrazilNumber />
      <BrazilEightCards />
      <HowToBuy />
      <BrazilFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
