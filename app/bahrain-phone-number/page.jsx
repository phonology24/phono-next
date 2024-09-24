import Footer from '@/components/Footer'
import BahrainEightCards from '@/components/InternationalNumbers/bahrain/BahrainEightCards'
import BahrainHeader from '@/components/InternationalNumbers/bahrain/BahrainHeader'
import BahrainSubHeader from '@/components/InternationalNumbers/bahrain/BahrainSubHeader'
import BenefitsOfBahrainNumber from '@/components/InternationalNumbers/bahrain/BenefitsOfBahrainNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/bahrain/FAQAccordion'
import BahrainFeatureCards from '@/components/InternationalNumbers/bahrain/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/bahrain/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
  <BahrainHeader />
  <BahrainSubHeader />
  <BenefitsOfBahrainNumber />
  <BahrainEightCards />
  <HowToBuy />
  <BahrainFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
