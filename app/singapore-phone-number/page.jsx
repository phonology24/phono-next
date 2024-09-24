import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSingaporeNumber from '@/components/InternationalNumbers/singapore/BenefitsOfSingaporeNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/singapore/FAQAccordion'
import SingaporeFeatureCards from '@/components/InternationalNumbers/singapore/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/singapore/HowToBuy'
import SingaporeEightCards from '@/components/InternationalNumbers/singapore/SingaporeEightCards'
import SingaporeHeader from '@/components/InternationalNumbers/singapore/SingaporeHeader'
import SingaporeSubHeader from '@/components/InternationalNumbers/singapore/SingaporeSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <SingaporeHeader />
  <SingaporeSubHeader />
  <BenefitsOfSingaporeNumber />
  <SingaporeEightCards />
  <HowToBuy />
  <SingaporeFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
