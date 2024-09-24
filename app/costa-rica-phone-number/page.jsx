import Footer from '@/components/Footer'
import BenefitsOfCostaRicaNumber from '@/components/InternationalNumbers/costarica/BenefitsOfCostaRicaNumber'
import CostaRicaEightCards from '@/components/InternationalNumbers/costarica/CostaRicaEightCards'
import CostaRicaHeader from '@/components/InternationalNumbers/costarica/CostaRicaHeader'
import CostaRicaSubHeader from '@/components/InternationalNumbers/costarica/CostaRicaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/costarica/FAQAccordion'
import CostaRicaFeatureCards from '@/components/InternationalNumbers/costarica/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/costarica/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
    <CostaRicaHeader />
    <CostaRicaSubHeader />
    <BenefitsOfCostaRicaNumber />
    <CostaRicaEightCards />
    <HowToBuy />
    <CostaRicaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  )
}

export default page
