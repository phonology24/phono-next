import Footer from '@/components/Footer'
import BenefitsOfColombiaNumber from '@/components/InternationalNumbers/colombia/BenefitsOfColombiaNumber'
import ColombiaEightCards from '@/components/InternationalNumbers/colombia/ColombiaEightCards'
import ColombiaHeader from '@/components/InternationalNumbers/colombia/ColombiaHeader'
import ColombiaSubHeader from '@/components/InternationalNumbers/colombia/ColumbiaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/colombia/FAQAccordion'
import ColombiaFeatureCards from '@/components/InternationalNumbers/colombia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/colombia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <ColombiaHeader />
      <ColombiaSubHeader />
      <BenefitsOfColombiaNumber />
      <ColombiaEightCards />
      <HowToBuy />
      <ColombiaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
