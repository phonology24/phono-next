import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSriLankaNumber from '@/components/InternationalNumbers/sreelanka/BenefitsOfSrilankaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/sreelanka/FAQAccordion'
import SriLankaFeatureCards from '@/components/InternationalNumbers/sreelanka/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/sreelanka/HowToBuy'
import SriLankaSubHeader from '@/components/InternationalNumbers/sreelanka/SriankaSubHeader'
import SriLankaEightCards from '@/components/InternationalNumbers/sreelanka/SrilankaEightCards'
import SriLankaHeader from '@/components/InternationalNumbers/sreelanka/SrilankaHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <SriLankaHeader />
  <SriLankaSubHeader />
  <BenefitsOfSriLankaNumber />
  <SriLankaEightCards />
  <HowToBuy />
  <SriLankaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
