import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfIsraelNumber from '@/components/InternationalNumbers/israel/BenefitsOfIsraelNumber'
import IsraelFeatureCards from '@/components/InternationalNumbers/israel/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/israel/HowToBuy'
import IsraelEightCards from '@/components/InternationalNumbers/israel/IsraelEightCards'
import IsraelHeader from '@/components/InternationalNumbers/israel/IsraelHeader'
import IsraelSubHeader from '@/components/InternationalNumbers/israel/IsraelSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/USA/FAQAccordion'
import React from 'react'

const page = () => {
  return (
<div>
  <IsraelHeader />
  <IsraelSubHeader />
  <BenefitsOfIsraelNumber />
  <IsraelEightCards />
  <HowToBuy />
  <IsraelFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
