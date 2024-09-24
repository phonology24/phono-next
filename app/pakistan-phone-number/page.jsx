import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPakistanNumber from '@/components/InternationalNumbers/pakistan/BenefitsOfPakistanNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/pakistan/FAQAccordion'
import PakistanFeatureCards from '@/components/InternationalNumbers/pakistan/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/pakistan/HowToBuy'
import PakistanEightCards from '@/components/InternationalNumbers/pakistan/PakistanEightCards'
import PakistanHeader from '@/components/InternationalNumbers/pakistan/PakistanHeader'
import PakistanSubHeader from '@/components/InternationalNumbers/pakistan/PakistanSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <PakistanHeader />
  <PakistanSubHeader />
  <BenefitsOfPakistanNumber />
  <PakistanEightCards />
  <HowToBuy />
  <PakistanFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
