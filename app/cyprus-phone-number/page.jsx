import Footer from '@/components/Footer'
import BenefitsOfCyprusNumber from '@/components/InternationalNumbers/cyprus/BenefitsOfCyprusNumber'
import CyprusEightCards from '@/components/InternationalNumbers/cyprus/CyprusEightCards'
import CyprusHeader from '@/components/InternationalNumbers/cyprus/CyprusHeader'
import CyprusSubHeader from '@/components/InternationalNumbers/cyprus/CyprusSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/cyprus/FAQAccordion'
import CyprusFeatureCards from '@/components/InternationalNumbers/cyprus/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/cyprus/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
    <CyprusHeader />
    <CyprusSubHeader />
    <BenefitsOfCyprusNumber />
    <CyprusEightCards />
    <HowToBuy />
    <CyprusFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  
  )
}

export default page
