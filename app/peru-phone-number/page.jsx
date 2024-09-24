import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPeruNumber from '@/components/InternationalNumbers/peru/BenefitsOfPeruNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/peru/FAQAccordion'
import PeruFeatureCards from '@/components/InternationalNumbers/peru/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/peru/HowToBuy'
import PeruEightCards from '@/components/InternationalNumbers/peru/PeruEightCards'
import PeruHeader from '@/components/InternationalNumbers/peru/PeruHeader'
import PeruSubHeader from '@/components/InternationalNumbers/peru/PeruSubHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <PeruHeader />
      <PeruSubHeader />
      <BenefitsOfPeruNumber />
      <PeruEightCards />
      <HowToBuy />
      <PeruFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
