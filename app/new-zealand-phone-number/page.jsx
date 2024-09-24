import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfNewZealandNumber from '@/components/InternationalNumbers/newzealand/BenefitsOfNewZealandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/newzealand/FAQAccordion'
import NewZealandFeatureCards from '@/components/InternationalNumbers/newzealand/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/newzealand/HowToBuy'
import NewZealandEightCards from '@/components/InternationalNumbers/newzealand/NewZealandEightCards'
import NewZealandHeader from '@/components/InternationalNumbers/newzealand/NewZealandHeader'
import NewZealandSubHeader from '@/components/InternationalNumbers/newzealand/NewZealandSubHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <NewZealandHeader />
      <NewZealandSubHeader />
      <BenefitsOfNewZealandNumber />
      <NewZealandEightCards />
      <HowToBuy />
      <NewZealandFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
