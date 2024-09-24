import Footer from '@/components/Footer'
import AustraliaTollFreeEightCards from '@/components/InternationalNumbers/australia-tf/AustraliaTollFreeEightCards'
import AustraliaTollFreeHeader from '@/components/InternationalNumbers/australia-tf/AustraliaTollFreeHeader'
import AustraliaTollFreeSubHeader from '@/components/InternationalNumbers/australia-tf/AustraliaTollFreeSubHeader'
import BenefitsOfAustraliaTollFreeNumber from '@/components/InternationalNumbers/australia-tf/BenefitsOfAustraliaTollFreeNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/australia-tf/FAQAccordion'
import AustraliaTollFreeFeatureCards from '@/components/InternationalNumbers/australia-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/australia-tf/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
    <AustraliaTollFreeHeader />
    <AustraliaTollFreeSubHeader />
    <BenefitsOfAustraliaTollFreeNumber />
    <AustraliaTollFreeEightCards />
    <HowToBuy />
    <AustraliaTollFreeFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  )
}

export default page
