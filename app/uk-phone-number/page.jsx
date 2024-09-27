import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUKNumber from '@/components/InternationalNumbers/uk/BenefitsOfUKNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uk/FAQAccordion'
import UKFeatureCards from '@/components/InternationalNumbers/uk/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uk/HowToBuy'
import UKEightCards from '@/components/InternationalNumbers/uk/UKEightCards'
import UKHeader from '@/components/InternationalNumbers/uk/UKHeader'
import UKSubHeader from '@/components/InternationalNumbers/uk/UKSubHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <UKHeader/>
      <UKSubHeader/>
      <BenefitsOfUKNumber/>
      <UKEightCards/>
      <HowToBuy/>
      <UKFeatureCards/>
      <FAQAccordionComponent/>
      <PhoneNumbers/>
      <Footer/>
    </div>
  )
}

export default page
