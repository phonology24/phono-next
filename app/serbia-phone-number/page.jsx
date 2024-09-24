import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSerbiaNumber from '@/components/InternationalNumbers/serbia/BenefitsOfSerbiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/serbia/FAQAccordion'
import SerbiaFeatureCards from '@/components/InternationalNumbers/serbia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/serbia/HowToBuy'
import SerbiaEightCards from '@/components/InternationalNumbers/serbia/SerbiaEightCards'
import SerbiaHeader from '@/components/InternationalNumbers/serbia/SerbiaHeader'
import SerbiaSubHeader from '@/components/InternationalNumbers/serbia/SerbiaSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <SerbiaHeader />
  <SerbiaSubHeader />
  <BenefitsOfSerbiaNumber />
  <SerbiaEightCards />
  <HowToBuy />
  <SerbiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
