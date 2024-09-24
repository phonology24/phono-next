import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUAENumber from '@/components/InternationalNumbers/uae/BenefitsOfUAENumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uae/FAQAccordion'
import UAEFeatureCards from '@/components/InternationalNumbers/uae/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uae/HowToBuy'
import UAEEightCards from '@/components/InternationalNumbers/uae/UAEEightCards'
import UAEHeader from '@/components/InternationalNumbers/uae/UAEHeader'
import UAESubHeader from '@/components/InternationalNumbers/uae/UAESubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <UAEHeader />
  <UAESubHeader />
  <BenefitsOfUAENumber />
  <UAEEightCards />
  <HowToBuy />
  <UAEFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
