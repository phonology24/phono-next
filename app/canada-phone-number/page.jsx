import Footer from '@/components/Footer'
import BenefitsOfCanadaNumber from '@/components/InternationalNumbers/canada/BenefitsOfCanadaNumber'
import CanadaEightCards from '@/components/InternationalNumbers/canada/CanadaEightCards'
import CanadaHeader from '@/components/InternationalNumbers/canada/CanadaHeader'
import CanadaSubHeader from '@/components/InternationalNumbers/canada/CanadaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/canada/FAQAccordion'
import CanadaFeatureCards from '@/components/InternationalNumbers/canada/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/canada/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const CanadaPhoneNumbersPage = () => {
  return (
    <div>
      <CanadaHeader />
      <CanadaSubHeader />
      <BenefitsOfCanadaNumber />
      <CanadaEightCards />
      <HowToBuy />
      <CanadaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default CanadaPhoneNumbersPage