import React from 'react'
import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfNetherLandsNumber from '@/components/InternationalNumbers/netherlands/BenefitsOfNetherlandsNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/netherlands/FAQAccordion'
import NetherlandsFeatureCards from '@/components/InternationalNumbers/netherlands/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/netherlands/HowToBuy'
import NetherlandsEightCards from '@/components/InternationalNumbers/netherlands/NetherlandsEightCards'
import NetherlandsHeader from '@/components/InternationalNumbers/netherlands/NetherlandsHeader'
import NetherlandsSubHeader from '@/components/InternationalNumbers/netherlands/NetherlandsSubHeader'


const page = () => {
  return (
    <div>
      <NetherlandsHeader />
      <NetherlandsSubHeader />
      <BenefitsOfNetherLandsNumber />
      <NetherlandsEightCards />
      <HowToBuy />
      <NetherlandsFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>

  )
}

export default page
