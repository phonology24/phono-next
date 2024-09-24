import Footer from '@/components/Footer'
import BenefitsOfChileNumber from '@/components/InternationalNumbers/chile/BenefitsOfChileNumber'
import ChileEightCards from '@/components/InternationalNumbers/chile/ChileEightCards'
import ChileHeader from '@/components/InternationalNumbers/chile/ChileHeader'
import ChileSubHeader from '@/components/InternationalNumbers/chile/ChileSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/chile/FAQAccordion'
import ChileFeatureCards from '@/components/InternationalNumbers/chile/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/chile/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
      <ChileHeader />
      <ChileSubHeader />
      <BenefitsOfChileNumber />
      <ChileEightCards />
      <HowToBuy />
      <ChileFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
