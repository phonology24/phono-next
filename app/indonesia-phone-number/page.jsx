import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfIndonesiaNumber from '@/components/InternationalNumbers/indonesia/BenefitsOfIndonesiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/indonesia/FAQAccordion'
import IndonesiaFeatureCards from '@/components/InternationalNumbers/indonesia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/indonesia/HowToBuy'
import IndonesiaEightCards from '@/components/InternationalNumbers/indonesia/IndonesiaEightCards'
import IndonesiaHeader from '@/components/InternationalNumbers/indonesia/IndonesiaHeader'
import IndonesiaSubHeader from '@/components/InternationalNumbers/indonesia/IndonesiaSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <IndonesiaHeader />
  <IndonesiaSubHeader />
  <BenefitsOfIndonesiaNumber />
  <IndonesiaEightCards />
  <HowToBuy />
  <IndonesiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
