import Footer from '@/components/Footer'
import BenefitsOfGermanyNumber from '@/components/InternationalNumbers/germany/BenefitsOfGermanyNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/germany/FAQAccordion'
import GermanyFeatureCards from '@/components/InternationalNumbers/germany/FeatureCards'
import GermanyEightCards from '@/components/InternationalNumbers/germany/GermanyEightCards'
import GermanyHeader from '@/components/InternationalNumbers/germany/GermanyHeader'
import GermanySubHeader from '@/components/InternationalNumbers/germany/GermanySubHeader'
import HowToBuy from '@/components/InternationalNumbers/germany/howToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
    <GermanyHeader />
    <GermanySubHeader />
    <BenefitsOfGermanyNumber />
    <GermanyEightCards />
    <HowToBuy />
    <GermanyFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
