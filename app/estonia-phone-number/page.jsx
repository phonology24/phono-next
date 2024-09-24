import React from 'react'
import Footer from '@/components/Footer'
import BenefitsOfEstoniaNumber from '@/components/InternationalNumbers/estonia/BenefitsOfEstoniaNumber'
import EstoniaEightCards from '@/components/InternationalNumbers/estonia/EstoniaEightCards'
import EstoniaHeader from '@/components/InternationalNumbers/estonia/EstoniaHeader'
import EstoniaSubHeader from '@/components/InternationalNumbers/estonia/EstoniaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/estonia/FAQAccordion'
import EstoniaFeatureCards from '@/components/InternationalNumbers/estonia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/estonia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'

const page = () => {
  return (
<div>
    <EstoniaHeader />
    <EstoniaSubHeader />
    <BenefitsOfEstoniaNumber />
    <EstoniaEightCards />
    <HowToBuy />
    <EstoniaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page