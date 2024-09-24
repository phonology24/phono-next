import Footer from '@/components/Footer'
import BenefitsOfChinaNumber from '@/components/InternationalNumbers/china/BenefitsOfChinaNumber'
import ChinaEightCards from '@/components/InternationalNumbers/china/ChinaEightCards'
import ChinaHeader from '@/components/InternationalNumbers/china/ChinaHeader'
import ChinaSubHeader from '@/components/InternationalNumbers/china/ChinaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/china/FAQAccordion'
import ChinaFeatureCards from '@/components/InternationalNumbers/china/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/china/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
  <ChinaHeader />
  <ChinaSubHeader />
  <BenefitsOfChinaNumber />
  <ChinaEightCards />
  <HowToBuy />
  <ChinaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
