import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPhilippinessNumber from '@/components/InternationalNumbers/philippiness/BenefitsOfPhilippinessNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/philippiness/FAQAccordion'
import PhilippinessFeatureCards from '@/components/InternationalNumbers/philippiness/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/philippiness/HowToBuy'
import PhilippinessEightCards from '@/components/InternationalNumbers/philippiness/PhilippinessEightCards'
import PhilippinessHeader from '@/components/InternationalNumbers/philippiness/PhilippinessHeader'
import PhilippinessSubHeader from '@/components/InternationalNumbers/philippiness/PhilippinessSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <PhilippinessHeader />
  <PhilippinessSubHeader />
  <BenefitsOfPhilippinessNumber />
  <PhilippinessEightCards />
  <HowToBuy />
  <PhilippinessFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>
  )
}

export default page
