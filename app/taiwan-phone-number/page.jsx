import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfTaiwanNumber from '@/components/InternationalNumbers/taiwan/BenefitsOfTaiwanNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/taiwan/FAQAccordion'
import TaiwanFeatureCards from '@/components/InternationalNumbers/taiwan/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/taiwan/HowToBuy'
import TaiwanEightCards from '@/components/InternationalNumbers/taiwan/TaiwanEightCards'
import TaiwanHeader from '@/components/InternationalNumbers/taiwan/TaiwanHeader'
import TaiwanSubHeader from '@/components/InternationalNumbers/taiwan/TaiwanSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <TaiwanHeader />
  <TaiwanSubHeader />
  <BenefitsOfTaiwanNumber />
  <TaiwanEightCards />
  <HowToBuy />
  <TaiwanFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
