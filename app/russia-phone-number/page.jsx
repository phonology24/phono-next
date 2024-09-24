import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfRussiaNumber from '@/components/InternationalNumbers/russia/BenefitsOfRussiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/russia/FAQAccordion'
import RussiaFeatureCards from '@/components/InternationalNumbers/russia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/russia/HowToBuy'
import RussiaEightCards from '@/components/InternationalNumbers/russia/RussiaEightCards'
import RussiaHeader from '@/components/InternationalNumbers/russia/RussiaHeader'
import RussiaSubHeader from '@/components/InternationalNumbers/russia/RussiaSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <RussiaHeader />
  <RussiaSubHeader />
  <BenefitsOfRussiaNumber />
  <RussiaEightCards />
  <HowToBuy />
  <RussiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
