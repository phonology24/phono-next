import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUkraineNumber from '@/components/InternationalNumbers/ukraine/BenefitsOfUkraineNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/ukraine/FAQAccordion'
import UkraineFeatureCards from '@/components/InternationalNumbers/ukraine/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/ukraine/HowToBuy'
import UkraineEightCards from '@/components/InternationalNumbers/ukraine/UkraineEightCards'
import UkraineHeader from '@/components/InternationalNumbers/ukraine/UkraineHeader'
import UkraineSubHeader from '@/components/InternationalNumbers/ukraine/UkraineSubHeader'
import React from 'react'

const page = () => {
  return (
<div>
  <UkraineHeader />
  <UkraineSubHeader />
  <BenefitsOfUkraineNumber />
  <UkraineEightCards />
  <HowToBuy />
  <UkraineFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
