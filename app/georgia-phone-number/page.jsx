import Footer from '@/components/Footer'
import BenefitsOfGeorgiaNumber from '@/components/InternationalNumbers/georgia/BenefitsOfGeorgiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/georgia/FAQAccordion'
import GeorgiaFeatureCards from '@/components/InternationalNumbers/georgia/FeatureCards'
import GeorgiaEightCards from '@/components/InternationalNumbers/georgia/GeorgiaEightCards'
import GeorgiaHeader from '@/components/InternationalNumbers/georgia/GeorgiaHeader'
import GeorgiaSubHeader from '@/components/InternationalNumbers/georgia/GeorgiaSubHeader'
import HowToBuy from '@/components/InternationalNumbers/georgia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
    <GeorgiaHeader />
    <GeorgiaSubHeader />
    <BenefitsOfGeorgiaNumber />
    <GeorgiaEightCards />
    <HowToBuy />
    <GeorgiaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
