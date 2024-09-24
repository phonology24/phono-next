import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPolandNumber from '@/components/InternationalNumbers/poland/BenefitsOfPolandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/poland/FAQAccordion'
import PolandFeatureCards from '@/components/InternationalNumbers/poland/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/poland/HowToBuy'
import PolandEightCards from '@/components/InternationalNumbers/poland/PolandEightCards'
import PolandHeader from '@/components/InternationalNumbers/poland/PolandHeader'
import PolandSubHeader from '@/components/InternationalNumbers/poland/PolandSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <PolandHeader />
  <PolandSubHeader />
  <BenefitsOfPolandNumber />
  <PolandEightCards />
  <HowToBuy />
  <PolandFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
