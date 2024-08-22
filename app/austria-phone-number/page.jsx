import React from 'react'
import Footer from '@/components/Footer'
import AustriaEightCards from '@/components/InternationalNumbers/austria/AustriaEightCards'
import AustriaHeader from '@/components/InternationalNumbers/austria/AustriaHeader'
import AustriaSubHeader from '@/components/InternationalNumbers/austria/AustriaSubHeader'
import BenefitsOfAustriaNumber from '@/components/InternationalNumbers/austria/BenefitsOfAustriaNumber'
import HowToBuy from '@/components/InternationalNumbers/austria/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import FAQAccordionComponent from '@/components/InternationalNumbers/austria/FAQAccordion'
import AustriaFeatureCards from '@/components/InternationalNumbers/austria/FeatureCards'


const page = () => {
  return (
    <div>
      <AustriaHeader/>
      <AustriaSubHeader/>
      <BenefitsOfAustriaNumber/>
      <AustriaEightCards/>
      <HowToBuy/>
      <AustriaFeatureCards/>
      <FAQAccordionComponent/>
      <PhoneNumbers/>
      <Footer/>
    </div>
  )
}

export default page