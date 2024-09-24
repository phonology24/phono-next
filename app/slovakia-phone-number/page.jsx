import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSlovakiaNumber from '@/components/InternationalNumbers/slovakia/benefitsOfSlovakiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/slovakia/FAQAccordion'
import SlovakiaFeatureCards from '@/components/InternationalNumbers/slovakia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/slovakia/howToBuy'
import SlovakiaEightCards from '@/components/InternationalNumbers/slovakia/SlovakiaEightCards'
import SlovakiaHeader from '@/components/InternationalNumbers/slovakia/SlovakiaHeader'
import SlovakiaSubHeader from '@/components/InternationalNumbers/slovakia/SlovakiaSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <SlovakiaHeader />
  <SlovakiaSubHeader />
  <BenefitsOfSlovakiaNumber />
  <SlovakiaEightCards />
  <HowToBuy />
  <SlovakiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
