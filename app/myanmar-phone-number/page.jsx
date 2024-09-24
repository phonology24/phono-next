import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfMyanmarNumber from '@/components/InternationalNumbers/myanmar/BenefitsOfMyanmarNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/myanmar/FAQAccordion'
import MyanmarFeatureCards from '@/components/InternationalNumbers/myanmar/FeaturesCards'
import HowToBuy from '@/components/InternationalNumbers/myanmar/HowToBuy'
import MyanmarEightCards from '@/components/InternationalNumbers/myanmar/MyanmarEightCards'
import MyanmarHeader from '@/components/InternationalNumbers/myanmar/MyanmarHeader'
import MyanmarSubHeader from '@/components/InternationalNumbers/myanmar/MyanmarSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <MyanmarHeader />
  <MyanmarSubHeader />
  <BenefitsOfMyanmarNumber />
  <MyanmarEightCards />
  <HowToBuy />
  <MyanmarFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
