import Footer from '@/components/Footer'
import BenefitsOfCambodiaNumber from '@/components/InternationalNumbers/cambodia/BenefitsOfCambodiaNumber'
import CambodiaEightCards from '@/components/InternationalNumbers/cambodia/CambodiaEightCards'
import CambodiaHeader from '@/components/InternationalNumbers/cambodia/CambodiaHeader'
import CambodiaSubHeader from '@/components/InternationalNumbers/cambodia/CambodiaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/cambodia/FAQAccordion'
import CambodiaFeatureCards from '@/components/InternationalNumbers/cambodia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/cambodia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
  <CambodiaHeader />
  <CambodiaSubHeader />
  <BenefitsOfCambodiaNumber />
  <CambodiaEightCards />
  <HowToBuy />
  <CambodiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
