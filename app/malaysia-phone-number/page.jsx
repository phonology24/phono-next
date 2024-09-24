import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfMalaysiaNumber from '@/components/InternationalNumbers/malaysia/BenefitsOfMalaysiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/malaysia/FAQAccordion'
import MalaysiaFeatureCards from '@/components/InternationalNumbers/malaysia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/malaysia/HowToBuy'
import MalaysiaEightCards from '@/components/InternationalNumbers/malaysia/MalaysiaEightCards'
import MalaysiaHeader from '@/components/InternationalNumbers/malaysia/MalaysiaHeader'
import MalaysiaSubHeader from '@/components/InternationalNumbers/malaysia/MalaysiaSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <MalaysiaHeader />
  <MalaysiaSubHeader />
  <BenefitsOfMalaysiaNumber />
  <MalaysiaEightCards />
  <HowToBuy />
  <MalaysiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
