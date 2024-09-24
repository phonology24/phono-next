import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfRomaniaNumber from '@/components/InternationalNumbers/romania/BenefitsOfRomaniaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/romania/FAQAccordion'
import RomaniaFeatureCards from '@/components/InternationalNumbers/romania/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/romania/HowToBuy'
import RomaniaEightCards from '@/components/InternationalNumbers/romania/RomaniaEightCards'
import RomaniaHeader from '@/components/InternationalNumbers/romania/RomaniaHeader'
import RomaniaSubHeader from '@/components/InternationalNumbers/romania/RomaniaSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <RomaniaHeader />
  <RomaniaSubHeader />
  <BenefitsOfRomaniaNumber />
  <RomaniaEightCards />
  <HowToBuy />
  <RomaniaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
