
import Footer from '@/components/Footer'
import BenefitsOfCanadaTollFreeNumber from '@/components/InternationalNumbers/canada-tf/BenefitsOfCanadaTollFreeNumber'
import CanadaTollFreeEightCards from '@/components/InternationalNumbers/canada-tf/CanadaTollFreeEightCards'
import CanadaTollFreeHeader from '@/components/InternationalNumbers/canada-tf/CanadaTollFreeHeader'
import CanadaTollFreeSubHeader from '@/components/InternationalNumbers/canada-tf/CanadaTollFreeSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/canada-tf/FAQAccordion'
import CanadaTollFreeFeatureCards from '@/components/InternationalNumbers/canada-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/canada-tf/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const CanadaTollFreePage = () => {
  return (
    <div>
      <CanadaTollFreeHeader/>
      <CanadaTollFreeSubHeader />
      <BenefitsOfCanadaTollFreeNumber />
      <CanadaTollFreeEightCards />
      <HowToBuy />
      <CanadaTollFreeFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default CanadaTollFreePage
