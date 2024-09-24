import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfItalyNumber from '@/components/InternationalNumbers/italy/BenefitsOfItalyNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/italy/FaAQAccordion'
import ItalyFeatureCards from '@/components/InternationalNumbers/italy/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/italy/HowToBuy'
import ItalyEightCards from '@/components/InternationalNumbers/italy/ItalyEightCards'
import ItalyHeader from '@/components/InternationalNumbers/italy/ItalyHeader'
import ItalySubHeader from '@/components/InternationalNumbers/italy/ItalySubHeader'
import React from 'react'

const page = () => {
  return (
<div>
    <ItalyHeader />
    <ItalySubHeader />
    <BenefitsOfItalyNumber />
    <ItalyEightCards />
    <HowToBuy />
    <ItalyFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
