import Footer from '@/components/Footer'
import BangladeshEightCards from '@/components/InternationalNumbers/bangladesh/BangladeshEightCards'
import BangladeshHeader from '@/components/InternationalNumbers/bangladesh/BangladeshHeader'
import BangladeshSubHeader from '@/components/InternationalNumbers/bangladesh/BangladeshSubHeader'
import BenefitsOfBangladeshNumber from '@/components/InternationalNumbers/bangladesh/BenefitsOfBangladeshNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/bangladesh/FAQAccordion'
import BangladeshFeatureCards from '@/components/InternationalNumbers/bangladesh/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/bangladesh/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
  <BangladeshHeader />
  <BangladeshSubHeader />
  <BenefitsOfBangladeshNumber />
  <BangladeshEightCards />
  <HowToBuy />
  <BangladeshFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
