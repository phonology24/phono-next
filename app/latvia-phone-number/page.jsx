import React from 'react'
import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfLatviaNumber from '@/components/InternationalNumbers/latvia/BenefitsOfLatviaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/latvia/FAQAccordion'
import LatviaFeatureCards from '@/components/InternationalNumbers/latvia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/latvia/HowToBuy'
import LatviaEightCards from '@/components/InternationalNumbers/latvia/LatviaEightCards'
import LatviaHeader from '@/components/InternationalNumbers/latvia/LatviaHeader'
import LatviaSubHeader from '@/components/InternationalNumbers/latvia/LatviaSubHeader'

const page = () => {
  return (
<div>
    <LatviaHeader />
    <LatviaSubHeader />
    <BenefitsOfLatviaNumber />
    <LatviaEightCards />
    <HowToBuy />
    <LatviaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
