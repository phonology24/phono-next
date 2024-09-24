import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUKTFNumber from '@/components/InternationalNumbers/uk-tf/BenefitsOfUKTFNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uk-tf/FAQAccordion'
import UKTFFeatureCards from '@/components/InternationalNumbers/uk-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uk-tf/HowToBuy'
import UKTFEightCards from '@/components/InternationalNumbers/uk-tf/UKTFEightCards'
import UKTFHeader from '@/components/InternationalNumbers/uk-tf/UKTFHeader'
import UKTFSubHeader from '@/components/InternationalNumbers/uk-tf/UKTFSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <UKTFHeader />
  <UKTFSubHeader />
  <BenefitsOfUKTFNumber />
  <UKTFEightCards />
  <HowToBuy />
  <UKTFFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
