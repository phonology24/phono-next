import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSouthKoreaNumber from '@/components/InternationalNumbers/southkorea/BenefitsOfSouthKoreaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/southkorea/FAQAccordion'
import SouthKoreaFeatureCards from '@/components/InternationalNumbers/southkorea/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/southkorea/HowToBuy'
import SouthKoreaEightCards from '@/components/InternationalNumbers/southkorea/SouthKoreaEightCards'
import SouthKoreaHeader from '@/components/InternationalNumbers/southkorea/SouthKoreaHeader'
import SouthKoreaSubHeader from '@/components/InternationalNumbers/southkorea/SouthKoreaSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <SouthKoreaHeader />
  <SouthKoreaSubHeader />
  <BenefitsOfSouthKoreaNumber />
  <SouthKoreaEightCards />
  <HowToBuy />
  <SouthKoreaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
