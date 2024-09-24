import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfTurkeyNumber from '@/components/InternationalNumbers/turkey/BenefitsOfTurkeyNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/turkey/FAQAccordion'
import TurkeyFeatureCards from '@/components/InternationalNumbers/turkey/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/turkey/HowToBuy'
import TurkeyEightCards from '@/components/InternationalNumbers/turkey/TurkeyEightCards'
import TurkeyHeader from '@/components/InternationalNumbers/turkey/TurkeyHeader'
import TurkeySubHeader from '@/components/InternationalNumbers/turkey/TurkeySubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <TurkeyHeader />
  <TurkeySubHeader />
  <BenefitsOfTurkeyNumber />
  <TurkeyEightCards />
  <HowToBuy />
  <TurkeyFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
