import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUgandaNumber from '@/components/InternationalNumbers/uganda/BenefitsOfUgandaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uganda/FAQAccordion'
import UgandaFeatureCards from '@/components/InternationalNumbers/uganda/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uganda/HowToBuy'
import UgandaEightCards from '@/components/InternationalNumbers/uganda/UgandaEightCards'
import UgandaHeader from '@/components/InternationalNumbers/uganda/UgandaHeader'
import UgandaSubHeader from '@/components/InternationalNumbers/uganda/UgandaSubHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <UgandaHeader />
      <UgandaSubHeader />
      <BenefitsOfUgandaNumber />
      <UgandaEightCards />
      <HowToBuy />
      <UgandaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
