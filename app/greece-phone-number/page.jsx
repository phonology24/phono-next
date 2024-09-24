import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfGreeceNumber from '@/components/InternationalNumbers/greece/BenefitsOfGreeceNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/greece/FAQAccordion'
import GreeceFeatureCards from '@/components/InternationalNumbers/greece/FeatureCards'
import GreeceEightCards from '@/components/InternationalNumbers/greece/GreeceEightCards'
import GreeceHeader from '@/components/InternationalNumbers/greece/GreeceHeader'
import GreeceSubHeader from '@/components/InternationalNumbers/greece/GreeceSubHeader'
import HowToBuy from '@/components/InternationalNumbers/greece/HowToBuy'
import React from 'react'

const page = () => {
  return (
<div>
    <GreeceHeader />
    <GreeceSubHeader />
    <BenefitsOfGreeceNumber />
    <GreeceEightCards />
    <HowToBuy />
    <GreeceFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
