import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPortugalNumber from '@/components/InternationalNumbers/portugal/BenefitsOfPortugalNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/portugal/FAQAccordion'
import PortugalFeatureCards from '@/components/InternationalNumbers/portugal/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/portugal/HowToBuy'
import PortugalEightCards from '@/components/InternationalNumbers/portugal/PortugalEightCards'
import PortugalHeader from '@/components/InternationalNumbers/portugal/PortugalHeader'
import PortugalSubHeader from '@/components/InternationalNumbers/portugal/PortugalSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <PortugalHeader />
  <PortugalSubHeader />
  <BenefitsOfPortugalNumber />
  <PortugalEightCards />
  <HowToBuy />
  <PortugalFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
