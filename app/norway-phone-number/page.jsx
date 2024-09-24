import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfNorwayNumber from '@/components/InternationalNumbers/norway/BenefitsOfNorwayNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/norway/FAQAccordion'
import NorwayFeatureCards from '@/components/InternationalNumbers/norway/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/norway/HowToBuy'
import NorwayEightCards from '@/components/InternationalNumbers/norway/NorwayEightCards'
import NorwayHeader from '@/components/InternationalNumbers/norway/NorwayHeader'
import NorwaySubHeader from '@/components/InternationalNumbers/norway/NorwaySubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <NorwayHeader />
  <NorwaySubHeader />
  <BenefitsOfNorwayNumber />
  <NorwayEightCards />
  <HowToBuy />
  <NorwayFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
