import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSwitzerlandNumber from '@/components/InternationalNumbers/switzerland/BenefitsOfSwitzerlandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/switzerland/FAQAccordion'
import SwitzerlandFeatureCards from '@/components/InternationalNumbers/switzerland/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/switzerland/howToBuy'
import SwitzerlandEightCards from '@/components/InternationalNumbers/switzerland/SwitzerlandEightCards'
import SwitzerlandHeader from '@/components/InternationalNumbers/switzerland/SwitzerlandHeader'
import SwitzerlandSubHeader from '@/components/InternationalNumbers/switzerland/SwitzerlandSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <SwitzerlandHeader />
  <SwitzerlandSubHeader />
  <BenefitsOfSwitzerlandNumber />
  <SwitzerlandEightCards />
  <HowToBuy />
  <SwitzerlandFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
