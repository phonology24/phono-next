import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSwedenNumber from '@/components/InternationalNumbers/sweden/BenefitsOfSwedenNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/sweden/FAQAccordion'
import SwedenFeatureCards from '@/components/InternationalNumbers/sweden/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/sweden/HowToBuy'
import SwedenEightCards from '@/components/InternationalNumbers/sweden/SwedenEightCards'
import SwedenHeader from '@/components/InternationalNumbers/sweden/SwedenHeader'
import SwedenSubHeader from '@/components/InternationalNumbers/sweden/SwedenSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <SwedenHeader />
  <SwedenSubHeader />
  <BenefitsOfSwedenNumber />
  <SwedenEightCards />
  <HowToBuy />
  <SwedenFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
