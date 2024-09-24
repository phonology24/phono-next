import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfVietnamNumber from '@/components/InternationalNumbers/vietnam/BenefitsOfVietnamNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/vietnam/FAQAccordion'
import VietnamFeatureCards from '@/components/InternationalNumbers/vietnam/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/vietnam/HowToBuy'
import VietnamEightCards from '@/components/InternationalNumbers/vietnam/VietnamEightCards'
import VietnamHeader from '@/components/InternationalNumbers/vietnam/VietnamHeader'
import VietnamSubHeader from '@/components/InternationalNumbers/vietnam/VietnamSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <VietnamHeader />
  <VietnamSubHeader />
  <BenefitsOfVietnamNumber />
  <VietnamEightCards />
  <HowToBuy />
  <VietnamFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
